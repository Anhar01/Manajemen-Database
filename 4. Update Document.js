# 4. Update Document

Digunakan untuk memperbarui dokumen dalam collection.

Contoh:
```js
db.pelanggan.updateOne(
  { nama: "Ani" },
  { $set: { umur: 26 } }
)

db.pelanggan.updateMany(
  { umur: { $lt: 25 } },
  { $set: { status: "muda" } }
)
```
