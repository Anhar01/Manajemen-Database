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
{
    _id: 'produk1',
        name: 'Laptop',
            price: 10000000,
                stock: 5
}
{
    _id: 'produk2',
        name: 'Mouse',
            price: 150000,
                color: 'black'
}
{
    _id: 'produk3',
        name: 'Keyboard',
            price: 300000,
                layout: 'QWERTY'
}
{
    _id: 'produk4',
        name: 'Monitor',
            price: 2000000,
                size: '24 inch'
}
{
    _id: 'produk5',
        name: 'Printer',
            price: 1200000,
                type: 'Laser'
}