export type AIModelId =
  | "echogpt-fast"
  | "echogpt-pro"
  | "echogpt-code"
  | "echogpt-creative";

export interface AIModel {
  id: AIModelId;
  name: string;
  description: string;
  badge: string;
}

export const aiModels: AIModel[] = [
  {
    id: "echogpt-fast",
    name: "EchoGPT Fast",
    description: "Fast responses for everyday tasks",
    badge: "Fast",
  },
  {
    id: "echogpt-pro",
    name: "EchoGPT Pro",
    description: "Deeper reasoning and detailed answers",
    badge: "Pro",
  },
  {
    id: "echogpt-code",
    name: "EchoGPT Code",
    description: "Optimized for programming and debugging",
    badge: "Code",
  },
  {
    id: "echogpt-creative",
    name: "EchoGPT Creative",
    description: "Writing, ideas, and creative work",
    badge: "Creative",
  },
];