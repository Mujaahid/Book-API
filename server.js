const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// In-memory data for books
let books = [
    {
        id: uuidv4(),
        title: '1984',
        author: 'George Orwell',
        genre: 'Dystopian',
        year: 1949,
        rating: 4.5,
        comments: 'A classic novel that explores the dangers of totalitarianism.',
      },
      {
        id: uuidv4(),
        title: 'Adventures of Huckleberry Finn',
        author: 'Mark Twain',
        genre: 'Adventure',
        year: 1884,
        rating: 4.2,
        comments: 'A coming-of-age story set in the pre-Civil War South.',
      },
      {
        id: uuidv4(),
        title: 'The Adventures of Sherlock Holmes',
        author: 'Arthur Conan Doyle',
        genre: 'Mystery',
        year: 1892,
        rating: 4.7,
        comments: 'Classic detective stories featuring Sherlock Holmes and Dr. Watson.',
      },
];

// Routes
app.get('/books', (req, res) => {
  res.json(books);
});

app.get('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    res.status(404).json({ message: 'Book not found' });
  } else {
    res.json(book);
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});