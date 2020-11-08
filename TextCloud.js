// Created by Noel Willems: a text cloud in JavaScript.
// Helped me find a good solution to regex word-cleaning:
// https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex/4328546
// https://stackoverflow.com/questions/22921242/remove-carriage-return-and-space-from-a-string

const inputFileName = process.argv[2];
const excludeFileName = process.argv[3];
const outputFileName = process.argv[4];

if(process.argv.length != 5) {
    console.log("Please run program like <text file name> <exclude file name> <output file name>\n");
    process.exit();
}

const fs = require('fs');
var exclArray = fs.readFileSync(excludeFileName).toString().split("\n").map(word => word.replace(/[\n\r]+/g, '').replace(/\s{2,10}/g, ' '));

fs.readFile(inputFileName, 'utf8', function(err, data) {
    if(err) throw err;
    var splitWordsArray = data.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").split(" ");
    var wordsMap = {};
    splitWordsArray.forEach(function (key) {
        if(wordsMap.hasOwnProperty(key) && key.length > 1 && !exclArray.includes(key)) {
            if(!exclArray.includes(key)) {
                wordsMap[key]++;
            } else if(exclArray.includes(key)) {

            }
        } else {
            wordsMap[key] = 1;
        }
    })
    const sortable = Object.entries(wordsMap).sort((a, b) => b[1]-a[1]);
    // Get top 50 - top50 array is literally just for getting size range...
    var i = 0;
    var top50 = {};
    var top50Map = new Map();
    for(let key in sortable) {
        if(i < 50) {
            top50[key] = sortable[key];
            top50Map.set(top50[i][0], top50[i][1]);
        }
        i++;
    }
    // Get size range
    var sizeRange = top50[0][1] - top50[49][1];
    // Get size factor
    var sizeFactor = 1000.0 / sizeRange;
    // Alphabetize top50
    var alphabetical50 = new Map([...top50Map.entries()].sort());
    // Write to HTML file
    var writeStream = fs.createWriteStream(outputFileName);
    writeStream.write("<!DOCTYPE html><html><body>\n");
    for(let [key, value] of alphabetical50) {
        let r = Math.random() * (255 - 1) + 1;
        let g = Math.random() * (255 - 0) + 1;
        let b = Math.random() * (255 - 0) + 1;
        writeStream.write("<span style = \"font-size:" + value * sizeFactor + "%; color: rgb(" + r + ", " + g + ", " + b + ")\">" + key + "</span>\n");
    }
    writeStream.write("</body></html>");
    writeStream.end();
});