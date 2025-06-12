# 9. Aggregation

Digunakan untuk pengolahan data tingkat lanjut seperti pengelompokan dan perhitungan.

Contoh:
```js
db.pelanggan.aggregate([
  { $match: { umur: { $gt: 20 } } },
  { $group: { _id: "$status", total: { $sum: 1 } } }
])
```
