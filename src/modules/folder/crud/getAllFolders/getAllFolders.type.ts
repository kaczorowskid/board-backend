import { Folder } from "../../types";

export interface GetAllFoldersQuery {
  user_id: string;
}

export interface FoldersWithCount {
  count: number;
  data: Folder[];
}
