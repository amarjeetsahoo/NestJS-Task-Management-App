import { TaskStatus } from '../tasks.model';
export class GetTaskFilterDto {
  status?: TaskStatus;
  search?: string;
}
