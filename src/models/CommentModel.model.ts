import Sequelize, {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { sequelizeInstance } from "../database";

export class CommentModel extends Model<
  InferAttributes<CommentModel>,
  InferCreationAttributes<CommentModel>
> {
  declare id: string;
  declare text: string;
  declare ticket_id: string;
  declare user_id: string;
  declare readonly created_at: CreationOptional<Date>;
  declare readonly updated_at: CreationOptional<Date>;
}

CommentModel.init(
  {
    id: {
      defaultValue: Sequelize.UUIDV4,
      type: Sequelize.UUID,
      primaryKey: true,
    },
    text: Sequelize.STRING,
    ticket_id: Sequelize.UUID,
    user_id: Sequelize.UUID,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
  },
  {
    sequelize: sequelizeInstance,
    tableName: "comments",
    modelName: "comments",
  }
);
