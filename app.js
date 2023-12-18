const express = require('express');
const cors=require('cors');
const app = express();

  const corsOptions = {
  origin: '*', //to allow forntend and backend on same computer
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors())


// Sample data - a list of books
let books = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
  { id: 3, title: 'Book 3', author: 'Author 3' }
];

// Route to get all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
