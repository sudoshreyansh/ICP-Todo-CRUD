# Azle Todo CRUD

To run the tests on your local network (running on port 8000):
```sh
dfx generate
yarn pretest
yarn test
```

Candid UI: [https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io....](https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=fn7ae-dqaaa-aaaam-acdiq-cai) <br />
Canister on ICP Dashboard: [https://dashboard.internetcomputer.org/canister...](https://dashboard.internetcomputer.org/canister/fn7ae-dqaaa-aaaam-acdiq-cai)

## API

![Screen Shot 2024-03-04 at 09 35 07](https://github.com/sudoshreyansh/ICP-Todo-CRUD/assets/44190883/669f86c6-d2c3-457e-a51a-41ff069a1d85)



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
