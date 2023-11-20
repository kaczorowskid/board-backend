import { Op } from "sequelize";

type Prios = "high" | "medium" | "low";

export const isLike = (data?: string | Prios | null) =>
  data
    ? {
        title: { [Op.like]: `%${data}%` },
      }
    : {};

export const isNotLike = (data?: string | Prios | null) =>
  data
    ? {
        title: { [Op.like]: `%${data}%` },
      }
    : {};
