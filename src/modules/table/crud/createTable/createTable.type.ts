export interface CreateTable {
  name: string;
  description: string;
  favorite: boolean;
  team: string;
}

export interface CreateTableParams {
  user_id: string;
  folder_id: string;
}
