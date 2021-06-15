/*
 * This script is a portfolio project created by Nadia "Atarun" Cerezo
 * as an exercise along Codecademy's Full-Stack Engineer Career Path.
 * Because this exercise comes pretty early in the path, the code
 * is kept intentionally simple.
 */

const times = [
    'Today',
    'Tomorrow',
    'Later this week',
    'Next week',
    'This month',
];

const verbs = [
    'feel grateful about',
    'become better at handling',
    'think more about',
    'be more open about',
    'look for ways to improve',
];

const objects = [
    'your health',
    'your diet',
    'your relationships',
    'your knowledge',
    'your career',
];

const pickRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const generateMotivator = () => {
    return `${pickRandom(times)}, you should try to ${pickRandom(verbs)} ${pickRandom(objects)}.\n\nHave a nice day ;)`;
}

console.log(generateMotivator());
