const containerWord = document.querySelector(".word");
/*мы нашли контейнер где будут рандомно подставляться наши слова из массива.*/
const words = ['cat', 'dog', 'bear', 'giraffe', 'duck'];
/*создали массив со словами*/

let randomIndex = 0;
/*создали переменную, которая будет хранить индекс рандомно выбранного слова из массива*/


function getRandomWord(words) {
    randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}
/*создали функцию, которая возвращает рандомно выбранное слово из нашего массива*/
const randomWord = getRandomWord(words);
/*создали переменную, которая возвращает результат нашей функции: рандомное слово*/

for (let i = 0; i < randomWord.length; i++) {
    /* c помощью for мы перебираем наше рандомное слово по буквам*/
    const letter = document.createElement('span');
    /*мы создали спан, чтобы поместить нашу букву*/
    letter.textContent = randomWord[i];
    containerWord.append(letter);
}




document.addEventListener('keydown', function(event) {
    const spansApple = containerWord.querySelectorAll('span');
    const userEntered = event.key.toLowerCase();
    /*создали переменную, котoрая хранит информацию о введеном польз букве*/
    const rightLetter = randomWord[randomIndex].toLowerCase();
    /*буква из нашего рандомного слова */
    if (userEntered != rightLetter) {
        /*если пользователь ввел неверно*/
        spansApple[randomIndex].classList.add('w');
        /*тогда буква окрашивается в красный*/
    } else if (userEntered === rightLetter) {
        /*если пользователь ввел верно букву */
        spansApple[randomIndex].classList.remove('w');
        spansApple[randomIndex].classList.add('c');
        /*тогда - в зеленый */
        randomIndex++;
        /*и так если верно шаг за шагом введенные правильно буквы окрашиваются в зеленый */
    }
    if (randomIndex === randomWord.length - 1) {
        /*если все буквы из нашего слова внесены*/
        setTimeout(randomWord, 1000)
            /*выводим новое рандомное слово из нашего массива через 1 сек*/
    };
});

getRandomWord(words);
/* вызываем нашу функцию для поучения рандомного слова*/