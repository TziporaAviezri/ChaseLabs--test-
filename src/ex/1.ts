async function getNumberFromServer(): Promise<number> {
    return new Promise<number>((resolve) =>
        setTimeout(() => resolve(Math.floor(Math.random() * 10)), 10000)
    );
}

async function myFunc(): Promise<number> {
    const numbers: Array<number> = await Promise.all([getNumberFromServer(), getNumberFromServer()])
    let x1 = numbers[0]
    let x2 = numbers[1]
    console.log(x1 + x2)
    return x1 + x2
}

export { myFunc }