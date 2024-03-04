import { Record, text, int32, Vec } from "azle";

export const TodoItem = Record({
    id: text,
    description: text
});

export const PaginatedTodoItems = Record({
    items: Vec(TodoItem),
    next: int32
})

export type TodoItem = typeof TodoItem.tsType
export type PaginatedTodoItems = typeof PaginatedTodoItems.tsType