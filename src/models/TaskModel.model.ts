import Sequelize, {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { sequelizeInstance } from "../database";

export class TaskModel extends Model<
  InferAttributes<TaskModel>,
  InferCreationAttributes<TaskModel>
> {
  declare id: string;
  declare title: string;
  declare description: string;
  declare status: string;
  declare priority: string;
  declare completion_date: Date;
  declare table_id: string;
  declare readonly created_at: CreationOptional<Date>;
  declare readonly updated_at: CreationOptional<Date>;
}

TaskModel.init(
  {
    id: {
      defaultValue: Sequelize.UUIDV4,
      type: Sequelize.UUID,
      primaryKey: true,
    },
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    status: Sequelize.STRING,
    priority: Sequelize.STRING,
    completion_date: Sequelize.DATE,
    table_id: Sequelize.UUID,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
  },
  {
    sequelize: sequelizeInstance,
    tableName: "tasks",
    modelName: "tasks",
  }
);
