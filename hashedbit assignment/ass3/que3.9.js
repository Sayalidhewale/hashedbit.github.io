function countWords(paragraph) {
    return paragraph.split(/\s+/).filter(word => word.length > 0).length;
}

let paragraph = "This is a sample paragraph that contains a number of words.";
console.log(countWords(paragraph));