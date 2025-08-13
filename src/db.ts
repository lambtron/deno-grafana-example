// deno-lint-ignore-file no-explicit-any

import { withSpan } from "./utils.ts";

interface Book {
  id: string;
  title: string;
  author: string;
}

const books = new Map<string, Book>();
books.set("1", {
  id: "1",
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
});
books.set("2", { id: "2", title: "Moby Dick", author: null } as any);

export const getBookFromDatabase = withSpan(
  "getBookFromDatabase",
  async function getBookFromDatabase(span, bookId: string) {
    span.setAttribute("book_id", bookId);
    console.log(`[db] getBookFromDatabase ${bookId}`);
    await new Promise((resolve) => setTimeout(resolve, 300));
    const book = books.get(bookId);
    if (book === undefined) throw new Error("No book found.");
    if (!book.author) throw new Error("Book is missing author.");
    return book;
  },
);
