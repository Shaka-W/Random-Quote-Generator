// Grab new quote button
const newQuote = document.querySelector('#new-quote');
// Grab tweet quote button
const tweetQuote = document.querySelector('#tweet-quote');

const quote = document.querySelector('.quote');
// Quotes
let quotes = ['"Happiness is a state of activity." - Aristole', '"Life is really simple, but we insist on making it complicated." - Confucius', '"Action is the foundational key to all success." - Pablo Picasso', '"Judge your success by what you had to give up in order to get it." - Dalai Lama', '"Don\'t let what you cannot do interfere with what you can do." - John R. Wooden', ];

// Random number
newQuote.addEventListener('click', (e) => {

    let randomNumber = Math.floor(Math.random() * (quotes.length));
  
   switch(randomNumber) {
        case 0:
            quote.innerHTML = quotes[0];
            break;
        case 1:
            quote.innerHTML = quotes[1];
            break;
        case 2:
            quote.innerHTML = quotes[2];
            break;
        case 3:
            quote.innerHTML = quotes[3];
            break;
        case 4: 
            quote.innerHTML = quotes[4];
            break;
        case 5:
            quote.innerHTML = quotes[5];
            break;
        case 6:
            quote.innerHTML = quotes[6];
            break;
        case 7:
            quote.innerHTML = quotes[7];
            break;
        case 8:
            quote.innerHTML = quotes[8];
            break;
        case 9:
            quote.innerHTML = quotes[9];
            break;
        case 10:
            quote.innerHTML = quotes[10];
            break;
    }
});

tweetQuote.addEventListener('click', () => {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML);
});