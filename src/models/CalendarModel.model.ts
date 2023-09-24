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
  declare start_date: string;
  declare hour: string;
  declare note: string;
  declare user_id: string;
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
    hour: Sequelize.TIME,
    note: Sequelize.STRING,
    user_id: Sequelize.UUID,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
  },
  {
    sequelize: sequelizeInstance,
    tableName: "calendars",
    modelName: "calendars",
  }
);