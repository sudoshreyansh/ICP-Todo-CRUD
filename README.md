# Azle Todo CRUD

To run the tests on your local network:
```sh
yarn pretest
yarn test
```

## API

`get_item: (text) -> (opt text) query`

Get a todo item description using it's id.

`insert_item: (text) -> (text)`

Insert a new todo item description. Returns the item id.

`update_item: (text, text) -> ()`

Update an item using it's id and new description.

`delete_item: (text) -> ()`

Delete an item using it's id.

`list_items: (opt int32) -> (record {next:int32; items:vec record {id:text; description:text}}) query`

Returns a paginated list of items, with a next page id which if < 0 denotes end of results, and a vector of todo items.