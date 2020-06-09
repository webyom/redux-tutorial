import { Request, Response } from 'express';
import { render } from '../../../build/tpl/react/index.html';

export = function(req: Request, res: Response): void {
  res.send(render());
};
