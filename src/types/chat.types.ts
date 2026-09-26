export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  promptId?: string;
  highlights?: string[];
  model?: string;
}

export interface ChatConversation {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: string;
  updatedAt: string;
}