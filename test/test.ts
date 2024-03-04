import { getCanisterId, runTests } from 'azle/test';
import { createActor } from './dfx_generated/crud';
import { getTests } from './tests';

const canister = createActor(getCanisterId('crud'), {
    agentOptions: {
        host: 'http://127.0.0.1:8000'
    }
});

runTests(getTests(canister));