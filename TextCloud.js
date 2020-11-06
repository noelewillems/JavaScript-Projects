// Created by Noel Willems: a text cloud in JavaScript.
// Helped me find a good solution to regex word-cleaning:
// https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex/4328546
// https://stackoverflow.com/questions/22921242/remove-carriage-return-and-space-from-a-string

// 1. Read in exclude file. Store excluded words
// 2. Read in input file. Lowercase all words, clean the words, and remove single-letter "words." Exclude excluded words. We need a key-value pair as well.
// 3. Sort words by value - aka, sort from most frequent -> least frequent.
// 4. Get top 50 of the most common, AND their values.
// 5. Alphabetize the top 50.
// 6. Get size range value: most common value - 50th most common value. 
// 7. Get size factor: 1000 / range.
// 8. Write to HTML. Font size = word count * size factor. Use randomized colors.

// TO DO: Output HTML

const inputFileName = process.argv[2];
const excludeFileName = process.argv[3];
const fs = require('fs');
var exclArray = fs.readFileSync(excludeFileName).toString().split("\n").map(word => word.replace(/[\n\r]+/g, '').replace(/\s{2,10}/g, ' '));

fs.readFile(inputFileName, 'utf8', function(err, data) {
    if(err) throw err;
    var splitWordsArray = data.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").split(" ");
    var wordsMap = {};
    splitWordsArray.forEach(function (key) {
        if(wordsMap.hasOwnProperty(key) && key.length > 1 && !exclArray.includes(key)) {
            wordsMap[key]++; 
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
    // Alphabetize top50
    var alphabetical50 = new Map([...top50Map.entries()].sort());
});