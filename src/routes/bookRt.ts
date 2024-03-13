import express from "express";
import { indexHome } from "../controllers/bookCon";

export const bookRt: express.Router = express.Router();
    bookRt.get("/", indexHome);



    