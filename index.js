const yourName = document.getElementById('your-name');
const herName = document.getElementById('her-name');
const btnCalculate = document.getElementById('btn-calculate');
const messageEl = document.getElementById('message');
const nameEl = document.getElementById('name');

btnCalculate.addEventListener('click', function() {
    const inputValue1 = yourName.value;
    yourName.value = "";
    // const firstLetterInput1 = inputValue1.slice(0, 1);
    // const otherLetterInput1 = inputValue1.slice(1, inputValue1.length);
    // const fullInput1 = firstLetterInput1.toUpperCase() + otherLetterInput1.toLowerCase();
    const inputValue2 = herName.value;
    herName.value = "";
    // const firstLetterInput2 = inputValue2.slice(0, 1);
    // const otherLetterInput2 = inputValue2.slice(1, inputValue2.length);
    // const fullInput2 = firstLetterInput2.toUpperCase() + otherLetterInput2.toLowerCase();
    const fullInput1 = capitalizeWord(inputValue1);  
    const fullInput2 = capitalizeWord(inputValue2);   
    randomLove(fullInput1, fullInput2);
});

function randomLove(fullInput1,  fullInput2) {
    let loveScore = Math.floor(Math.random() * 101) + 1;
    nameEl.textContent = `${fullInput1} & ${fullInput2}`;
    if (loveScore > 70) {
        return messageEl.textContent = `Your love score is ${loveScore}%, what a perfect match.`;
    } else if (loveScore >= 40 && loveScore <= 70) {
        return messageEl.textContent = `Your love score is ${loveScore}%, what a work in progress connection.`;
    } else {
        return messageEl.textContent = `Your love score is ${loveScore}, what a loveless relationship.`;
    }
}

function capitalizeWord (name) {
    const words = name.split(" ");
    const capitalizeWords = words.map(word => {
        return word.slice(0, 1).toUpperCase() + word.slice(1, word.length).toLowerCase();
    } )
    return capitalizeWords.join(" ");
}
