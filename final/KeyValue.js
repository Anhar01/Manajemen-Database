use WColumn;
switched to db WColumn
db.createCollection("Produk");
{ ok: 1 }
db.WColumn.insertMany([{ _id: "produk1", name: "Laptop", price: 10000000, stock: 5 },
{ _id: "produk2", name: "Mouse", price: 150000, color: "black" },
{ _id: "produk3", name: "Keyboard", price: 300000, layout: "QWERTY" },
{ _id: "produk4", name: "Monitor", price: 2000000, size: "24 inch" },
{ _id: "produk5", name: "Printer", price: 1200000, type: "Laser" }]);
{
    acknowledged: true,
        insertedIds: {
        '0': 'produk1',
            '1': 'produk2',
                '2': 'produk3',
                    '3': 'produk4',
                        '4': 'produk5'
    }
}
db.WColumn.find();
db.kvstore.find();
{
    _id: ObjectId('68550ef98a0865c5ae537129'),
        key: 'user1',
            value: 'Siti Nurhalisa'
}
{
    _id: ObjectId('68550ef98a0865c5ae53712a'),
        key: 'user2',
            value: 'Ismayanti'
}
{
    _id: ObjectId('68550ef98a0865c5ae53712b'),
        key: 'user3',
            value: 'M.Fajrin'
}
{
    _id: ObjectId('68550ef98a0865c5ae53712c'),
        key: 'user4',
            value: 'Muh.Firmansyah'
}
{
    _id: ObjectId('68550ef98a0865c5ae53712d'),
        key: 'user5',
            value: 'Miranti'
}