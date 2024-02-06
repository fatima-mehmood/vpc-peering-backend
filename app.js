const express = require('express');
const cors=require('cors');
const app = express();

  const corsOptions = {
  origin: '*', //to allow forntend and backend on same computer
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors())

// Route to get all books
app.get('/api', (req, res) => {
  res.json("This is a message sent by backend server");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
