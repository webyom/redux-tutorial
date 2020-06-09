import { Request, Response } from 'express';
import { render } from '../../../build/tpl/basic/index.html';

export = function(req: Request, res: Response): void {
  res.send(render());
};
