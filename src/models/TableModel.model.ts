import Sequelize, {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { sequelizeInstance } from "../database";

export class TableModel extends Model<
  InferAttributes<TableModel>,
  InferCreationAttributes<TableModel>
> {
  declare id: string;
  declare name: string;
  declare favorite: boolean;
  declare team: string;
  declare image: string;
  declare description: string;
  declare user_id: string;
  declare folder_id: string;
  declare readonly created_at: CreationOptional<Date>;
  declare readonly updated_at: CreationOptional<Date>;
}

TableModel.init(
  {
    id: {
      defaultValue: Sequelize.UUIDV4,
      type: Sequelize.UUID,
      primaryKey: true,
    },
    name: Sequelize.STRING,
    favorite: Sequelize.BOOLEAN,
    team: Sequelize.STRING,
    image: Sequelize.STRING,
    description: Sequelize.STRING,
    user_id: Sequelize.UUID,
    folder_id: Sequelize.UUID,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
  },
  {
    sequelize: sequelizeInstance,
    tableName: "tables",
    modelName: "tables",
  }
);
