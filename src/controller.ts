import db from "./db";
import { TPaginatedTodoItems } from "./candid";
import { None, Opt, Some, int32, text } from "azle";

export function insertTodoItem(description: text): text {
    return db.insert(description);
}

export function getTodoItemById(id: text): Opt<text> {
    const description = db.getById(id);
    if ( description ) return Some(description);
    return None;
}

export function listTodoItems(pageNum: Opt<int32>): TPaginatedTodoItems {
    return db.list(pageNum.Some ?? 0);
}

export function updateTodoItem(id: text, description: text) {
    db.update(id, description);
}

export function deleteTodoItem(id: text) {
    db.delete(id);
}