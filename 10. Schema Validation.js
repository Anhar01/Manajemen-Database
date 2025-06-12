# 10. Schema Validation

Digunakan untuk memvalidasi struktur dokumen dalam collection.

Contoh:
```js
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
```
