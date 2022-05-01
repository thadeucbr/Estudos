db.voos.find({ rtk: { $exists: false } },
  { vooId: true, _id: false }).limit(1);
