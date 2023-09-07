import Sequelize, {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { sequelizeInstance } from "../database";

export class ColumnModel extends Model<
  InferAttributes<ColumnModel>,
  InferCreationAttributes<ColumnModel>
> {
  declare id: string;
  declare title: string;
  declare board_id: string;
  declare readonly created_at: CreationOptional<Date>;
  declare readonly updated_at: CreationOptional<Date>;
}

ColumnModel.init(
  {
    id: {
      defaultValue: Sequelize.UUIDV4,
      type: Sequelize.UUID,
      primaryKey: true,
    },
    title: Sequelize.STRING,
    board_id: Sequelize.UUID,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
  },
  {
    sequelize: sequelizeInstance,
    tableName: "columns",
    modelName: "columns",
  }
);
