import express from "express";
import cors from "cors";
import type { Request, Response } from "express";

const app = express();
const PORT:number = 3000;

//middle ware for cors
app.use(cors());
//middle ware for parsing incoming requests with JSON payloads
app.use(express.json())

app.get("/health", (req, res)=>{
    res.json({status:'ok'})
});

app.get("/", (req: Request, res: Response) => {
    res.send("Hello From TS server!!!");

});

app.listen(PORT, ()=>{
    console.log(`Server running at port ${PORT}`)
})
