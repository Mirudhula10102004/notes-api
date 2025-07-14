const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory array to store notes
let notes = [];

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Notes API!');
});

// GET all notes
app.get('/notes', (req, res) => {
  res.json(notes);
});

// GET a note by ID
app.get('/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find((n) => n.id === id);

  if (!note) {
    return res.status(404).json({ error: 'Note not found' });
  }

  res.json(note);
});

// POST a new note
app.post('/notes', (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  const newNote = {
    id: Date.now(), // unique id
    title,
    content,
    createdAt: new Date().toISOString()
  };

  notes.push(newNote);
  res.status(201).json(newNote);
});

// PUT (update) a note by ID
app.put('/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const { title, content } = req.body;

  const note = notes.find((n) => n.id === id);

  if (!note) {
    return res.status(404).json({ error: 'Note not found' });
  }

  if (title) note.title = title;
  if (content) note.content = content;

  res.json(note);
});

// DELETE a note by ID
app.delete('/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = notes.findIndex((n) => n.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Note not found' });
  }

  notes.splice(index, 1); // Remove the note
  res.json({ message: 'Note deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
