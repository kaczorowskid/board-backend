import { Transaction } from "sequelize";
import { BoardModel, ColumnModel, TicketModel } from "../../../../models";

export const updateBoard = async (
  id: string,
  title: string,
  transaction: Transaction
) => {
  await BoardModel.update({ title }, { where: { id }, transaction });
};

export const updateColumn = async (
  columnData: any,
  transaction: Transaction
) => {
  const { id: columnId, title: columnTitle } = columnData;
  await ColumnModel.update(
    { title: columnTitle },
    { where: { id: columnId }, transaction }
  );
};

export const updateTicket = async (
  ticketData: any,
  transaction: Transaction
) => {
  const {
    id: ticketId,
    title: ticketTitle,
    description,
    column_id,
    order,
  } = ticketData;

  await TicketModel.update(
    { title: ticketTitle, description, column_id, order },
    { where: { id: ticketId }, transaction }
  );
};
