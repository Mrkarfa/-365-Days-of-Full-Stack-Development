import { useState, useCallback } from "react";
import {
  getAIResponse,
  getSmartReplies,
  summarizeConversation,
} from "../services/openai";

export const useAI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [smartReplies, setSmartReplies] = useState([]);

  // Get AI chat response
  const getResponse = useCallback(async (messages) => {
    setLoading(true);
    setError(null);

    try {
      const response = await getAIResponse(messages);
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Generate smart reply suggestions
  const generateSmartReplies = useCallback(async (lastMessage) => {
    setLoading(true);

    try {
      const replies = await getSmartReplies(lastMessage);
      setSmartReplies(replies);
      return replies;
    } catch (err) {
      console.error("Smart replies error:", err);
      setSmartReplies(["Thanks!", "Got it!", "Sounds good!"]);
      return ["Thanks!", "Got it!", "Sounds good!"];
    } finally {
      setLoading(false);
    }
  }, []);

  // Summarize a conversation
  const summarize = useCallback(async (messages) => {
    setLoading(true);
    setError(null);

    try {
      const summary = await summarizeConversation(messages);
      return summary;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Clear smart replies
  const clearSmartReplies = useCallback(() => {
    setSmartReplies([]);
  }, []);

  return {
    loading,
    error,
    smartReplies,
    getResponse,
    generateSmartReplies,
    summarize,
    clearSmartReplies,
  };
};

export default useAI;
