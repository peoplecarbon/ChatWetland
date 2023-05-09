import AWS from 'aws-sdk';
import { promises as fsPromises, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join, basename } from 'path';
import PDFjs from 'pdfjs-dist';

import ProgressBar from 'progress';
import { createCanvas } from 'canvas';




const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// config Se bucket

const s3 = new AWS.S3({
  accessKeyId: 'AKIA5TRYXY54DLEBWG4X',
  secretAccessKey: '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',
  region: 'us-east-1' //'us-west-2'
});


const bucketName = 'carbonchat';
const s3FolderPath = 'pdf_files/';
const localFolderPath = 'docs';


const createLocalFolderIfNotExist = async (folderPath) => {
    try {
      await fsPromises.mkdir(folderPath, { recursive: true });
    } catch (error) {
      if (error.code !== 'EEXIST') throw error;
    }
  };
  
  
  const checkPdfFileHealth = async (filePath) => {
    try {
      const fileContent = await fsPromises.readFile(filePath, 'utf-8');
      const eofIndex = fileContent.lastIndexOf('%EOF');
  
      // 检查文件是否以 `%EOF` 结尾，允许最多 1024 个字符的尾随空白或其他内容
      if (eofIndex >= 0 && eofIndex >= fileContent.length - 1024) {
        console.log(`File is healthy: ${filePath}`);
        return true;
      } else {
        console.error(`Error checking PDF health for ${filePath}: No EOF marker found.`);
        return false;
      }
    } catch (error) {
      console.error(`Error checking PDF health for ${filePath}: ${error}`);
      return false;
    }
  };
  
  
  const downloadFileFromS3 = async (s3ObjectKey, fileSize) => {
    try {
      const params = {
        Bucket: bucketName,
        Key: s3ObjectKey
      };
  
      const s3Stream = s3.getObject(params).createReadStream();
      const localFilePath = join(__dirname, localFolderPath, basename(s3ObjectKey));
  
      const fileStream = createWriteStream(localFilePath);
  
      const progressBar = new ProgressBar('Downloading [:bar] :percent :etas', {
        complete: '=',
        incomplete: ' ',
        width: 20,
        total: fileSize,
      });
  
      await new Promise((resolve, reject) => {
        s3Stream.on('data', (chunk) => {
          progressBar.tick(chunk.length);
        });
        
        s3Stream.pipe(fileStream);
  
        fileStream.on('finish', resolve);
        fileStream.on('error', reject);
      });
  
      const isHealthy = await checkPdfFileHealth(localFilePath);
      if (isHealthy) {
        console.log(`Downloaded healthy PDF file: ${localFilePath}`);
      } else {
        await fsPromises.unlink(localFilePath);
        console.log(`Deleted unhealthy PDF file: ${localFilePath}`);
      }
    } catch (error) {
      console.error(`Error downloading file from S3: ${error}`);
    }
  };
  


  const listS3ObjectsAndDownload = async () => {
    try {
      await createLocalFolderIfNotExist(join(__dirname, localFolderPath));
  
      const params = {
        Bucket: bucketName,
        Prefix: s3FolderPath
      };
  
      const { Contents } = await s3.listObjectsV2(params).promise();
  
      for (const object of Contents) {
        await downloadFileFromS3(object.Key, object.Size);
        console.log(`Downloaded ${object.Key} to ${localFolderPath}`);
      }
    } catch (error) {
      console.error(`Error listing objects in S3: ${error}`);
    }
  };
  
  listS3ObjectsAndDownload();