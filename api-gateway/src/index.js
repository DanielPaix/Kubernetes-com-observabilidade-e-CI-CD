const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// URLs internas Docker (nome do serviço no compose)
const PEDIDOS_SERVICE = process.env.PEDIDOS_SERVICE_URL;
const PAGAMENTOS_SERVICE = process.env.PAGAMENTOS_SERVICE_URL;


app.get('/health', (req, res) => {
  res.json({ status: "API Gateway OK" });
});

app.get('/pedidos', async (req, res) => {
  try {
    const response = await axios.get(`${PEDIDOS_SERVICE}/pedidos`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao acessar pedidos-service" });
  }
});

app.get('/pagamentos', async (req, res) => {
  try {
    const response = await axios.get(`${PAGAMENTOS_SERVICE}/pagamentos`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao acessar pagamentos-service" });
  }
});

app.listen(PORT, () => {
  console.log(`API Gateway rodando na porta ${PORT}`);
});
