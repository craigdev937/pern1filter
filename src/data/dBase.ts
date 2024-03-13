import { Pool } from "pg";

export const dBase: Pool = new Pool({
    user: "django",
    password: "password1",
    host: "localhost",
    port: 5432,
    database: "pern1filter"
});


