const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

let reservations = [];

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/reserve', (req, res) => {
  const { name, email, date, time, people, requests } = req.body;
  const reservation = { name, email, date, time, people, requests };
  reservations.push(reservation);

  console.log("New reservation received:", reservation);

  res.send(`
    <h2>Reservation Confirmed</h2>
    <p>Thank you, ${name}. Your reservation for ${people} people on ${date} at ${time} has been received.</p>
    <a href="/">Back to Home</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
