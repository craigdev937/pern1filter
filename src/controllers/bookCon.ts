import express from "express";
import { dBase } from "../data/dBase";

class BookClass {
    Create: express.RequestHandler = 
    async (req, res, next) => {
        try {
            const { title, first, last, age, info } = req.body;
            const createQuery = `INSERT INTO books
            (title, first, last, age, info)
            VALUES ($1, $2, $3, $4, $5)`;
            const values = [title, first, last, age, info];
            const newBook = await dBase.query(createQuery, values);
            res.status(200).json(newBook.rows[0]);
        } catch (error) {
            res.status(500).json(error);
            next(error);
        }
    };

    FetchAll: express.RequestHandler = 
    async (req, res, next) => {
        try {
            const getAllquery = "SELECT * FROM books";
            const allBooks = await dBase.query(getAllquery);
            res.status(200).json(allBooks.rows);
        } catch (error) {
            res.status(500).json(error);
            next(error);
        }
    };

};

export const BOOK: BookClass = new BookClass();



