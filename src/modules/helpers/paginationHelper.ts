import { Op, Order, WhereOptions } from "sequelize";
import {
  OptionalPaginationQueryParams,
  PaginationQueryParams,
} from "../../types";

enum DefaultValues {
  LIMIT = 5,
  OFFSET = 0,
}

interface PaginationHelper {
  limit: number;
  offset: number;
  where?: WhereOptions;
  order?: Order;
}

export const paginationHelper = (
  query: PaginationQueryParams,
  options?: OptionalPaginationQueryParams
): PaginationHelper => {
  return {
    limit: query.limit || DefaultValues.LIMIT,
    offset: query.offset || DefaultValues.OFFSET,
    order: [["name", "ASC"]],
    where: {
      ...(query.searchValue
        ? {
            name: {
              [Op.like]: `%${query.searchValue}%`,
            },
          }
        : {}),
      ...options,
    },
  };
};
