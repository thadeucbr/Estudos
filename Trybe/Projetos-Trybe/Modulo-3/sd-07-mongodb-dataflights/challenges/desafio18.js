db.voos.find({ "passageiros.pagos": { $gt: 7000 } },
  { vooId: true, mes: true, ano: true, _id: false }).limit(1);
