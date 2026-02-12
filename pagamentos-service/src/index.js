const express = require('express');
const app = express();

const PORT = 3000;

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'Pagamentos Service OK' });
});

app.get('/pagamentos', (req, res) => {
  res.json([
    { id: 1, pedidoId: 1, status: 'Aprovado' },
    { id: 2, pedidoId: 2, status: 'Pendente' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Pagamentos service rodando na porta ${PORT}`);
});
