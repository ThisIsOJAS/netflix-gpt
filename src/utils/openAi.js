import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // This is required for browser usage on Client-side
});

export default openai;

// not using openAi due to payment mandatory, using gemini as its free

// CODE FOR GPT SEARCH BAR COMPONENT IF USING OPENAI OR DEEPSEEK

// import openai from "../utils/openAi";

// Make an APi call to OpenAI with the searchText value
// -----------------------------------------------------
// const gptResults = await openai.chat.completions.create({
//   model: "gpt-4o-mini",
//   store: true,
//   messages: [{ role: "user", content: promptQuery }],
// });

// console.log("GPT Results:", gptResults.choices);

//------
// Make an APi call to DEEPSEEK with the searchText value
// -----------------------------------------------------
