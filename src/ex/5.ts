import crypto from 'crypto';
import { NextFunction, Response, Request } from 'express';

function hashBodyRequestMiddleware(req: Request, res: Response, next: NextFunction): void {
    const hashBodyBySha256: string = crypto.createHash('sha256').update(JSON.stringify(req.body)).digest('hex')
    res.json({ "hashBody": hashBodyBySha256 }).end()
}

export { hashBodyRequestMiddleware }