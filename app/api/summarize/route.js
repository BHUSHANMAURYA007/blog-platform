import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request) {
  try {
    console.log("API KEY:", process.env.GEMINI_API_KEY);

    const body = await request.json();
    console.log("BODY:", body);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);  
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(
      `Summarize this blog post in 2-3 sentences:\n\n${body.content}`
    );

    const summary = result.response.text();
    console.log("SUMMARY:", summary);

    return Response.json({ summary });

  } catch (err) {
    console.log("FULL ERROR:", err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}