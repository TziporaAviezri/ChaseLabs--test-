import { myFunc } from "./ex/1";
import { iterationPrintNames, recursionPrintNames } from "./ex/2";
import { splitHTMLTagByRegex } from "./ex/3";
import { run1000 } from "./ex/4";
import {  hashBodyRequestMiddleware } from './ex/5';
import { logCssFile } from "./ex/6";
import { createApp } from "./public";

// 1
myFunc()
// 2
recursionPrintNames()
iterationPrintNames()
// 3
splitHTMLTagByRegex('<a href="http://example.com" id="my-id">')
// 4 
run1000()
// 5
const app = createApp()
app.use('/ex5', hashBodyRequestMiddleware)
// 6
logCssFile()


