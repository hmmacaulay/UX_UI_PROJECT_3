// questions: do we want to have separate vars when dating, profesh, ranom are picked, OR for sakes of coding quickly, just have them all pop up same questions//
let allQuestions = {
  dating: [
    "what are your fave 5 cuisines, in order?",
    "if you could do anything you want tomorrow, what would you do? ",
    "do you enjoy puzzles?",
    "let's talk about our hobbies",
    "what does you typical Sunday look like?",
    "share your favorite pick up line",
    "what are your top 3 favorite movies?", 
    "If you had one week of no responsibilities, what would you do?", 
    "what is your favorite fashion trend of all time?", 
    "favorite 30 minutes of a typical day?", 
    "do you have weird feet",
    "how tall are you, for real",
    "plan a date for us right now",
    "what is the most attractive quality to you?",
    "what was the worst date you've ever been on",
    "what is something you wish you knew about me",
    "what is a non-negotiable for you?",
    "if we decided to spend $50 on dinner one night, what would we do?",
    "what do you prefer, dogs or cats?",
    "who is the most desirable person or thing alive?",
    "what is your most loved article of clothing",
    "do you know how to cook?",
    "do you watch TV? If so, last show you watched completely.",
    "what is your guilty pleasure?",
    "what is the best book you've ever read?",
    "has anyone changed your mind on something you strongly believed?",
    "how would you tell me you're mad at me?",
    "what is one thing we HAVE to agree on?",
    "what always makes you laugh?",
    "do you believe in the instition of marriage?",
    "what is something you want to know about me, but feel weird asking?",
    "who was the most important person to you in your childhood?",
    "what are you most excited about this month",
    "where have you wanted to go for a long time?",

  ],
  professional: [
    "who is your hero and why?",
    "tell us about your earliest childhood memories?",
    "who was your favorite teacher in school, and how did they impact you?",
    "name two things you consider yourself to be good at.", 
    "have you gone anywhere interesting for work? what was that like?",
    "what is one thing you admire most about one of your direct colleagues",
    "what fictional place would you like to visit?",
    "in the chat room, let's type out our favorite parts about our job and press enter at the same time.", 
    "in the chat room, let's describe ourselves in 3 words.", 
    "what do you think you will be doing 3 years from now?", 
    "let's play Never Have I ever: think of a never have I ever, loser takes a sip of their favorite work drink.", 
    "what is your favorite music genre?",
    "what are your goals this year?",
    "where do you see yourself in 5 years?",
    "what do you think would improve your worklife?",
    "do you think its important to be friends with your coworkers?",
    "if you could be any other role/function at your company for a day, what would you do?",
    "what did you want to be when you grew up?",
    "what would you tell your teenage self?",
    "what do you think is the most important decision you've made in your career?",
    "what, if anything, has surprised you about your career?",
    "what is the best advice you've received recently?",
    "what is a hidden talent I don't know about?",
    "why did you decide to the profession you do?",
    "do you think there is anything you can't learn in school?",
    "how do you like to relax after a workday?",
    "do you live to work, or work to live?",
    "growing up, did you watch movies any about certain jobs and imagine doing them?",
    "would you rather be a traveling food blogger, brain surgeon, politician, activist, or artist?",
    "what is one systemic problem you've tried to solve?",
    "would you ever want to work fully remotely?",
    "what do you wish you could tell your role model?",
    "is there a difference between doing what you believe in & believing in what you do?",
    "what's a hobby you wish you had time for?",
    "tell me about your dream workspace.",
    "what kind of work gets you into a state of flow?",
    "what is your best skill?",
    "what makes you smile during the workday?",


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
    "what was your favorite childhood toy?",
    "show the best meme you have in your phone.",
    "change the ending to your favorite movie. what happens?",
    "what is the cutest animal alive and why",
    "you are picked to start a TV show. what's it about? who do you cast?",
    "you get a deal to write a book about anything. what is it?",
    "what is the most important thing you're going to do tomorrow?",
    "how would you solve climate change?",
    "if you could get rid of your phone for good, would you?",
    "what is the worst trend, in your opinion?",
    "what is your strategy in rocks, papers, scissors?",
    "what games are you really good at?",
    "what is your fave smell?",
    "if every job was paid the same amount, what is your dream job",
    "take 5 min to design a city of the future. just because.",
    "invent a new childrens toy.",
    "who is the best artist of all time?",
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
