import express from "express";

export const indexHome: express.RequestHandler =
(req, res) => {
    res.json({ home: "PostgreSQL!" });
};



