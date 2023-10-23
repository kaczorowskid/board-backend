import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { dbErrorFormatter } from "../../../helpers";
import { editColumnService } from "./editColumn.service";
import { EditColumn, EditColumnParams } from "./editColumn.types";

export const editColumn: ExpressMiddleware<
  EditColumnParams,
  EditColumn
> = async (req, res) => {
  try {
    const { edit } = await editColumnService({ ...req.params, ...req.body });

    const result = await edit();

    res.status(HTTPStatus.OK).json({ edited: result });
  } catch (error) {
    res.status(HTTPStatus.CONFLICT).json({ result: dbErrorFormatter(error) });
  }
};
