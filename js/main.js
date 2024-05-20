let qoutes = [
  {
    quote:
      "I am so clever that sometimes I don't understand a single word of what I am saying.",
    author: "― Oscar Wilde, The Happy Prince and Other Stories",
  },
  {
    quote: "Without music, life would be a mistake.",
    author: "― Friedrich Nietzsche, Twilight of the Idols",
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "― Ralph Waldo Emerson",
  },
  {
    quote:
      "It is better to be hated for what you are than to be loved for what you are not.",
    author: "― Andre Gide, Autumn Leaves",
  },
  {
    quote:
      "It is our choices, Harry, that show what we truly are, far more than our abilities.",
    author: "― J.K. Rowling, Harry Potter and the Chamber of Secrets",
  },
  {
    quote:
      "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
    author: "― Marilyn Monroe",
  },
  {
    quote:
      "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    author: "― Albert Einstein",
  },
  {
    quote: "It does not do to dwell on dreams and forget to live.",
    author: "― J.K. Rowling, Harry Potter and the Sorcerer's Stone",
  },
  {
    quote:
      "Good friends, good books, and a sleepy conscience: this is the ideal life.",
    author: "― Mark Twain",
  },
  {
    quote:
      "As he read, I fell in love the way you fall asleep: slowly, and then all at once.",
    author: "― John Green, The Fault in Our Stars",
  },
];
let qouteText = document.getElementById("qoute");
let qouteAuthor = document.getElementById("author");
let btn = document.getElementById("btn");
let qouteIndexRandom;
let qouteIndex;

function getRandomQoute() {
  qouteIndexRandom = Math.random() * 10;
  qouteIndex = Math.ceil(qouteIndexRandom) - 1;
  qouteText.innerText = qoutes[qouteIndex].quote;
  qouteAuthor.innerText = qoutes[qouteIndex].author;
}
