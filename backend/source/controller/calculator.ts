import { Request, Response, NextFunction } from 'express';
import fs from 'fs';

const getNumber = (req: Request, res: Response, next: NextFunction) => {
  let storedNumber = fs.readFileSync(__dirname + '/number.txt', 'utf8');
  return res.status(200).json({ message: storedNumber });
};

const storeNumber = (req: Request, res: Response, next: NextFunction) => {
  fs.writeFileSync(__dirname + '/number.txt', req.params.number);
  return res.status(200).json({ message: 'ok' });
};

export default { getNumber, storeNumber };
