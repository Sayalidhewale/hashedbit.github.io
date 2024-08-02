let stud = [
    {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
];

let output = stud.map(stud => {
    let scores = Object.values(stud);
    let average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    return { average: average };
});

console.log(output);