
export interface BotData {
  name?: string;
  status?: string;
  dataUrl?: string;
  description?: string;
}

export interface PlanInterface {
  name?: string; // Basic, . . .
  type?: string; // annual ,...
  chatsLeft?: string;
  totalBotsIncluded?:string;

}

export interface Auth {
  access?: string;
  refresh?: string;
  uid?: string;
}

export interface UserInterface {
  bots?: BotData[];
  plan?: PlanInterface;
  auth?: Auth;
}