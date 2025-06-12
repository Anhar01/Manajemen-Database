# 2. Create Document

db.pelanggan.insertOne({ nama: "Ani", umur: 25 })

db.pelanggan.insertMany([
  { nama: "Budi", umur: 30 },
  { nama: "Cici", umur: 22 }
])

