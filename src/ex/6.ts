import fs from 'fs/promises'

async function logCssFile(): Promise<void> {
    const cssFile: Buffer = await fs.readFile('./src/ex/EX6-expansions/styles.css');
    console.log(cssFile.toString());
}

export { logCssFile }