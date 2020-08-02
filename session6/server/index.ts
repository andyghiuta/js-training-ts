import express from 'express';
import path from 'path';
// const drawingRoutes = require('./routes/drawing.js');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'client')));

// Routes
// app.use(drawingRoutes);

app.get('/check', (req, res) => {
  res.json({ ok: true });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
