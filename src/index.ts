import express from "express";
import { getBookFromDatabase } from "./db.ts";

const app = express();

app.get("/api/book/:id", async (req, res) => {
  console.log(`[http] GET /api/book/${req.params.id}`);
  const id = req.params.id;
  const book = await getBookFromDatabase(id);

  // Make `fetch` call to an endpoint using the book id.

  res.send(book);
});

app.listen(8000, () => {
  console.log("Listening on http://localhost:8000");
});
