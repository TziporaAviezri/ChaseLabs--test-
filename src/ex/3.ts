
function splitHTMLTagByRegex(HTMLTag: string): void {
    const regex: RegExp = /<\w*\s(.*)>/;
    const attributes: Array<string> = regex.exec(HTMLTag)![1].split(" ")
    attributes.forEach(a => {
        console.log(a.replace("=", ":"));
    })
}

export { splitHTMLTagByRegex }


