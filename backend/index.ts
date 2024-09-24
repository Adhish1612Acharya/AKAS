import express, { Request, Response } from "express";
import session from "express-session";
import cors from "cors";
import mongoose from "mongoose"

const app = express();

const corsOptions={
origin:"http://localhost:5173",
methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
credentials: true,
}

const DB_URL="mongodb://127.0.0.1:27017/teamMaker";

main().then((data)=>{
    console.log("DB connected");
}).catch((err)=>{
    console.log("DB connection error");
});

async function main(){
    await mongoose.connect(DB_URL);
}

const sessionOptions = {
    secret: "MySecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    },
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  };

app.use(session(sessionOptions));
app.use(cors(corsOptions));

app.get("/",(req:Request,res:Response)=>{
  res.json({
    success:true,
    message:"serverConnected"
  })
})

const port = 8080;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
