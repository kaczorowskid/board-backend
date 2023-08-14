export interface GetFoldersWithPaginationQuery {
  user_id: string;
  offset: number;
  limit: number;
  search_value?: string;
}
