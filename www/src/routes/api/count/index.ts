import { Request, Response } from 'express';

export = function(req: Request, res: Response): void {
  res.json({ count: 100 });
};
