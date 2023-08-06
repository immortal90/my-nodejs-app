import express from "express";
import { notesRoutes } from "./routes/notes.routes";

const app = express();
const port = 3000;

app.use(express.json());

app.use(notesRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
