export interface PaginationQueryParams {
  limit: number;
  offset: number;
  searchValue?: string;
}

export interface OptionalPaginationQueryParams {
  [k: string]: string;
}
