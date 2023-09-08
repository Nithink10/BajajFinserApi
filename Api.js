// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(bodyParser.json());

// Define a user_id based on your specifications
const userId = "K.NITHIN";
const email = "nithin_kompalli@srmap.edu.in";
const rollNumber = "AB20110010490";

// Define a function to find the highest alphabet
function findHighestAlphabet(arr) {
  const alphabets = arr.filter(item => typeof item === 'string' && item.match(/[a-zA-Z]/));
  if (alphabets.length === 0) return [];
  const sortedAlphabets = alphabets.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
  const highestAlphabet = sortedAlphabets[sortedAlphabets.length - 1];
  return [highestAlphabet];
}

// POST endpoint
app.post('/bfhl', (req, res) => {
  const data = req.body.data;

  // Separate numbers and alphabets
  const numbers = data.filter(item => typeof item === 'number');
  const alphabets = data.filter(item => typeof item === 'string' && item.match(/[a-zA-Z]/));

  // Find the highest alphabet
  const highestAlphabet = findHighestAlphabet(alphabets);

  // Prepare the response
  const response = {
    is_success: true,
    user_id: userId,
    email: email,
    roll_number: rollNumber,
    numbers: numbers,
    alphabets: alphabets,
    highest_alphabet: highestAlphabet,
  };

  res.json(response);
});

// GET endpoint
app.get('/bfhl', (req, res) => {
  // Respond with a hardcoded operation_code
  res.status(200).json({
    operation_code: 1
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
