# 6. Comparison Query

Digunakan untuk mencari data berdasarkan perbandingan.

Contoh:
```js
db.pelanggan.find({ umur: { $gt: 25 } })      // Umur lebih dari 25

db.pelanggan.find({ umur: { $in: [22, 30] } }) // Umur 22 atau 30
```

Operator umum:
- `$eq`: sama dengan
- `$ne`: tidak sama dengan
- `$gt`: lebih besar dari
- `$lt`: lebih kecil dari
- `$in`: dalam daftar
- `$nin`: tidak dalam daftar
