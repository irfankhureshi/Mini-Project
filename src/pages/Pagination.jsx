import { useState } from "react";

const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentItems = data.slice(startIndex, startIndex + pageSize);

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const pages = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    pages.push(1);
    if (currentPage - delta > 2) pages.push("...");
    pages.push(...range);
    if (currentPage + delta < totalPages - 1) pages.push("...");
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white text-center">
          <h1 className="text-2xl font-bold">Pagination</h1>
        </div>

        <div className="p-6">

          {/* Page size */}
          <div className="flex justify-center mb-6">
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border px-3 py-2 rounded"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
          </div>

          {/* Items */}
          <div className="space-y-2 mb-6">
            {currentItems.map((item, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded">
                {item}
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-wrap justify-center items-center gap-2">

            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 border rounded disabled:opacity-50"
            >
              Prev
            </button>

            {getVisiblePages().map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === "number" && setCurrentPage(page)}
                disabled={page === "..."}
                className={`px-3 py-2 rounded ${
                  page === currentPage
                    ? "bg-emerald-500 text-white"
                    : "border"
                } ${page === "..." && "cursor-default"}`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 border rounded disabled:opacity-50"
            >
              Next
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
