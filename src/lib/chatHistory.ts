import { ChatConversation } from "@/types/chat.types";


const HISTORY_KEY = "echogpt-chat-history";

export function getChatHistory(): ChatConversation[] {
  if (typeof window === "undefined") {
    return [];
  }

  const storedHistory =
    localStorage.getItem(HISTORY_KEY);

  if (!storedHistory) {
    return [];
  }

  try {
    return JSON.parse(storedHistory) as ChatConversation[];
  } catch {
    return [];
  }
}

export function saveChatHistory(
  history: ChatConversation[],
): void {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(
    HISTORY_KEY,
    JSON.stringify(history),
  );
}

export function saveConversation(
  conversation: ChatConversation,
): void {
  const history = getChatHistory();

  const existingIndex = history.findIndex(
    (item) => item.id === conversation.id,
  );

  if (existingIndex >= 0) {
    history[existingIndex] = conversation;
  } else {
    history.unshift(conversation);
  }

  saveChatHistory(history);
}

export function deleteConversation(
  conversationId: string,
): void {
  const history = getChatHistory();

  const updatedHistory = history.filter(
    (conversation) =>
      conversation.id !== conversationId,
  );

  saveChatHistory(updatedHistory);
}

export function clearChatHistory(): void {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.removeItem(HISTORY_KEY);
}