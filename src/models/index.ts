import { UserModel } from "./UserModel.model";
import { BoardModel } from "./BoardModel.model";
import { ColumnModel } from "./ColumnModel.model";
import { TicketModel } from "./TicketModel.model";
import { CalendarModel } from "./CalendarModel.model";
import { CommentModel } from "./CommentModel.model";
import { SharedBoardModel } from "./SharedBoardModel.model";

ColumnModel.belongsTo(BoardModel, { foreignKey: "board_id" });
BoardModel.hasMany(ColumnModel, { foreignKey: "board_id" });

ColumnModel.hasMany(TicketModel, {
  foreignKey: "column_id",
  onDelete: "CASCADE",
  hooks: true,
});
TicketModel.belongsTo(ColumnModel, { foreignKey: "column_id" });

CalendarModel.belongsTo(UserModel, { foreignKey: "user_id" });
UserModel.hasMany(CalendarModel, { foreignKey: "user_id" });

CommentModel.belongsTo(TicketModel, { foreignKey: "ticket_id" });
TicketModel.hasMany(CommentModel, { foreignKey: "ticket_id" });

CommentModel.belongsTo(UserModel, { foreignKey: "user_id" });
UserModel.hasMany(CommentModel, { foreignKey: "user_id" });

UserModel.belongsToMany(BoardModel, {
  through: SharedBoardModel,
  foreignKey: "user_id",
  as: "usersRel",
});

BoardModel.belongsToMany(UserModel, {
  through: SharedBoardModel,
  foreignKey: "board_id",
  as: "boardsRel",
});

export * from "./UserModel.model";
export * from "./BoardModel.model";
export * from "./ColumnModel.model";
export * from "./TicketModel.model";
export * from "./CalendarModel.model";
export * from "./CommentModel.model";
export * from "./SharedBoardModel.model";
