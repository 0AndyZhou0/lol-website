migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("agb508xcuhj1gx4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "abanwwxh",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("agb508xcuhj1gx4")

  // remove
  collection.schema.removeField("abanwwxh")

  return dao.saveCollection(collection)
})
