function countConsonantsAndVowels(str) {
    const vowels = 'aeiouAEIOU';
    let consonantCount = 0;
    let vowelCount = 0;
    
    for (let i = 0; i < str.length; i++) {
     const char = str[i];
     if (vowels.includes(char)) {
      vowelCount++;
     } else if (char.match(/[a-zA-Z]/)) {
      consonantCount++;
     }
    }
    
    return { consonantCount, vowelCount };
   }
