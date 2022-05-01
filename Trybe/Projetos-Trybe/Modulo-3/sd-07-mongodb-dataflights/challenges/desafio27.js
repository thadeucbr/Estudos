db.resumoVoos.insertOne({ empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.find({
    $and: [
      { "empresa.nome": "PASSAREDO" },
      { natureza: "Doméstica" },
    ],
  }).count() });

db.resumoVoos.find({ empresa: "PASSAREDO" }, { empresa: true, totalVoosDomesticos: true, _id: false });
