const containerWord = document.querySelector(".word");
/*мы нашли контейнер где будут рандомно подставляться наши слова из массива.*/
const words = ['cat', 'dog', 'bear', 'giraffe', 'duck'];
/*создали массив со словами*/

let randomIndex = 0;
/*создали переменную, которая будет хранить индекс рандомно выбранного слова из массива*/
let index = 0;
/* переменна index - это порядковый номер буквы в слове */
let currentWord;
/*создали переменную, которая будет хранить индекс рандомно выбранного слова из массива */


function getRandomWord(words) {
    randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex];
    containerWord.innerHTML = '';
    /*очистить контейнер */
    for (let i = 0; i < currentWord.length; i++) {
        /* c помощью for мы перебираем наше рандомное слово по буквам*/
        const letter = document.createElement('span');
        /*мы создали спан, чтобы поместить нашу букву*/
        letter.textContent = currentWord[i];

        containerWord.append(letter);
    }

}

document.addEventListener('keydown', function(event) {
    const spansApple = containerWord.querySelectorAll('span');
    const userEntered = event.key.toLowerCase();
    /*создали переменную, котoрая хранит информацию о введеном польз букве*/
    const rightLetter = currentWord[index].toLowerCase();
    /*буква из нашего рандомного слова */
    if (userEntered != rightLetter) {
        /*если пользователь ввел неверно*/
        spansApple[index].classList.add('w');
        /*тогда буква окрашивается в красный*/
    } else if (userEntered === rightLetter) {
        /*если пользователь ввел верно букву */
        spansApple[index].classList.remove('w');
        spansApple[index].classList.add('c');
        /*тогда - в зеленый */
        index++;
        /*и так если верно шаг за шагом введенные правильно буквы окрашиваются в зеленый */
    }
    if (index === currentWord.length) {
        /*если все буквы из нашего слова внесены*/
        index = 0;
        setTimeout(getRandomWord(words), 1000)
            /*выводим новое рандомное слово из нашего массива через 1 сек*/
    };
});

getRandomWord(words);
/* вызываем нашу функцию для поучения рандомного слова*/