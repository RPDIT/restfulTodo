import express from "express";


// import your routes 
import todoRoutes from "./routes.js";


// create app and add middlewears
const app = express();
app.use(express.json());

// mount your routes 
app.use("/api/v1", todoRoutes);
app.listen(9000, () => {
    console.log("App listening at http:localhost:9000");
});

export default app;
