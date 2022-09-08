interface INode {
    name: string;
    children: INode[];
}

const headNode: INode = {
    name: "1", children: [
        {
            name: '2', children: [
                {
                    name: '3', children: [
                        { name: '4', children: [] }
                    ]
                },
                { name: '5', children: [] },
                { name: '6', children: [] }

            ]
        },
        { name: '7', children: [] }
    ]
}
function recursionPrintNamesFunction(node: INode): void {
    if (node == undefined)
        return;
    console.log(node.name);
    node.children.forEach(x => {
        recursionPrintNamesFunction(x);
    })
}

function iterationPrintNamesFunction(node: INode): void {
    const dummyStack = new Array<INode>()
    let currentNode: INode, res: string = ''
    dummyStack.push(node)
    while (dummyStack.length != 0) {
        res += dummyStack[dummyStack.length - 1].name + " ";
        currentNode = dummyStack.pop()!
        currentNode.children.forEach(n => {
            dummyStack.push(n)
        });
    }
    console.log(res);
}

const recursionPrintNames: Function = (): void => { recursionPrintNamesFunction(headNode) }
const iterationPrintNames: Function = (): void => { iterationPrintNamesFunction(headNode) }

export { recursionPrintNames, iterationPrintNames }