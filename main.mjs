import { OpenAI } from "langchain/llms/openai";
import { ConfluencePagesLoader } from "langchain/document_loaders/web/confluence";
import dotenv from 'dotenv';
dotenv.config();


const username = process.env.CONFLUENCE_USERNAME;
const accessToken = process.env.CONFLUENCE_ACCESS_TOKEN;
const openAIKey =process.env.OPENAI_API_KEY;
const baseUrl = process.env.BASE_URL;
const spaceKey = process.env.SPACE_KEY;
const model = new OpenAI({openAIApiKey: openAIKey, temperature: 0.9 });


if (username && accessToken) {
  const loader = new ConfluencePagesLoader({
    baseUrl,
    spaceKey,
    username,
    accessToken,
  });
  console.log('loader:', loader);
  const documents = await loader.load();
  console.log(documents);
}
const res = await model.call(
  "What is the roadmap for the Robo Butler"
);
console.log(res);

