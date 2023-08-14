import * as dotenv from "dotenv";
import { type Config } from "drizzle-kit";

dotenv.config({
  path: "../../.env",
});

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

export default {
  schema: "./schema",
  driver: "mysql2",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
} satisfies Config;

// trying alternative config - not working due to ssl issues that &sslcert=/etc/ssl/certs/ca-certificates.crt fixed on db connection string
// export default {
//   schema: "./schema",
//   driver: "mysql2",
//   dbCredentials: {
//     host: process.env["DATABASE_HOST"],
//     username: process.env["DATABASE_USERNAME"],
//     password: process.env["DATABASE_PASSWORD"],
//     port: process.env["DATABASE_PORT"],
//     database: "askthem2-mysql",
//     ssl: {
//       ca: "/etc/ssl/certs/ca-certificates.crt",
//     },
//   },
// } satisfies Config;

// try without these dialect/dialectOptions to begin
// //   dialect: "mysql2",
// //   dialectOptions: {
// //     ssl: {
// //       rejectUnauthorized: true,
//     },
//   },
// },
