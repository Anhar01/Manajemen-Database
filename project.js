use tokoOnline
db.createCollection("produk")

db.pelanggan.insertOne({ nama: "Ani", umur: 25 })

db.pelanggan.insertMany([
  { nama: "Budi", umur: 30 },
  { nama: "Cici", umur: 22 }
])

db.pelanggan.find()                   
db.pelanggan.find({ nama: "Ani" }) 


db.pelanggan.updateOne(
  { nama: "Ani" },
  { $set: { umur: 26 } }
)

db.pelanggan.updateMany(
  { umur: { $lt: 25 } },
  { $set: { status: "muda" } }
)

db.pelanggan.deleteOne({ nama: "Cici" })

db.pelanggan.deleteMany({ umur: { $gt: 60 } })

db.pelanggan.find({ umur: { $gt: 25 } })     

db.pelanggan.find({ umur: { $in: [22, 30] } })

db.pelanggan.find({
  $and: [{ umur: { $gt: 20 } }, { umur: { $lt: 30 } }]
})

db.pelanggan.find({
  $or: [{ nama: "Ani" }, { umur: { $lt: 23 } }]
})

db.pelanggan.find({ umur: { $not: { $gt: 30 } } })

db.pelanggan.bulkWrite([
  { insertOne: { document: { nama: "Dewi", umur: 28 } } },
  { updateOne: { filter: { nama: "Budi" }, update: { $set: { umur: 32 } } } },
  { deleteOne: { filter: { nama: "Cici" } } }
])

db.pelanggan.aggregate([
  { $match: { umur: { $gt: 20 } } },
  { $group: { _id: "$status", total: { $sum: 1 } } }
])

db.createCollection("produk", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nama", "harga"],
      properties: {
        nama: {
          bsonType: "string",
          description: "Harus berupa string dan wajib diisi"
        },
        harga: {
          bsonType: "number",
          minimum: 0
        }
      }
    }
  }
})
