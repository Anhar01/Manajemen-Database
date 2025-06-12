# 7. Logical Query

Digunakan untuk menggabungkan kondisi logika.

Contoh:
```js
db.pelanggan.find({
  $and: [{ umur: { $gt: 20 } }, { umur: { $lt: 30 } }]
})

db.pelanggan.find({
  $or: [{ nama: "Ani" }, { umur: { $lt: 23 } }]
})

db.pelanggan.find({ umur: { $not: { $gt: 30 } } })
```
