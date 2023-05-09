const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const pdfjsLib = require('pdfjs-dist');
const ProgressBar = require('progress');


// config Se bucket

const s3 = new AWS.S3({
  accessKeyId: 'AKIA5TRYXY54DLEBWG4X',
  secretAccessKey: '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',
  region: 'us-east-1' //'us-west-2'
});


const bucketName = 'carbonchat';
const s3FolderPath = 'pdf_files/';
const localFolderPath = 'docs';


const createLocalFolderIfNotExist = (folderPath) => {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
};

const checkPdfFileHealth = async (filePath) => {
  try {
    const pdfData = new Uint8Array(fs.readFileSync(filePath));
    await pdfjsLib.getDocument({ data: pdfData }).promise;
    return true;
  } catch (error) {
    console.error(`Error checking PDF health for ${filePath}: ${error}`);
    return false;
  }
};

const downloadFileFromS3 = async (s3ObjectKey) => {
  try {
    const params = {
      Bucket: bucketName,
      Key: s3ObjectKey
    };

    const s3Stream = s3.getObject(params).createReadStream();
    const localFilePath = path.join(localFolderPath, path.basename(s3ObjectKey));

    const fileStream = fs.createWriteStream(localFilePath);

    const progressBar = new ProgressBar('Downloading [:bar] :percent :etas', {
      complete: '=',
      incomplete: ' ',
      width: 20,
      total: parseInt(params.Size),
    });

    s3Stream.on('data', (chunk) => {
      progressBar.tick(chunk.length);
    });

    s3Stream.pipe(fileStream);

    await new Promise((resolve, reject) => {
      fileStream.on('finish', resolve);
      fileStream.on('error', reject);
    });

    const isHealthy = await checkPdfFileHealth(localFilePath);
    if (!isHealthy) {
      fs.unlinkSync(localFilePath);
      console.log(`Deleted unhealthy PDF file: ${localFilePath}`);
    }
  } catch (error) {
    console.error(`Error downloading file from S3: ${error}`);
  }
};

const listS3ObjectsAndDownload = async () => {
  try {
    createLocalFolderIfNotExist(localFolderPath);

    const params = {
      Bucket: bucketName,
      Prefix: s3FolderPath
    };

    const { Contents } = await s3.listObjectsV2(params).promise();

    for (const object of Contents) {
      await downloadFileFromS3(object.Key);
      console.log(`Downloaded ${object.Key} to ${localFolderPath}`);
    }
  } catch (error) {
    console.error(`Error listing objects in S3: ${error}`);
  }
};

listS3ObjectsAndDownload();
