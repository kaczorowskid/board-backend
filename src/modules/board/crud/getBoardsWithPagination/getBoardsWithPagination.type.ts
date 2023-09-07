import { Board } from "../../types";

export interface GetBoardsWithPaginationQuery {
  user_id: string;
  offset: number;
  limit: number;
  search_value?: string;
}

export interface BoardsWithPagination {
  count: number;
  data: Board[];
}
