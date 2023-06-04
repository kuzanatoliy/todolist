export interface IPurposeAction {
  name: string;
  isCompleted: boolean;
}

export enum EPurposeStatus {
  ACTIVE = 'active',
  CLOSED = 'closed',
  DONE = 'done',
  DRAFT = 'draft',
}

export interface IPurpose {
  name: string;
  description: string;
  status: boolean;
  actions: IPurposeAction[];
}
