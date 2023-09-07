import Sequelize, {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { sequelizeInstance } from "../database";

export class TicketModel extends Model<
  InferAttributes<TicketModel>,
  InferCreationAttributes<TicketModel>
> {
  declare id: string;
  // declare code: string;
  declare title: string;
  declare description: string;
  declare prio: string;
  declare start: string;
  declare end: string;
  declare order: number;
  // declare comments: number;
  // declare comentatorsAvatars?: { name: string; avatar: string }[];
  declare column_id: string;
  declare readonly created_at: CreationOptional<Date>;
  declare readonly updated_at: CreationOptional<Date>;
}

TicketModel.init(
  {
    id: {
      defaultValue: Sequelize.UUIDV4,
      type: Sequelize.UUID,
      primaryKey: true,
    },
    // code: Sequelize.STRING,
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    prio: Sequelize.STRING,
    start: Sequelize.STRING,
    end: Sequelize.STRING,
    order: Sequelize.NUMBER,
    // comments: Sequelize.NUMBER,
    column_id: Sequelize.UUID,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
  },
  {
    sequelize: sequelizeInstance,
    tableName: "tickets",
    modelName: "tickets",
  }
);
