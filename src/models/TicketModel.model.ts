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
  declare title: string;
  declare description: string;
  declare prio: string;
  declare order: number;
  declare column_id: string;
  declare user_id: string;
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
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    order: Sequelize.SMALLINT,
    prio: Sequelize.STRING,
    column_id: Sequelize.UUID,
    user_id: Sequelize.UUID,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
  },
  {
    sequelize: sequelizeInstance,
    tableName: "tickets",
    modelName: "tickets",
  }
);
