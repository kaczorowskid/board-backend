export interface UpdateBoardQuery {
  id: string;
}

export interface UpdateBoardBody {
  title: string;
  user_id: string;
  columns: {
    id: string;
    title: string;
    board_id: string;
    tickets: {
      id: string;
      code: string;
      title: string;
      description: string;
      epics?: string[];
      prio: string;
      start: string;
      end: string;
      order: number;
      comments: number;
      comentatorsAvatars?: { name: string; avatar: string }[];
    }[];
  }[];
}

export interface UdpateBoard {
  id: string;
  title: string;
  columns: UpdateColumns[];
}

export interface UpdateColumns {
  id: string;
  title: string;
  board_id: string;
  tickets: UpdateTickets[];
}

export interface UpdateTickets {
  id: string;
  code: string;
  title: string;
  description: string;
  epics?: string[];
  prio: string;
  start: string;
  end: string;
  order: number;
  comments: number;
  comentatorsAvatars?: { name: string; avatar: string }[];
  column_id: string;
}
