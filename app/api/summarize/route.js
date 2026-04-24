export async function POST(request) {
  try {
    const body = await request.json();

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "user",
              content: `Summarize this blog post in 2-3 sentences:\n\n${body.content}`,
            },
          ],
        }),
      }
    );

    const data = await response.json();
    const summary = data.choices[0].message.content;
    return Response.json({ summary });

  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}