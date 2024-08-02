function correctfn(string, wrong, correct) {
    return string.replace(new RegExp(wrong, 'g'), correct);
}

let sentence = "I have a blue car. My blue car is fast.";
let correctedSentence = correctfn(sentence, 'blue', 'red');
console.log(correctedSentence);