"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/chat";
exports.ids = ["pages/api/chat"];
exports.modules = {

/***/ "@pinecone-database/pinecone":
/*!**********************************************!*\
  !*** external "@pinecone-database/pinecone" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@pinecone-database/pinecone");

/***/ }),

/***/ "langchain/chains":
/*!***********************************!*\
  !*** external "langchain/chains" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("langchain/chains");;

/***/ }),

/***/ "langchain/embeddings/openai":
/*!**********************************************!*\
  !*** external "langchain/embeddings/openai" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = import("langchain/embeddings/openai");;

/***/ }),

/***/ "langchain/llms/openai":
/*!****************************************!*\
  !*** external "langchain/llms/openai" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("langchain/llms/openai");;

/***/ }),

/***/ "langchain/prompts":
/*!************************************!*\
  !*** external "langchain/prompts" ***!
  \************************************/
/***/ ((module) => {

module.exports = import("langchain/prompts");;

/***/ }),

/***/ "langchain/vectorstores/pinecone":
/*!**************************************************!*\
  !*** external "langchain/vectorstores/pinecone" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = import("langchain/vectorstores/pinecone");;

/***/ }),

/***/ "(api)/./config/pinecone.ts":
/*!****************************!*\
  !*** ./config/pinecone.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PINECONE_INDEX_NAME\": () => (/* binding */ PINECONE_INDEX_NAME),\n/* harmony export */   \"PINECONE_NAME_SPACE\": () => (/* binding */ PINECONE_NAME_SPACE)\n/* harmony export */ });\n/**\n * Change the namespace to the namespace on Pinecone you'd like to store your embeddings.\n */ if (!process.env.PINECONE_INDEX_NAME) {\n    throw new Error(\"Missing Pinecone index name in .env file\");\n}\nconst PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME ?? \"\";\nconst PINECONE_NAME_SPACE = \"chatcarbon\"; //namespace is optional for your vectors\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvcGluZWNvbmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Q0FFQyxHQUVELElBQUksQ0FBQ0EsUUFBUUMsR0FBRyxDQUFDQyxtQkFBbUIsRUFBRTtJQUNwQyxNQUFNLElBQUlDLE1BQU0sNENBQTRDO0FBQzlELENBQUM7QUFFRCxNQUFNRCxzQkFBc0JGLFFBQVFDLEdBQUcsQ0FBQ0MsbUJBQW1CLElBQUk7QUFFL0QsTUFBTUUsc0JBQXNCLGNBQWMsd0NBQXdDO0FBRTlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdC1jYXJib24vLi9jb25maWcvcGluZWNvbmUudHM/NmYwOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENoYW5nZSB0aGUgbmFtZXNwYWNlIHRvIHRoZSBuYW1lc3BhY2Ugb24gUGluZWNvbmUgeW91J2QgbGlrZSB0byBzdG9yZSB5b3VyIGVtYmVkZGluZ3MuXG4gKi9cblxuaWYgKCFwcm9jZXNzLmVudi5QSU5FQ09ORV9JTkRFWF9OQU1FKSB7XG4gIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBQaW5lY29uZSBpbmRleCBuYW1lIGluIC5lbnYgZmlsZScpO1xufVxuXG5jb25zdCBQSU5FQ09ORV9JTkRFWF9OQU1FID0gcHJvY2Vzcy5lbnYuUElORUNPTkVfSU5ERVhfTkFNRSA/PyAnJztcblxuY29uc3QgUElORUNPTkVfTkFNRV9TUEFDRSA9ICdjaGF0Y2FyYm9uJzsgLy9uYW1lc3BhY2UgaXMgb3B0aW9uYWwgZm9yIHlvdXIgdmVjdG9yc1xuXG5leHBvcnQgeyBQSU5FQ09ORV9JTkRFWF9OQU1FLCBQSU5FQ09ORV9OQU1FX1NQQUNFIH07XG4iXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIlBJTkVDT05FX0lOREVYX05BTUUiLCJFcnJvciIsIlBJTkVDT05FX05BTUVfU1BBQ0UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./config/pinecone.ts\n");

/***/ }),

/***/ "(api)/./pages/api/chat.ts":
/*!***************************!*\
  !*** ./pages/api/chat.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! langchain/embeddings/openai */ \"langchain/embeddings/openai\");\n/* harmony import */ var langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! langchain/vectorstores/pinecone */ \"langchain/vectorstores/pinecone\");\n/* harmony import */ var _utils_makechain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/makechain */ \"(api)/./utils/makechain.ts\");\n/* harmony import */ var _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/pinecone-client */ \"(api)/./utils/pinecone-client.ts\");\n/* harmony import */ var _config_pinecone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/pinecone */ \"(api)/./config/pinecone.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_0__, langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_1__, _utils_makechain__WEBPACK_IMPORTED_MODULE_2__, _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_3__]);\n([langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_0__, langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_1__, _utils_makechain__WEBPACK_IMPORTED_MODULE_2__, _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nasync function handler(req, res) {\n    const { question , history  } = req.body;\n    console.log(\"question\", question);\n    //only accept post requests\n    if (req.method !== \"POST\") {\n        res.status(405).json({\n            error: \"Method not allowed\"\n        });\n        return;\n    }\n    if (!question) {\n        return res.status(400).json({\n            message: \"No question in the request\"\n        });\n    }\n    // OpenAI recommends replacing newlines with spaces for best results\n    const sanitizedQuestion = question.trim().replaceAll(\"\\n\", \" \");\n    try {\n        const index = _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_3__.pinecone.Index(_config_pinecone__WEBPACK_IMPORTED_MODULE_4__.PINECONE_INDEX_NAME);\n        /* create vectorstore*/ const vectorStore = await langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_1__.PineconeStore.fromExistingIndex(new langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIEmbeddings({}), {\n            pineconeIndex: index,\n            textKey: \"text\",\n            namespace: _config_pinecone__WEBPACK_IMPORTED_MODULE_4__.PINECONE_NAME_SPACE\n        });\n        //create chain\n        const chain = (0,_utils_makechain__WEBPACK_IMPORTED_MODULE_2__.makeChain)(vectorStore);\n        //Ask a question using chat history\n        const response = await chain.call({\n            question: sanitizedQuestion,\n            chat_history: history || []\n        });\n        console.log(\"response\", response);\n        res.status(200).json(response);\n    } catch (error) {\n        console.log(\"error\", error);\n        res.status(500).json({\n            error: error.message || \"Something went wrong\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hhdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDK0Q7QUFDQztBQUNsQjtBQUNLO0FBQzBCO0FBRTlELGVBQWVNLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQSxNQUFNLEVBQUVDLFNBQVEsRUFBRUMsUUFBTyxFQUFFLEdBQUdILElBQUlJLElBQUk7SUFFdENDLFFBQVFDLEdBQUcsQ0FBQyxZQUFZSjtJQUV4QiwyQkFBMkI7SUFDM0IsSUFBSUYsSUFBSU8sTUFBTSxLQUFLLFFBQVE7UUFDekJOLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFxQjtRQUNuRDtJQUNGLENBQUM7SUFFRCxJQUFJLENBQUNSLFVBQVU7UUFDYixPQUFPRCxJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVFLFNBQVM7UUFBNkI7SUFDdEUsQ0FBQztJQUNELG9FQUFvRTtJQUNwRSxNQUFNQyxvQkFBb0JWLFNBQVNXLElBQUksR0FBR0MsVUFBVSxDQUFDLE1BQU07SUFFM0QsSUFBSTtRQUNGLE1BQU1DLFFBQVFuQixrRUFBYyxDQUFDQyxpRUFBbUJBO1FBRWhELHFCQUFxQixHQUNyQixNQUFNb0IsY0FBYyxNQUFNdkIsNEZBQStCLENBQ3ZELElBQUlELHlFQUFnQkEsQ0FBQyxDQUFDLElBQ3RCO1lBQ0UwQixlQUFlSjtZQUNmSyxTQUFTO1lBQ1RDLFdBQVd2QixpRUFBbUJBO1FBQ2hDO1FBR0YsY0FBYztRQUNkLE1BQU13QixRQUFRM0IsMkRBQVNBLENBQUNzQjtRQUN4QixtQ0FBbUM7UUFDbkMsTUFBTU0sV0FBVyxNQUFNRCxNQUFNRSxJQUFJLENBQUM7WUFDaEN0QixVQUFVVTtZQUNWYSxjQUFjdEIsV0FBVyxFQUFFO1FBQzdCO1FBRUFFLFFBQVFDLEdBQUcsQ0FBQyxZQUFZaUI7UUFDeEJ0QixJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDYztJQUN2QixFQUFFLE9BQU9iLE9BQVk7UUFDbkJMLFFBQVFDLEdBQUcsQ0FBQyxTQUFTSTtRQUNyQlQsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPQSxNQUFNQyxPQUFPLElBQUk7UUFBdUI7SUFDeEU7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdC1jYXJib24vLi9wYWdlcy9hcGkvY2hhdC50cz9jNTc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgT3BlbkFJRW1iZWRkaW5ncyB9IGZyb20gJ2xhbmdjaGFpbi9lbWJlZGRpbmdzL29wZW5haSc7XG5pbXBvcnQgeyBQaW5lY29uZVN0b3JlIH0gZnJvbSAnbGFuZ2NoYWluL3ZlY3RvcnN0b3Jlcy9waW5lY29uZSc7XG5pbXBvcnQgeyBtYWtlQ2hhaW4gfSBmcm9tICdAL3V0aWxzL21ha2VjaGFpbic7XG5pbXBvcnQgeyBwaW5lY29uZSB9IGZyb20gJ0AvdXRpbHMvcGluZWNvbmUtY2xpZW50JztcbmltcG9ydCB7IFBJTkVDT05FX0lOREVYX05BTUUsIFBJTkVDT05FX05BTUVfU1BBQ0UgfSBmcm9tICdAL2NvbmZpZy9waW5lY29uZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlLFxuKSB7XG4gIGNvbnN0IHsgcXVlc3Rpb24sIGhpc3RvcnkgfSA9IHJlcS5ib2R5O1xuXG4gIGNvbnNvbGUubG9nKCdxdWVzdGlvbicsIHF1ZXN0aW9uKTtcblxuICAvL29ubHkgYWNjZXB0IHBvc3QgcmVxdWVzdHNcbiAgaWYgKHJlcS5tZXRob2QgIT09ICdQT1NUJykge1xuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6ICdNZXRob2Qgbm90IGFsbG93ZWQnIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghcXVlc3Rpb24pIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnTm8gcXVlc3Rpb24gaW4gdGhlIHJlcXVlc3QnIH0pO1xuICB9XG4gIC8vIE9wZW5BSSByZWNvbW1lbmRzIHJlcGxhY2luZyBuZXdsaW5lcyB3aXRoIHNwYWNlcyBmb3IgYmVzdCByZXN1bHRzXG4gIGNvbnN0IHNhbml0aXplZFF1ZXN0aW9uID0gcXVlc3Rpb24udHJpbSgpLnJlcGxhY2VBbGwoJ1xcbicsICcgJyk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBpbmRleCA9IHBpbmVjb25lLkluZGV4KFBJTkVDT05FX0lOREVYX05BTUUpO1xuXG4gICAgLyogY3JlYXRlIHZlY3RvcnN0b3JlKi9cbiAgICBjb25zdCB2ZWN0b3JTdG9yZSA9IGF3YWl0IFBpbmVjb25lU3RvcmUuZnJvbUV4aXN0aW5nSW5kZXgoXG4gICAgICBuZXcgT3BlbkFJRW1iZWRkaW5ncyh7fSksXG4gICAgICB7XG4gICAgICAgIHBpbmVjb25lSW5kZXg6IGluZGV4LFxuICAgICAgICB0ZXh0S2V5OiAndGV4dCcsXG4gICAgICAgIG5hbWVzcGFjZTogUElORUNPTkVfTkFNRV9TUEFDRSwgLy9uYW1lc3BhY2UgY29tZXMgZnJvbSB5b3VyIGNvbmZpZyBmb2xkZXJcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIC8vY3JlYXRlIGNoYWluXG4gICAgY29uc3QgY2hhaW4gPSBtYWtlQ2hhaW4odmVjdG9yU3RvcmUpO1xuICAgIC8vQXNrIGEgcXVlc3Rpb24gdXNpbmcgY2hhdCBoaXN0b3J5XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjaGFpbi5jYWxsKHtcbiAgICAgIHF1ZXN0aW9uOiBzYW5pdGl6ZWRRdWVzdGlvbixcbiAgICAgIGNoYXRfaGlzdG9yeTogaGlzdG9yeSB8fCBbXSxcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZScsIHJlc3BvbnNlKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZSk7XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdlbnQgd3JvbmcnIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiT3BlbkFJRW1iZWRkaW5ncyIsIlBpbmVjb25lU3RvcmUiLCJtYWtlQ2hhaW4iLCJwaW5lY29uZSIsIlBJTkVDT05FX0lOREVYX05BTUUiLCJQSU5FQ09ORV9OQU1FX1NQQUNFIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInF1ZXN0aW9uIiwiaGlzdG9yeSIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibWVzc2FnZSIsInNhbml0aXplZFF1ZXN0aW9uIiwidHJpbSIsInJlcGxhY2VBbGwiLCJpbmRleCIsIkluZGV4IiwidmVjdG9yU3RvcmUiLCJmcm9tRXhpc3RpbmdJbmRleCIsInBpbmVjb25lSW5kZXgiLCJ0ZXh0S2V5IiwibmFtZXNwYWNlIiwiY2hhaW4iLCJyZXNwb25zZSIsImNhbGwiLCJjaGF0X2hpc3RvcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/chat.ts\n");

/***/ }),

/***/ "(api)/./utils/makechain.ts":
/*!****************************!*\
  !*** ./utils/makechain.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeChain\": () => (/* binding */ makeChain)\n/* harmony export */ });\n/* harmony import */ var langchain_llms_openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! langchain/llms/openai */ \"langchain/llms/openai\");\n/* harmony import */ var langchain_chains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! langchain/chains */ \"langchain/chains\");\n/* harmony import */ var langchain_prompts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! langchain/prompts */ \"langchain/prompts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([langchain_llms_openai__WEBPACK_IMPORTED_MODULE_0__, langchain_chains__WEBPACK_IMPORTED_MODULE_1__, langchain_prompts__WEBPACK_IMPORTED_MODULE_2__]);\n([langchain_llms_openai__WEBPACK_IMPORTED_MODULE_0__, langchain_chains__WEBPACK_IMPORTED_MODULE_1__, langchain_prompts__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst CONDENSE_PROMPT = langchain_prompts__WEBPACK_IMPORTED_MODULE_2__.PromptTemplate.fromTemplate(`Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question.\n\nChat History:\n{chat_history}\nFollow Up Input: {question}\nStandalone question:`);\nconst QA_PROMPT = langchain_prompts__WEBPACK_IMPORTED_MODULE_2__.PromptTemplate.fromTemplate(`You are a helpful AI assistant. Use the following pieces of context to answer the question at the end.\nIf you don't know the answer, just say you don't know. DO NOT try to make up an answer.\nIf the question is not related to the context, politely respond that you are tuned to only answer questions that are related to the context.\n\n{context}\n\nQuestion: {question}\nHelpful answer in markdown:`);\nconst makeChain = (vectorstore)=>{\n    const questionGenerator = new langchain_chains__WEBPACK_IMPORTED_MODULE_1__.LLMChain({\n        llm: new langchain_llms_openai__WEBPACK_IMPORTED_MODULE_0__.OpenAI({\n            temperature: 0\n        }),\n        prompt: CONDENSE_PROMPT\n    });\n    const docChain = (0,langchain_chains__WEBPACK_IMPORTED_MODULE_1__.loadQAChain)(//change modelName to gpt-4 if you have access to it\n    new langchain_llms_openai__WEBPACK_IMPORTED_MODULE_0__.OpenAI({\n        temperature: 0,\n        modelName: \"gpt-3.5-turbo\"\n    }), {\n        prompt: QA_PROMPT\n    });\n    return new langchain_chains__WEBPACK_IMPORTED_MODULE_1__.ChatVectorDBQAChain({\n        vectorstore,\n        combineDocumentsChain: docChain,\n        questionGeneratorChain: questionGenerator,\n        returnSourceDocuments: true,\n        k: 4\n    });\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9tYWtlY2hhaW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUErQztBQUUrQjtBQUMzQjtBQUVuRCxNQUFNSyxrQkFDSkQsMEVBQTJCLENBQUMsQ0FBQzs7Ozs7b0JBS1gsQ0FBQztBQUVyQixNQUFNRyxZQUNKSCwwRUFBMkIsQ0FBQyxDQUFDOzs7Ozs7OzJCQU9KLENBQUM7QUFFckIsTUFBTUksWUFBWSxDQUFDQyxjQUErQjtJQUN2RCxNQUFNQyxvQkFBb0IsSUFBSVQsc0RBQVFBLENBQUM7UUFDckNVLEtBQUssSUFBSVgseURBQU1BLENBQUM7WUFBRVksYUFBYTtRQUFFO1FBQ2pDQyxRQUFRUjtJQUNWO0lBRUEsTUFBTVMsV0FBV1osNkRBQVdBLENBQzFCLG9EQUFvRDtJQUNwRCxJQUFJRix5REFBTUEsQ0FBQztRQUFFWSxhQUFhO1FBQUdHLFdBQVc7SUFBZ0IsSUFDeEQ7UUFDRUYsUUFBUU47SUFDVjtJQUdGLE9BQU8sSUFBSUosaUVBQW1CQSxDQUFDO1FBQzdCTTtRQUNBTyx1QkFBdUJGO1FBQ3ZCRyx3QkFBd0JQO1FBQ3hCUSx1QkFBdUIsSUFBSTtRQUMzQkMsR0FBRztJQUNMO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXQtY2FyYm9uLy4vdXRpbHMvbWFrZWNoYWluLnRzP2NmYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3BlbkFJIH0gZnJvbSAnbGFuZ2NoYWluL2xsbXMvb3BlbmFpJztcbmltcG9ydCB7IFBpbmVjb25lU3RvcmUgfSBmcm9tICdsYW5nY2hhaW4vdmVjdG9yc3RvcmVzL3BpbmVjb25lJztcbmltcG9ydCB7IExMTUNoYWluLCBsb2FkUUFDaGFpbiwgQ2hhdFZlY3RvckRCUUFDaGFpbiB9IGZyb20gJ2xhbmdjaGFpbi9jaGFpbnMnO1xuaW1wb3J0IHsgUHJvbXB0VGVtcGxhdGUgfSBmcm9tICdsYW5nY2hhaW4vcHJvbXB0cyc7XG5cbmNvbnN0IENPTkRFTlNFX1BST01QVCA9XG4gIFByb21wdFRlbXBsYXRlLmZyb21UZW1wbGF0ZShgR2l2ZW4gdGhlIGZvbGxvd2luZyBjb252ZXJzYXRpb24gYW5kIGEgZm9sbG93IHVwIHF1ZXN0aW9uLCByZXBocmFzZSB0aGUgZm9sbG93IHVwIHF1ZXN0aW9uIHRvIGJlIGEgc3RhbmRhbG9uZSBxdWVzdGlvbi5cblxuQ2hhdCBIaXN0b3J5Olxue2NoYXRfaGlzdG9yeX1cbkZvbGxvdyBVcCBJbnB1dDoge3F1ZXN0aW9ufVxuU3RhbmRhbG9uZSBxdWVzdGlvbjpgKTtcblxuY29uc3QgUUFfUFJPTVBUID1cbiAgUHJvbXB0VGVtcGxhdGUuZnJvbVRlbXBsYXRlKGBZb3UgYXJlIGEgaGVscGZ1bCBBSSBhc3Npc3RhbnQuIFVzZSB0aGUgZm9sbG93aW5nIHBpZWNlcyBvZiBjb250ZXh0IHRvIGFuc3dlciB0aGUgcXVlc3Rpb24gYXQgdGhlIGVuZC5cbklmIHlvdSBkb24ndCBrbm93IHRoZSBhbnN3ZXIsIGp1c3Qgc2F5IHlvdSBkb24ndCBrbm93LiBETyBOT1QgdHJ5IHRvIG1ha2UgdXAgYW4gYW5zd2VyLlxuSWYgdGhlIHF1ZXN0aW9uIGlzIG5vdCByZWxhdGVkIHRvIHRoZSBjb250ZXh0LCBwb2xpdGVseSByZXNwb25kIHRoYXQgeW91IGFyZSB0dW5lZCB0byBvbmx5IGFuc3dlciBxdWVzdGlvbnMgdGhhdCBhcmUgcmVsYXRlZCB0byB0aGUgY29udGV4dC5cblxue2NvbnRleHR9XG5cblF1ZXN0aW9uOiB7cXVlc3Rpb259XG5IZWxwZnVsIGFuc3dlciBpbiBtYXJrZG93bjpgKTtcblxuZXhwb3J0IGNvbnN0IG1ha2VDaGFpbiA9ICh2ZWN0b3JzdG9yZTogUGluZWNvbmVTdG9yZSkgPT4ge1xuICBjb25zdCBxdWVzdGlvbkdlbmVyYXRvciA9IG5ldyBMTE1DaGFpbih7XG4gICAgbGxtOiBuZXcgT3BlbkFJKHsgdGVtcGVyYXR1cmU6IDAgfSksXG4gICAgcHJvbXB0OiBDT05ERU5TRV9QUk9NUFQsXG4gIH0pO1xuXG4gIGNvbnN0IGRvY0NoYWluID0gbG9hZFFBQ2hhaW4oXG4gICAgLy9jaGFuZ2UgbW9kZWxOYW1lIHRvIGdwdC00IGlmIHlvdSBoYXZlIGFjY2VzcyB0byBpdFxuICAgIG5ldyBPcGVuQUkoeyB0ZW1wZXJhdHVyZTogMCwgbW9kZWxOYW1lOiAnZ3B0LTMuNS10dXJibycgfSksXG4gICAge1xuICAgICAgcHJvbXB0OiBRQV9QUk9NUFQsXG4gICAgfSxcbiAgKTtcblxuICByZXR1cm4gbmV3IENoYXRWZWN0b3JEQlFBQ2hhaW4oe1xuICAgIHZlY3RvcnN0b3JlLFxuICAgIGNvbWJpbmVEb2N1bWVudHNDaGFpbjogZG9jQ2hhaW4sXG4gICAgcXVlc3Rpb25HZW5lcmF0b3JDaGFpbjogcXVlc3Rpb25HZW5lcmF0b3IsXG4gICAgcmV0dXJuU291cmNlRG9jdW1lbnRzOiB0cnVlLFxuICAgIGs6IDQsIC8vbnVtYmVyIG9mIHNvdXJjZSBkb2N1bWVudHMgdG8gcmV0dXJuLiBDaGFuZ2UgdGhpcyBmaWd1cmUgYXMgcmVxdWlyZWQuXG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJPcGVuQUkiLCJMTE1DaGFpbiIsImxvYWRRQUNoYWluIiwiQ2hhdFZlY3RvckRCUUFDaGFpbiIsIlByb21wdFRlbXBsYXRlIiwiQ09OREVOU0VfUFJPTVBUIiwiZnJvbVRlbXBsYXRlIiwiUUFfUFJPTVBUIiwibWFrZUNoYWluIiwidmVjdG9yc3RvcmUiLCJxdWVzdGlvbkdlbmVyYXRvciIsImxsbSIsInRlbXBlcmF0dXJlIiwicHJvbXB0IiwiZG9jQ2hhaW4iLCJtb2RlbE5hbWUiLCJjb21iaW5lRG9jdW1lbnRzQ2hhaW4iLCJxdWVzdGlvbkdlbmVyYXRvckNoYWluIiwicmV0dXJuU291cmNlRG9jdW1lbnRzIiwiayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/makechain.ts\n");

/***/ }),

/***/ "(api)/./utils/pinecone-client.ts":
/*!**********************************!*\
  !*** ./utils/pinecone-client.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pinecone\": () => (/* binding */ pinecone)\n/* harmony export */ });\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pinecone-database/pinecone */ \"@pinecone-database/pinecone\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.PINECONE_ENVIRONMENT || !process.env.PINECONE_API_KEY) {\n    throw new Error(\"Pinecone environment or api key vars missing\");\n}\nasync function initPinecone() {\n    try {\n        const pinecone = new _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0__.PineconeClient();\n        await pinecone.init({\n            environment: process.env.PINECONE_ENVIRONMENT ?? \"\",\n            apiKey: process.env.PINECONE_API_KEY ?? \"\"\n        });\n        return pinecone;\n    } catch (error) {\n        console.log(\"error\", error);\n        throw new Error(\"Failed to initialize Pinecone Client\");\n    }\n}\nconst pinecone = await initPinecone();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9waW5lY29uZS1jbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE2RDtBQUU3RCxJQUFJLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0Msb0JBQW9CLElBQUksQ0FBQ0YsUUFBUUMsR0FBRyxDQUFDRSxnQkFBZ0IsRUFBRTtJQUN0RSxNQUFNLElBQUlDLE1BQU0sZ0RBQWdEO0FBQ2xFLENBQUM7QUFFRCxlQUFlQyxlQUFlO0lBQzVCLElBQUk7UUFDRixNQUFNQyxXQUFXLElBQUlQLHVFQUFjQTtRQUVuQyxNQUFNTyxTQUFTQyxJQUFJLENBQUM7WUFDbEJDLGFBQWFSLFFBQVFDLEdBQUcsQ0FBQ0Msb0JBQW9CLElBQUk7WUFDakRPLFFBQVFULFFBQVFDLEdBQUcsQ0FBQ0UsZ0JBQWdCLElBQUk7UUFDMUM7UUFFQSxPQUFPRztJQUNULEVBQUUsT0FBT0ksT0FBTztRQUNkQyxRQUFRQyxHQUFHLENBQUMsU0FBU0Y7UUFDckIsTUFBTSxJQUFJTixNQUFNLHdDQUF3QztJQUMxRDtBQUNGO0FBRU8sTUFBTUUsV0FBVyxNQUFNRCxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdC1jYXJib24vLi91dGlscy9waW5lY29uZS1jbGllbnQudHM/ZGYzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaW5lY29uZUNsaWVudCB9IGZyb20gJ0BwaW5lY29uZS1kYXRhYmFzZS9waW5lY29uZSc7XG5cbmlmICghcHJvY2Vzcy5lbnYuUElORUNPTkVfRU5WSVJPTk1FTlQgfHwgIXByb2Nlc3MuZW52LlBJTkVDT05FX0FQSV9LRVkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdQaW5lY29uZSBlbnZpcm9ubWVudCBvciBhcGkga2V5IHZhcnMgbWlzc2luZycpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBpbml0UGluZWNvbmUoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcGluZWNvbmUgPSBuZXcgUGluZWNvbmVDbGllbnQoKTtcblxuICAgIGF3YWl0IHBpbmVjb25lLmluaXQoe1xuICAgICAgZW52aXJvbm1lbnQ6IHByb2Nlc3MuZW52LlBJTkVDT05FX0VOVklST05NRU5UID8/ICcnLCAvL3RoaXMgaXMgaW4gdGhlIGRhc2hib2FyZFxuICAgICAgYXBpS2V5OiBwcm9jZXNzLmVudi5QSU5FQ09ORV9BUElfS0VZID8/ICcnLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBpbmVjb25lO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBpbml0aWFsaXplIFBpbmVjb25lIENsaWVudCcpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwaW5lY29uZSA9IGF3YWl0IGluaXRQaW5lY29uZSgpO1xuIl0sIm5hbWVzIjpbIlBpbmVjb25lQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIlBJTkVDT05FX0VOVklST05NRU5UIiwiUElORUNPTkVfQVBJX0tFWSIsIkVycm9yIiwiaW5pdFBpbmVjb25lIiwicGluZWNvbmUiLCJpbml0IiwiZW52aXJvbm1lbnQiLCJhcGlLZXkiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/pinecone-client.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/chat.ts"));
module.exports = __webpack_exports__;

})();