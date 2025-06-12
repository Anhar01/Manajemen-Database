# 6. Comparison Query


db.pelanggan.find({ umur: { $gt: 25 } })      // Umur lebih dari 25

db.pelanggan.find({ umur: { $in: [22, 30] } }) // Umur 22 atau 30


