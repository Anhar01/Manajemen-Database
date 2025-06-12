# 5. Delete Document

db.pelanggan.deleteOne({ nama: "Cici" })

db.pelanggan.deleteMany({ umur: { $gt: 60 } })

