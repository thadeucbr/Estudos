db.produtos.updateOne(
  { nome: "Big Mac" },
  { $unset: { curtidas: 1 } },
);

db.produtos.find(
  {},
  { _id: false, nome: true, curtidas: true },
);
