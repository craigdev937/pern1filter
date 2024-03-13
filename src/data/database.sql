CREATE DATABASE pern1filter;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE books(
    id uuid DEFAULT uuid_generate_v4(),
    title VARCHAR(255),
    first VARCHAR(255),
    last VARCHAR(255),
    age INTEGER,
    info TEXT
);


