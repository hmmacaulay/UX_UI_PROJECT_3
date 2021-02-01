// questions: do we want to have separate vars when dating, profesh, ranom are picked, OR for sakes of coding quickly, just have them all pop up same questions//
let allQuestions = {
  dating: [
    "tell me about your family",
    "do you enjoy puzzles?",
    "let's talk about our hobbies",
    "what does you typical Sunday look like?",
    "share your favorite pick up line",
    "what are your top 3 favorite movies?", 
    "If you had one week of no responsibilities, what would you do?", 
    "what is your favorite fashion trend of all time?", 
    "favorite 30 minutes of a typical day?", 
  ],
  professional: [
    "who is your hero and why?",
    "tell us about your earliest childhood memories?",
    "who was your favorite teacher in school, and how did they impact you?",
    "name two things you consider yourself to be good at.", 
    "what was the best vacation you had?",
    "what is one thing you admire most about one of your direct colleagues",
    "what fictional place would you like to visit?",
    "in the chat room, let's type out our favorite parts about our job and press enter at the same time.", 
    "in the chat room, let's describe ourselves in 3 words.", 
    "what do you think you will be doing 3 years from now?", 
    "let's play Never Have I ever: think of a never have I ever, loser takes a sip of their favorite work drink.", 
    "what is your favorite music genre?",

  ],
  random: [
    "favorite thing to see or do at a typical zoo?",
    "if applicable, describe an argument you had with a sibling.",
    "who is your favorite actor or actress?",
    "what is your favorite video/board game and why?",
    "pineapple pizza. Yay or nay?",
    "when was the last time you cried from happiness?",
    "share a fun fact about yourself",
    "what is the strangest meal you’ve ever eaten?",
    "what was your favorite childhood?",
    "show the best meme you have in your phone.",
  ]
};

let sliding = false;
let primaryCard = undefined;
let slidingCard = undefined;
let cards = [];

function buildDeck(category) {
  let questions = allQuestions[category];
  for (let i = 0; i < questions.length; ++i) {
    cards[i] = buildCard(questions[i]);
  }
  primaryCard = cards[0];
  primaryCard.className = "card primary";
}
function buildCard(questionText) {
  let board = document.getElementById("board");
  let card = document.createElement("div");
  let question = document.createElement("p");
  card.className = "card";
  question.className = "question";
  question.innerText = questionText;
  card.appendChild(question);
  board.appendChild(card);
  return card;
}
function randomCard() {
  return cards[Math.floor(Math.random() * cards.length)];
}
// Choose a new card to slide in to become the new primary
function flipCard() {
  // If we are already sliding return and do nothing
  if (sliding) return;
  // Saving primaryCard into oldPrimary because it will change
  let oldPrimary = primaryCard;
  // Assigning new primary card to the incoming random one
  let newPrimary = randomCard();
  // However, if we select the existing primary card try again by calling this function again
  if (newPrimary == primaryCard) return flipCard();

  sliding = true;
  // Update primaryCard variable to the new card selected
  primaryCard = newPrimary;
  primaryCard.className = "card primary sliding";
  window.setTimeout(function() {
    oldPrimary.className = "card";
    primaryCard.className = "card primary";
    sliding = false;
  }, 600);
}


///hover states for the cards
$(".category-card").mouseover(function() {
  $(this).animate({"width":"320px", "height":"600px"}, "fast", "linear");
});
$(".category-card").mouseleave(function() {
  $(this).animate({"width":"300px", "height":"550px"}, "fast", "linear");
});
// $(".category-card").mouseleave(function() {
//   $(this).css({"width": "300px", "height" : "550px"}).fadeOut();
// });
// $(".card.primary").mouseover(function() {
//   $(this).animate({"width":"320px", "height":"600px"}, "fast", "linear");
// });
// $(".card.primary").mouseleave(function() {
//   $(this).animate({"width":"300px", "height":"550px"}, "fast", "linear");
// });
