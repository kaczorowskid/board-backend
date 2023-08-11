import { Table } from "../../types";

export interface GetTablesWithPaginationQuery {
  user_id: string;
  folder_id: string;
  skip: number;
  take: number;
}

export interface TablesWithPagination {
  count: number;
  data: Table[];
}
