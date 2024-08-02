let states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
];

function removeVowelStart(statesArray) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];

    let filteredStates = statesArray.filter(state => {
        let firstLetter = state.charAt(0).toUpperCase(); 
        return !vowels.includes(firstLetter);
    });

    return filteredStates;
}

let filteredStates = removeVowelStart(states);

console.log(filteredStates);