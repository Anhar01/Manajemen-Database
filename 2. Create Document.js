# 2. Create Document

Digunakan untuk menambahkan data (dokumen) ke dalam collection.

Contoh:
```js
db.pelanggan.insertOne({ nama: "Ani", umur: 25 })

db.pelanggan.insertMany([
  { nama: "Budi", umur: 30 },
  { nama: "Cici", umur: 22 }
])
```
