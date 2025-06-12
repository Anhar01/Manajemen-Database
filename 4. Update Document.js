# 4. Update Document

db.pelanggan.updateOne(
  { nama: "Ani" },
  { $set: { umur: 26 } }
)

db.pelanggan.updateMany(
  { umur: { $lt: 25 } },
  { $set: { status: "muda" } }
)

