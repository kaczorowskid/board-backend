import { ExpressMiddleware } from "../../../../types";
import { HTTPStatus } from "../../../../utils";
import { editColumnService } from "./editColumn.service";
import { EditColumn, EditColumnParams } from "./editColumn.types";

export const editColumn: ExpressMiddleware<
  EditColumnParams,
  EditColumn
> = async (req, res) => {
  const data = await editColumnService({ ...req.params, ...req.body });

  if (data) {
    if (data.statusCode !== Number(HTTPStatus.OK)) {
      res.status(data.statusCode).json({ result: data.data });
    } else {
      res.status(data.statusCode).json(data.data);
    }
  }
};
