
// import type { ChatConversation } from "@/types/chat.types";

// const HISTORY_KEY = "echogpt-chat-history";

// function isBrowser(): boolean {
//   return typeof window !== "undefined";
// }

// /**
//  * Get all saved conversations from browser localStorage.
//  */
// export function getChatHistory(): ChatConversation[] {
//   if (!isBrowser()) {
//     return [];
//   }

//   try {
//     const storedHistory = window.localStorage.getItem(HISTORY_KEY);

//     if (!storedHistory) {
//       return [];
//     }

//     const parsedHistory: unknown = JSON.parse(storedHistory);

//     return Array.isArray(parsedHistory)
//       ? (parsedHistory as ChatConversation[])
//       : [];
//   } catch {
//     return [];
//   }
// }

// /**
//  * Save the full history list to browser localStorage.
//  */
// export function saveChatHistory(
//   history: ChatConversation[],
// ): void {
//   if (!isBrowser()) {
//     return;
//   }

//   try {
//     window.localStorage.setItem(
//       HISTORY_KEY,
//       JSON.stringify(history),
//     );

//     window.dispatchEvent(
//       new Event("echogpt-history-change"),
//     );
//   } catch {
//     // Optional: show a toast or log to an error-monitoring service.
//   }
// }

// /**
//  * Create a conversation or replace an existing conversation
//  * with the same ID.
//  */
// export function saveConversation(
//   conversation: ChatConversation,
// ): void {
//   const history = getChatHistory();

//   const existingIndex = history.findIndex(
//     (item) => item.id === conversation.id,
//   );

//   const updatedHistory =
//     existingIndex >= 0
//       ? history.map((item) =>
//           item.id === conversation.id
//             ? conversation
//             : item,
//         )
//       : [conversation, ...history];

//   saveChatHistory(updatedHistory);
// }

// /**
//  * Find one conversation by ID.
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
//  * Remove one conversation by ID.
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
//  * Remove all local conversations.
//  */
// export function clearChatHistory(): void {
//   if (!isBrowser()) {
//     return;
//   }

//   try {
//     window.localStorage.removeItem(HISTORY_KEY);

//     window.dispatchEvent(
//       new Event("echogpt-history-change"),
//     );
//   } catch {
//     // Optional: show a toast or log to an error-monitoring service.
//   }
// }

import type {
  ChatConversation,
} from "@/types/chat.types";

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
    const storedHistory =
      window.localStorage.getItem(HISTORY_KEY);

    if (!storedHistory) {
      return [];
    }

    const parsedHistory: unknown =
      JSON.parse(storedHistory);

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
    console.error(
      "Unable to save chat history.",
    );
  }
}

/**
 * Create a conversation or replace an existing one.
 * The most recently updated chat is always first.
 */
export function saveConversation(
  conversation: ChatConversation,
): void {
  const history = getChatHistory();

  const updatedHistory = history
    .filter(
      (item) => item.id !== conversation.id,
    )
    .concat(conversation)
    .sort(
      (first, second) =>
        new Date(
          second.updatedAt,
        ).getTime() -
        new Date(
          first.updatedAt,
        ).getTime(),
    );

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
    console.error(
      "Unable to clear chat history.",
    );
  }
}