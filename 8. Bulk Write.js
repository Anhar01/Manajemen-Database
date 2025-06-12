# 8. Bulk Write

Melakukan banyak operasi sekaligus seperti insert, update, delete.

Contoh:
```js
db.pelanggan.bulkWrite([
  { insertOne: { document: { nama: "Dewi", umur: 28 } } },
  { updateOne: { filter: { nama: "Budi" }, update: { $set: { umur: 32 } } } },
  { deleteOne: { filter: { nama: "Cici" } } }
])
```
