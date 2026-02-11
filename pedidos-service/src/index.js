const express = require('express');
const app = express();

const PORT = 3000;

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'Pedidos Service OK' });
});

app.get('/pedidos', (req, res) => {
  res.json([
    { id: 1, produto: 'Notebook', quantidade: 1 },
    { id: 2, produto: 'Mouse', quantidade: 2 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Pedidos service rodando na porta ${PORT}`);
});
