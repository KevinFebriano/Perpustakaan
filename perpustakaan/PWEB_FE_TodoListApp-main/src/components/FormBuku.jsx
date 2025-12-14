import { useState } from "react";

export function FormTask({ onAddBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !year) {
      alert("Semua field harus diisi!");
      return;
    }

    onAddBook({
      title,
      author,
      year,
      status: "tersedia",
    });

    setTitle("");
    setAuthor("");
    setYear("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      {/* INPUT VERTIKAL */}
      <div className="flex flex-col gap-4 mb-4">
        {/* Judul Buku */}
        <input
          type="text"
          placeholder="Judul Buku"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded px-4 py-3
                     focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Penulis */}
        <input
          type="text"
          placeholder="Penulis"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full border rounded px-4 py-3
                     focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Tahun Terbit */}
        <input
          type="text"
          inputMode="numeric"
          placeholder="Tahun Terbit"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full border rounded px-4 py-3
                     focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded
                   hover:bg-blue-600 transition"
      >
        Add Book
      </button>
    </form>
  );
}
