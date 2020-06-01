import { Request, Response } from 'express';

/**
 * @swagger
 * /api/count/:
 *    get:
 *      tags:
 *        - Api
 *      summary: This should return a count.
 *      consumes:
 *        - application/json
 *      responses:
 *        200:
 *          description: Return a count.
 */
export = function(req: Request, res: Response): void {
  res.json({ count: Math.round(Math.random() * 100) });
};
