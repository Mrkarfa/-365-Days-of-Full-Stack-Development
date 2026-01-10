import OpenAI from "openai";

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY || "YOUR_OPENAI_KEY",
  dangerouslyAllowBrowser: true, // Note: In production, use a backend proxy
});

// Chat completion for AI assistant
export const getAIResponse = async (messages, systemPrompt = null) => {
  try {
    const systemMessage =
      systemPrompt ||
      "You are a helpful, friendly AI assistant in a chat application. Keep responses concise and helpful.";

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemMessage },
        ...messages.map((msg) => ({
          role: msg.role || (msg.isAI ? "assistant" : "user"),
          content: msg.content,
        })),
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI API Error:", error);
    throw new Error("Failed to get AI response. Please check your API key.");
  }
};

// Generate smart reply suggestions
export const getSmartReplies = async (context) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Generate 3 short, natural reply suggestions for the following message. Return them as a JSON array of strings. Keep each reply under 50 characters.",
        },
        { role: "user", content: `Message: "${context}"` },
      ],
      max_tokens: 150,
      temperature: 0.8,
    });

    const content = response.choices[0].message.content;
    try {
      return JSON.parse(content);
    } catch {
      // If parsing fails, extract suggestions from text
      return content
        .split("\n")
        .filter((s) => s.trim())
        .slice(0, 3);
    }
  } catch (error) {
    console.error("Smart Replies Error:", error);
    return ["Thanks!", "Got it!", "Sounds good!"];
  }
};

// Summarize conversation
export const summarizeConversation = async (messages) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Summarize the following conversation in 2-3 sentences. Be concise and capture the main points.",
        },
        {
          role: "user",
          content: messages.map((m) => `${m.sender}: ${m.content}`).join("\n"),
        },
      ],
      max_tokens: 150,
      temperature: 0.5,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Summarize Error:", error);
    throw new Error("Failed to summarize conversation.");
  }
};

export default openai;
