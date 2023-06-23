import express, { json } from "express";
import cors from "cors";
const app = express();
const PORT = 3000;

// Middleware untuk mengizinkan aplikasi menerima data dalam format JSON
app.use(express.json());
app.use(cors());

// Data todos sementara
let todos = [
  { id: 1, title: "Makan" },
  { id: 2, title: "Tidur" },
  { id: 3, title: "Ngoding" },
];

// Endpoint GET untuk mendapatkan daftar todos
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// Endpoint POST untuk menambahkan todo baru
app.post("/api/todos", (req, res) => {
  const newTodo = req.body;

  // Generate ID baru
  const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

  // Buat objek todo baru dengan ID dan judul
  const todo = { id: newId, title: newTodo.title };

  // Tambahkan todo baru ke daftar todos
  todos.push(todo);

  res.status(201).json(todo);
});

// Endpoint DELETE untuk menghapus todo berdasarkan ID
app.delete("/api/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);

  // Cari indeks todo yang sesuai dengan ID
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);

  // Jika todo ditemukan, hapus todo dari daftar todos
  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
    res.json({ success: true });
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

// Server mendengarkan pada port yang telah ditentukan
app.listen(PORT, () => {
  console.log(`Server berjalan pada port ${PORT}`);
});
