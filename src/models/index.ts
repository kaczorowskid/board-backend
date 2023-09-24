import { TableModel } from "./TableModel.model";
import { UserModel } from "./UserModel.model";
import { FolderModel } from "./FolderModel.model";
import { BoardModel } from "./BoardModel.model";
import { ColumnModel } from "./ColumnModel.model";
import { TicketModel } from "./TicketModel.model";
import { CalendarModel } from "./CalendarModel.model";

FolderModel.belongsTo(UserModel, { foreignKey: "user_id" });
UserModel.hasMany(FolderModel, { foreignKey: "user_id" });

TableModel.belongsTo(FolderModel, { foreignKey: "folder_id" });
FolderModel.hasMany(TableModel, { foreignKey: "folder_id" });

TableModel.belongsTo(UserModel, { foreignKey: "user_id" });
UserModel.hasMany(TableModel, { foreignKey: "user_id" });

ColumnModel.belongsTo(BoardModel, { foreignKey: "board_id" });
BoardModel.hasMany(ColumnModel, { foreignKey: "board_id" });

ColumnModel.hasMany(TicketModel, {
  foreignKey: "column_id",
  onDelete: "CASCADE",
  hooks: true,
});
TicketModel.belongsTo(ColumnModel, { foreignKey: "column_id" });

BoardModel.belongsTo(UserModel, { foreignKey: "user_id" });
UserModel.hasMany(BoardModel, { foreignKey: "user_id" });

CalendarModel.belongsTo(UserModel, { foreignKey: "user_id" });
UserModel.hasMany(CalendarModel, { foreignKey: "user_id" });

export * from "./FolderModel.model";
export * from "./TableModel.model";
export * from "./UserModel.model";
export * from "./BoardModel.model";
export * from "./ColumnModel.model";
export * from "./TicketModel.model";
export * from "./CalendarModel.model";
