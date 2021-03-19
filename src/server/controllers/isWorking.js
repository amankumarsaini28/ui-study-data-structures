import { Router } from "express";

export const isWorking =
  Router()
    .get('', (req, res) => res.status(200).send('YES'));