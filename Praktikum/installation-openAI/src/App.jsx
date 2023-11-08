import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

function App() {
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 1000,
      });
      setResult(response.data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <main className="container mt-5">
      <div className="card w-75 mx-auto p-4 shadow">
        <div className="input-group mb-3">
          <textarea
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Write your prompt.."
            className="form-control"
          ></textarea>
          <button
            onClick={handleClick}
            disabled={loading || prompt.length === 0}
            className={`btn btn-primary ${loading ? "disabled" : ""}`}
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>
        <pre className="w-100 p-2 mt-4 border rounded-md bg-light overflow-auto">
          {result}
        </pre>
      </div>
    </main>
  );
}

export default App;
