import { Table } from "../../types";

export interface GetTablesWithPaginationQuery {
  user_id: string;
  folder_id: string;
  offset: number;
  limit: number;
  search_value?: string;
}

export interface TablesWithPagination {
  count: number;
  data: Table[];
}
