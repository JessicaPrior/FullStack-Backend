import { AddressInfo } from "net";
import express from "express";
import cors from "cors";
import { userRouter } from './routes/userRouter';
import { imageRouter } from './routes/imageRouter';
import dotenv from 'dotenv'

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter)
app.use("/image", imageRouter)

const server = app.listen(process.env.DB_PORT || 5000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});