const API = `${import.meta.env.VITE_API_URL || 'project-bookstore-rho.vercel.app'}/api/books`;

// ✅ Pagination-enabled fetchBooks
export const fetchBooks = async ({ page = 1, limit = 10, search = "" } = {}) => {
  const query = new URLSearchParams({ page, limit, search }).toString();
  const res = await fetch(`${API}?${query}`);
  if (!res.ok) throw new Error("Failed to fetch books");
  return res.json();
};

export const fetchBookById = async (id) => {
  const res = await fetch(`${API}/${id}`);
  if (!res.ok) throw new Error("Book not found");
  return res.json();
};

export const addBook = async (book, token) => {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(book),
  });
  if (!res.ok) throw new Error("Failed to add book");
  return res.json();
};

export const updateBook = async (id, updatedData, token) => {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updatedData),
  });
  if (!res.ok) throw new Error("Failed to update book");
  return res.json();
};

export const deleteBook = async (id, token) => {
  const res = await fetch(`${API}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Failed to delete book");
  return res.json();
};
