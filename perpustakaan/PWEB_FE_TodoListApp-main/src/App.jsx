import { useEffect, useState } from "react";
import { FormTask } from "./components/FormBuku";
import { TableTask } from "./components/TableBuku";

const API = "http://localhost/api-perpustakaan";

function App() {
  const [books, setBooks] = useState([]);

  // LOAD DATA DARI DATABASE
  const loadBooks = async () => {
    try {
      const res = await fetch(`${API}/get_books.php`);
      const data = await res.json();
      setBooks(data);
    } catch (err) {
      console.error("Gagal load data:", err);
    }
  };

  useEffect(() => {
    loadBooks();
  }, []);

  // TAMBAH BUKU
  const handleAddBook = async (book) => {
    try {
      await fetch(`${API}/add_book.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
      });
      loadBooks();
    } catch (err) {
      console.error("Gagal tambah buku:", err);
    }
  };

  // HAPUS BUKU
  const handleDeleteBook = async (id) => {
    if (!window.confirm("Yakin ingin menghapus buku ini?")) return;

    try {
      await fetch(`${API}/delete_book.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      loadBooks();
    } catch (err) {
      console.error("Gagal hapus buku:", err);
    }
  };

  // UPDATE STATUS (DIPINJAM / KEMBALIKAN)
  const handleUpdateStatus = async (id, currentStatus) => {
  const newStatus =
    currentStatus === "tersedia" ? "dipinjam" : "tersedia";

  await fetch(`${API}/update_status.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, status: newStatus }),
  });

  loadBooks();
};


  return (
    <section className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          Perpustakaan Online
        </h1>

        {/* FORM INPUT */}
        <FormTask onAddBook={handleAddBook} />

        {/* TABLE DATA */}
        <TableTask
          books={books}
          onDelete={handleDeleteBook}
          onUpdateStatus={handleUpdateStatus}
        />
      </div>
    </section>
  );
}

export default App;
