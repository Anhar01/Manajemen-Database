use kv
switched to db kv
db.createCollection("kvstore");
{ ok: 1 }
db.kvstore.insertMany([{ key: "user1", value: "Siti Nurhalisa" },
{ key: "user2", value: "Ismayanti" },
{ key: "user3", value: "M.Fajrin" },
{ key: "user4", value: "Muh.Firmansyah" },
{ key: "user5", value: "Miranti" }]);
{
    acknowledged: true,
        insertedIds: {
        '0': ObjectId('68550ef98a0865c5ae537129'),
            '1': ObjectId('68550ef98a0865c5ae53712a'),
                '2': ObjectId('68550ef98a0865c5ae53712b'),
                    '3': ObjectId('68550ef98a0865c5ae53712c'),
                        '4': ObjectId('68550ef98a0865c5ae53712d')
    }
}
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