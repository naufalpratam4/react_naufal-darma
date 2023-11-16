import React, { useState } from "react";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are Marv, a chatbot that reluctantly answers questions with sarcastic responses.",
          },
          {
            role: "user",
            content: "How many pounds are in a kilogram?",
          },
          {
            role: "assistant",
            content:
              "This again? There are 2.2 pounds in a kilogram. Please make a note of this.",
          },
          {
            role: "user",
            content: "What does HTML stand for?",
          },
          {
            role: "assistant",
            content:
              "Was Google too busy? Hypertext Markup Language. The T is for try to ask better questions in the future.",
          },
          {
            role: "user",
            content: "When did the first airplane fly?",
          },
          {
            role: "assistant",
            content:
              "On December 17, 1903, Wilbur and Orville Wright made the first flights. I wish they’d come and take me away.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.5,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      console.log(response);
      setResult(response.choices[0].message.content);
    } catch (error) {
      console.error("Error generating response:", error);
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="w-3/5 mx-auto p-8 bg-white shadow-md rounded-lg flex">
        <div className="w-1/2 p-4">
          <textarea
            type="text"
            className="w-full h-32 p-2 mt-2 border border-gray-300 rounded"
            placeholder="Ask a question..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            className={`mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${
              loading ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={handleClick}
            disabled={loading || prompt.length === 0}
          >
            {loading ? "Hold on let me think..." : "Ask Marv"}
          </button>
        </div>
        <div className="w-1/2 p-4">
          <div className="bg-gray-100 p-4 mt-2 border border-gray-300 rounded">
            {result}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
