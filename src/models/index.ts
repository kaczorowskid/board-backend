import { TableModel } from "./TableModel.model";
import { TaskModel } from "./TaskModel.model";
import { UserModel } from "./UserModel.model";
import { FolderModel } from "./FolderModel.model";

FolderModel.belongsTo(UserModel, { foreignKey: "user_id" });
UserModel.hasMany(FolderModel, { foreignKey: "user_id" });

TableModel.belongsTo(FolderModel, { foreignKey: "folder_id" });
FolderModel.hasMany(TableModel, { foreignKey: "folder_id" });

TableModel.belongsTo(UserModel, { foreignKey: "user_id" });
UserModel.hasMany(TableModel, { foreignKey: "user_id" });

TaskModel.belongsTo(TableModel, { foreignKey: "table_id" });
TableModel.hasMany(TaskModel, { foreignKey: "table_id" });

export * from "./FolderModel.model";
export * from "./TableModel.model";
export * from "./TaskModel.model";
export * from "./UserModel.model";
