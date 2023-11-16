import Sequelize, {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { sequelizeInstance } from "../database";

export class CalendarModel extends Model<
  InferAttributes<CalendarModel>,
  InferCreationAttributes<CalendarModel>
> {
  declare id: string;
  declare start_date: Date;
  declare note: string;
  declare user_id: string;
  declare is_done: boolean;
  declare readonly created_at: CreationOptional<Date>;
  declare readonly updated_at: CreationOptional<Date>;
}

CalendarModel.init(
  {
    id: {
      defaultValue: Sequelize.UUIDV4,
      type: Sequelize.UUID,
      primaryKey: true,
    },
    start_date: Sequelize.DATEONLY,
    note: Sequelize.STRING,
    user_id: Sequelize.UUID,
    is_done: Sequelize.BOOLEAN,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
  },
  {
    sequelize: sequelizeInstance,
    tableName: "calendars",
    modelName: "calendars",
  }
);
