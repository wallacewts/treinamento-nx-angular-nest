import { Status } from "./status.enim";
export interface ITask {
  id?: number;
  status?: Status;
  description: string;
}