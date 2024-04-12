
interface BotData {
  name?: string;
  status?: string;
  dataUrl?: string;
  description?: string;
}

interface PlanInterface {
  name?: string; // Basic, . . .
  type?: string; // annual ,...
  chatsLeft?: string;
}

export interface UserInterface {
  uid?: string;
  bots?: BotData[];
  plan?: PlanInterface;
}