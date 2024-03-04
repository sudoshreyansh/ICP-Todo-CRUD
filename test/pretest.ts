import { execSync } from 'child_process';

async function pretest() {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    execSync(`dfx canister uninstall-code crud || true`, {
        stdio: 'inherit'
    });

    execSync(`dfx deploy crud`, {
        stdio: 'inherit'
    });

    execSync(`dfx generate crud`, {
        stdio: 'inherit'
    });
}

pretest();