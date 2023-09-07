import Sequelize, {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { sequelizeInstance } from "../database";

export class BoardModel extends Model<
  InferAttributes<BoardModel>,
  InferCreationAttributes<BoardModel>
> {
  declare id: string;
  declare title: string;
  declare description: string;
  declare user_id: string;
  declare readonly created_at: CreationOptional<Date>;
  declare readonly updated_at: CreationOptional<Date>;
}

BoardModel.init(
  {
    id: {
      defaultValue: Sequelize.UUIDV4,
      type: Sequelize.UUID,
      primaryKey: true,
    },
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    user_id: Sequelize.UUID,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
  },
  {
    sequelize: sequelizeInstance,
    tableName: "boards",
    modelName: "boards",
  }
);
