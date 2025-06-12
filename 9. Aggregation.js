# 9. Aggregation

db.pelanggan.aggregate([
  { $match: { umur: { $gt: 20 } } },
  { $group: { _id: "$status", total: { $sum: 1 } } }
])

