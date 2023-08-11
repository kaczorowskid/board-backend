import Sequelize, {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { sequelizeInstance } from "../database";

export class FolderModel extends Model<
  InferAttributes<FolderModel>,
  InferCreationAttributes<FolderModel>
> {
  declare id: string;
  declare name: string;
  declare description: string;
  declare user_id: string;
  declare readonly created_at: CreationOptional<Date>;
  declare readonly updated_at: CreationOptional<Date>;
}

FolderModel.init(
  {
    id: {
      defaultValue: Sequelize.UUIDV4,
      type: Sequelize.UUID,
      primaryKey: true,
    },
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    user_id: Sequelize.UUID,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
  },
  {
    sequelize: sequelizeInstance,
    tableName: "folders",
    modelName: "folders",
  }
);
