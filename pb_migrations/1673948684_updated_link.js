migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xdjcl2qstamadnm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q2ojgr0i",
    "name": "image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [
        "100x50"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xdjcl2qstamadnm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q2ojgr0i",
    "name": "image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
})
