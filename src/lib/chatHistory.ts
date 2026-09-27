

// import type { ChatConversation } from "@/types/chat.types";

// const HISTORY_KEY = "echogpt-chat-history";

// /**
//  * Get all saved conversations
//  */
// export function getChatHistory(): ChatConversation[] {
//   if (typeof window === "undefined") {
//     return [];
//   }

//   const storedHistory = localStorage.getItem(HISTORY_KEY);

//   if (!storedHistory) {
//     return [];
//   }

//   try {
//     return JSON.parse(storedHistory) as ChatConversation[];
//   } catch {
//     return [];
//   }
// }


// export function saveChatHistory(
//   history: ChatConversation[],
// ): void {
//   if (typeof window === "undefined") {
//     return;
//   }

//   localStorage.setItem(
//     HISTORY_KEY,
//     JSON.stringify(history),
//   );

//   window.dispatchEvent(
//     new Event("echogpt-history-change"),
//   );
// }

// /**
//  * Create or update a conversation
//  */
// export function saveConversation(
//   conversation: ChatConversation,
// ): void {
//   const history = getChatHistory();

//   const existingIndex = history.findIndex(
//     (item) => item.id === conversation.id,
//   );

//   if (existingIndex >= 0) {
//     const updatedHistory = history.map((item) =>
//       item.id === conversation.id
//         ? conversation
//         : item,
//     );

//     saveChatHistory(updatedHistory);
//     return;
//   }

//   saveChatHistory([
//     conversation,
//     ...history,
//   ]);
// }

// /**
//  * Get one conversation by ID
//  */
// export function getConversation(
//   conversationId: string,
// ): ChatConversation | null {
//   const history = getChatHistory();

//   return (
//     history.find(
//       (conversation) =>
//         conversation.id === conversationId,
//     ) ?? null
//   );
// }

// /**
//  * Delete one conversation
//  */
// export function deleteConversation(
//   conversationId: string,
// ): void {
//   const history = getChatHistory();

//   const updatedHistory = history.filter(
//     (conversation) =>
//       conversation.id !== conversationId,
//   );

//   saveChatHistory(updatedHistory);
// }

// /**
//  * Delete all conversations
//  */
// export function clearChatHistory(): void {
//   if (typeof window === "undefined") {
//     return;
//   }

//   localStorage.removeItem(HISTORY_KEY);
// }


import type { ChatConversation } from "@/types/chat.types";

const HISTORY_KEY = "echogpt-chat-history";

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

/**
 * Get all saved conversations from browser localStorage.
 */
export function getChatHistory(): ChatConversation[] {
  if (!isBrowser()) {
    return [];
  }

  try {
    const storedHistory = window.localStorage.getItem(HISTORY_KEY);

    if (!storedHistory) {
      return [];
    }

    const parsedHistory: unknown = JSON.parse(storedHistory);

    return Array.isArray(parsedHistory)
      ? (parsedHistory as ChatConversation[])
      : [];
  } catch {
    return [];
  }
}

/**
 * Save the full history list to browser localStorage.
 */
export function saveChatHistory(
  history: ChatConversation[],
): void {
  if (!isBrowser()) {
    return;
  }

  try {
    window.localStorage.setItem(
      HISTORY_KEY,
      JSON.stringify(history),
    );

    window.dispatchEvent(
      new Event("echogpt-history-change"),
    );
  } catch {
    // Optional: show a toast or log to an error-monitoring service.
  }
}

/**
 * Create a conversation or replace an existing conversation
 * with the same ID.
 */
export function saveConversation(
  conversation: ChatConversation,
): void {
  const history = getChatHistory();

  const existingIndex = history.findIndex(
    (item) => item.id === conversation.id,
  );

  const updatedHistory =
    existingIndex >= 0
      ? history.map((item) =>
          item.id === conversation.id
            ? conversation
            : item,
        )
      : [conversation, ...history];

  saveChatHistory(updatedHistory);
}

/**
 * Find one conversation by ID.
 */
export function getConversation(
  conversationId: string,
): ChatConversation | null {
  const history = getChatHistory();

  return (
    history.find(
      (conversation) =>
        conversation.id === conversationId,
    ) ?? null
  );
}

/**
 * Remove one conversation by ID.
 */
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

/**
 * Remove all local conversations.
 */
export function clearChatHistory(): void {
  if (!isBrowser()) {
    return;
  }

  try {
    window.localStorage.removeItem(HISTORY_KEY);

    window.dispatchEvent(
      new Event("echogpt-history-change"),
    );
  } catch {
    // Optional: show a toast or log to an error-monitoring service.
  }
}