async function getNumberFromServer(number: number): Promise<number> {
    return new Promise<number>((resolve) =>
        setTimeout(() => resolve(number + 1), 100)
    );
}

async function rejGetNumberFromServer(number: number): Promise<number> {
    return new Promise<number>((resolve, reject) =>
        setTimeout(() => reject(number + 1), 100)
    );
}


async function run1000(): Promise<void> {
    const promises: Promise<number | void>[] = [];
    for (let i = 0; i < 5; i++) {
        promises.push(getNumberFromServer(i));
    }
    promises.push(rejGetNumberFromServer(5))
    for (const p of promises) {
        try {
            await p
        }
        catch (error) {

        }
    }
}

export { run1000 }