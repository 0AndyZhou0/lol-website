migrate((db) => {
  const collection = new Collection({
    "id": "agb508xcuhj1gx4",
    "created": "2023-06-02 05:06:15.783Z",
    "updated": "2023-06-02 05:06:15.783Z",
    "name": "matches",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "f52h2pvj",
        "name": "player0",
        "type": "json",
        "required": true,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "avwjaktm",
        "name": "player1",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "incwlscf",
        "name": "player2",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "rq0uu1rh",
        "name": "player3",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "npqzyciz",
        "name": "player4",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("agb508xcuhj1gx4");

  return dao.deleteCollection(collection);
})
