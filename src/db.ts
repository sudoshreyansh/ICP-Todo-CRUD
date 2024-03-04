import { monotonicFactory } from "ulid";
import { StableBTreeMap, text } from "azle"
import { PaginatedTodoItems } from "./candid";

export class TodoDB {
    private readonly PAGE_SIZE = 5; 
    private readonly _db = StableBTreeMap<text, text>(0, text, text);
    private readonly _ulid = monotonicFactory();

    public insert(description: string): string {
        const id: string = this._ulid();
        this._db.insert(id, description);

        return id;
    }

    public update(id: string, description: string) {
        this._db.insert(id, description);
    }

    public getById(id: string): string | undefined {
        return this._db.get(id).Some;
    }

    public list(page: number = 0): PaginatedTodoItems {
        const items = this._db.items(page * this.PAGE_SIZE, this.PAGE_SIZE);
        const containsMore = this._db.len() > (page + 1) * this.PAGE_SIZE;

        return {
            items: items.map((item) => ({
                id: item[0],
                description: item[1]
            })),
            next: containsMore ? page + 1 : -1
        };
    }

    public delete(id: string) {
        this._db.remove(id);
    }
}

export default new TodoDB();