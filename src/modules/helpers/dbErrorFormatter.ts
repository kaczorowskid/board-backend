import { ValidationError } from "sequelize";

export const dbErrorFormatter = (error: any): ValidationError | undefined => {
  if (error as ValidationError) {
    return error.message;
  }

  return undefined;
};
