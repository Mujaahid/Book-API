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
      {
        id: uuidv4(),
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        genre: 'Fantasy Fiction',
        year: 1988,
        rating: 3.9,
        comments: 'The Alchemist is a novel by Brazilian author Paulo Coelho which was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller.',
      },
      {
        id: uuidv4(),
        title: 'The Aleph and Other Stories',
        author: 'Jorge Luis Borges',
        genre: 'Fantasy',
        year: 1949,
        rating: 4.3,
        comments: 'The Aleph and Other Stories is a book of short stories by Argentine writer Jorge Luis Borges. The title work, "The Aleph", describes a point in space that contains all other spaces at once.',
      },
          {
        id: uuidv4(),
        title: "Aesop's Fables",
        author: 'Aesop',
        genre: 'Fable',
        year: 1500,
        rating: 4.2,
        comments: "Aesop's Fables, or the Aesopica, is a collection of fables credited to Aesop, a slave and storyteller who lived in ancient Greece between 620 and 564 BCE",
      },
     {
        id: uuidv4(),
        title: "Alice's Adventures in Wonderlands",
        author: 'Lewis Carroll',
        genre: 'Fiction',
        year: 1865,
        rating: 4.5,
        comments: "It details the story of a young girl named Alice who falls through a rabbit hole into a fantasy world of anthropomorphic creatures. It is seen as an example of the literary nonsense genre.",
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
