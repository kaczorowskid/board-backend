import { Request, Response } from "express";

export type ExpressMiddleware<
  Params = unknown,
  RequestBody = unknown,
  RequestQuery = unknown
> = (
  req: Request<Params, unknown, RequestBody, RequestQuery>,
  res: Response
) => Promise<void> | void;
