import express from "express";

class ErrClass {
    notFound: express.RequestHandler = 
    (req, res, next) => {
        const error = new Error(`
            Not Found - ${req.originalUrl}
        `);
        res.status(404);
        next(error);
    };

    errorHandler: express.ErrorRequestHandler = 
    (error, req, res, next) => {
        let statusCode = 
            res.statusCode === 200 ? 
            500 : res.statusCode;
        let message = error.message;
        if (error.name === "CastError" && 
            error.kind === "ObjectId") {
            statusCode = 404;
            message = "Resource is NOT Found!";
        };
        res.status(statusCode).json({
            message: message,
            stack: error.stack
        })
    };
};


export const Err: ErrClass = new ErrClass();


