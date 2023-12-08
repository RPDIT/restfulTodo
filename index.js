import express from "express";
import cors from "cors";
import helmet from 'helmet';
import morgan from 'morgan';
// import your routes 
import todoRoutes from "./routes.js";


// create app and add middlewears
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
// mount your routes 
app.use("/api/v1", todoRoutes);
app.listen(9000, () => {
    console.log("App listening at http:localhost:9000");
});

export default app;
