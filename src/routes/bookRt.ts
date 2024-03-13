import express from "express";
import { BOOK } from "../controllers/bookCon";

export const bookRt: express.Router = express.Router();
    bookRt.post("/", BOOK.Create);
    bookRt.get("/", BOOK.FetchAll);



    