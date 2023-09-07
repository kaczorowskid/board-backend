import { Transaction } from "sequelize";
import { BoardModel, ColumnModel, TicketModel } from "../../../../models";
import { UpdateColumns, UpdateTickets } from "./updateBoard.types";

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
    start,
    end,
    prio,
    order,
    column_id,
  } = ticketData;

  console.log("ticket data ", ticketData);
  await TicketModel.update(
    { title: ticketTitle, description, start, end, prio, order, column_id },
    { where: { id: ticketId }, transaction }
  );
};

// import { Transaction } from "sequelize";
// import { BoardModel, ColumnModel, TicketModel } from "../../../../models";

// export async function updateBoard(
//   id: string,
//   title: string,
//   transaction: Transaction
// ) {
//   await BoardModel.update({ title }, { where: { id }, transaction });
//   // Pobierz zaktualizowany obiekt BoardModel
//   const updatedBoard = await BoardModel.findOne({ where: { id }, transaction });
//   return updatedBoard;
// }

// // Funkcja do aktualizacji danych w ColumnModel
// export async function updateColumn(columnData: any, transaction: Transaction) {
//   const { id: columnId, title: columnTitle, tickets } = columnData;
//   await ColumnModel.update(
//     { title: columnTitle },
//     { where: { id: columnId }, transaction }
//   );

//   // Pobierz zaktualizowany obiekt ColumnModel
//   const updatedColumn = await ColumnModel.findOne({
//     where: { id: columnId },
//     transaction,
//   });

//   // Jeśli istnieją nowe tickety, dodaj je
//   if (tickets && tickets.length > 0) {
//     await Promise.all(
//       tickets.map(async (ticketData: any) => {
//         const {
//           id: ticketId,
//           title: ticketTitle,
//           description,
//           start,
//           end,
//           prio,
//           order,
//           column_id: newColumnId,
//         } = ticketData;

//         // Sprawdź, czy ticket należy do innej kolumny
//         const existingTicket = await TicketModel.findOne({
//           where: { id: ticketId },
//         });

//         if (existingTicket) {
//           // Jeśli ticket należy do innej kolumny, zaktualizuj jego kolumnę
//           if (existingTicket.column_id !== newColumnId) {
//             await TicketModel.update(
//               { column_id: newColumnId },
//               { where: { id: ticketId }, transaction }
//             );
//           }
//         }

//         // Zaktualizuj dane ticketu
//         await TicketModel.update(
//           { title: ticketTitle, description, start, end, prio, order },
//           { where: { id: ticketId }, transaction }
//         );
//       })
//     );
//   }

//   return updatedColumn;
// }
