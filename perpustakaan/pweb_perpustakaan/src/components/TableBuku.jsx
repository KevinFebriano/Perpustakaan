export function TableTask({ books, onDelete, onUpdateStatus }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-center">
            <th className="border p-2">ID</th>
            <th className="border p-2">JUDUL BUKU</th>
            <th className="border p-2">PENULIS</th>
            <th className="border p-2">TAHUN</th>
            <th className="border p-2">STATUS</th>
            <th className="border p-2">ACTION</th>
          </tr>
        </thead>

        <tbody>
          {books.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center p-4">
                Belum ada data buku
              </td>
            </tr>
          ) : (
            books.map((book, index) => (
              <tr key={book.id} className="text-center">
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{book.title}</td>
                <td className="border p-2">{book.author}</td>
                <td className="border p-2">{book.year}</td>

                {/* STATUS */}
                <td className="border p-2 font-semibold">
                  {book.status}
                </td>

                {/* ACTION */}
                <td className="border p-2 space-x-2">
                  {/* BUTTON DIPINJAM / KEMBALIKAN */}
                  <button
                    onClick={() =>
                      onUpdateStatus(book.id, book.status)
                    }
                    className={`px-3 py-1 rounded text-white transition
                      ${
                        book.status === "tersedia"
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-yellow-500 hover:bg-yellow-600"
                      }`}
                  >
                    {book.status === "tersedia"
                      ? "Dipinjam"
                      : "Kembalikan"}
                  </button>

                  {/* BUTTON DELETE */}
                  <button
                    onClick={() => onDelete(book.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
