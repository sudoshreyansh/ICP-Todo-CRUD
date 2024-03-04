import { Test } from 'azle/test';
// @ts-ignore
import { _SERVICE } from './dfx_generated/crud/crud.did';
import { ActorSubclass } from '@dfinity/agent';

export function getTests(canister: ActorSubclass<_SERVICE>): Test[] {
    let id: string;

    return [
        {
            name: 'get_item for non-existent id',
            test: async () => {
                const [description] = await canister.get_item('random_id');

                return {
                    Ok: description === undefined
                };
            }
        },
        {
            name: 'insert_item',
            test: async () => {
                const description = "Hello world!";

                id = await canister.insert_item(description);
                const [result] = await canister.get_item(id);
                
                return {
                    Ok: description === result
                };
            }
        },
        {
            name: 'update_item',
            test: async () => {
                const updatedDescription = "Hello universe!";

                await canister.update_item(id, updatedDescription);
                const [result] = await canister.get_item(id);
                
                return {
                    Ok: updatedDescription === result
                };
            }
        },
        {
            name: 'delete_item',
            test: async () => {
                await canister.delete_item(id);
                const [result] = await canister.get_item(id);
                
                return {
                    Ok: result === undefined
                };
            }
        },
        {
            name: 'list_item',
            test: async () => {
                const description = "Hello world!";

                const ids = await Promise.all(Array(6).fill(description).map(v => canister.insert_item(v)));
                const page1 = await canister.list_items([]);
                const check1 = (
                    page1.next === 1 &&
                    page1.items.length === 5 &&
                    page1.items.every((item, i) => (
                        item.description === description &&
                        item.id === ids[i]
                    ))
                )

                const page2 = await canister.list_items([1]);
                const check2 = (
                    page2.next === -1 &&
                    page2.items.length === 1 &&
                    page2.items.every((item, i) => (
                        item.description === description &&
                        item.id === ids[5+i]
                    ))
                )
                
                return {
                    Ok: check1 && check2
                };
            }
        },
    ];
}