import { Column } from "./Column.types";

export interface Board {
  id: string;
  title: string;
  user_id: string;
  columns?: Column[];
  readonly created_at: Date;
  readonly updated_at: Date;
}
