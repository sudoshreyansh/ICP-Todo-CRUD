import { Canister, int32, Opt, query, text, update, Void } from 'azle';
import { PaginatedTodoItems } from './candid';
import * as Controller from './controller'

export default Canister({
    get_item: query([text], Opt(text), Controller.getTodoItemById),
    list_items: query([Opt(int32)], PaginatedTodoItems, Controller.listTodoItems),
    insert_item: update([text], text, Controller.insertTodoItem),
    update_item: update([text, text], Void, Controller.updateTodoItem),
    delete_item: update([text], Void, Controller.deleteTodoItem)
});