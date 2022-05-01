db.voos.find({
  $and: [
    { litrosCombustivel: { $lt: 600 } },
    { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
    { litrosCombustivel: { $exists: true } },
  ],
}, { vooId: true, "empresa.nome": true, litrosCombustivel: true, _id: false }).limit(1);
