# 5. Delete Document

Digunakan untuk menghapus dokumen dari collection.

Contoh:
```js
db.pelanggan.deleteOne({ nama: "Cici" })

db.pelanggan.deleteMany({ umur: { $gt: 60 } })
```
