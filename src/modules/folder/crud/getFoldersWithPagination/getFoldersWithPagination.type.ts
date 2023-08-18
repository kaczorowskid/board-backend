import { Folder } from "../../types";

export interface GetFoldersWithPaginationQuery {
  user_id: string;
  offset: number;
  limit: number;
  search_value?: string;
}

export interface FoldersWithPagination {
  count: number;
  data: Folder[];
}
