import Sequelize, {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { sequelizeInstance } from "../database";

export class SharedBoardModel extends Model<
  InferAttributes<SharedBoardModel>,
  InferCreationAttributes<SharedBoardModel>
> {
  declare id: string;
  declare user_id: string;
  declare board_id: string;
  declare readonly created_at: CreationOptional<Date>;
  declare readonly updated_at: CreationOptional<Date>;
}

SharedBoardModel.init(
  {
    id: {
      defaultValue: Sequelize.UUIDV4,
      type: Sequelize.UUID,
      primaryKey: true,
    },
    user_id: Sequelize.UUID,
    board_id: Sequelize.UUID,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
  },
  {
    sequelize: sequelizeInstance,
    tableName: "sharedBoards",
    modelName: "sharedBoards",
  }
);
