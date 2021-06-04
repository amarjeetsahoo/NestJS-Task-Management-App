import BaseHttpService from './base-http.service';
import queryString from 'query-string';

enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

interface Query {
  status?: TaskStatus;
  search?: string;
}

export default class TasksService extends BaseHttpService {
  fetchTasks({ status, search }) {
    const queryObj: Query = {};

    if (status.length) {
      queryObj.status = status;
    }

    if (search.length) {
      queryObj.search = search;
    }

    const queryStr = queryString.stringify(queryObj);
    return this.get('tasks' + (queryStr ? `?${queryStr}` : ''));
  }

  async deleteTask(id) {
    await this.delete(`tasks/${id}`);
  }

  updateTaskStatus(id, status) {
    return this.patch(`tasks/${id}/status`, { status });
  }

  createTask(title, description) {
    return this.post(`tasks`, { title, description });
  }
}
