// questions: do we want to have separate vars when dating, profesh, ranom are picked, OR for sakes of coding quickly, just have them all pop up same questions//
let allQuestions = {
  dating: [
    "What have you created that you are most proud of?", 
    "What's the best thing you got from one of your parents?", 
    "What bends your mind every time you think about it?", 
    "In your group of friends, what role do you play?", 
    "What incredibly strong opinion do you have that is completely unimportant in the grand scheme of things?", 
    "What's your favorite piece of clothing you own?",
    "What fictional place would you most like to go to?", 
    "What's one place you've travelled that you never want to go back to?", 
    "When people come to you for help, what do they usually want help with?", 
    "What are you interested in that most people haven't heard of?", 
    "Mountains or ocean?",
  ],
  professional: [
    "What have you created that you are most proud of?", 
    "What's the best thing you got from one of your parents?", 
    "What bends your mind every time you think about it?", 
    "In your group of friends, what role do you play?", 
    "What incredibly strong opinion do you have that is completely unimportant in the grand scheme of things?", 
    "What's your favorite piece of clothing you own?",
    "What fictional place would you most like to go to?", 
    "What's one place you've travelled that you never want to go back to?", 
    "When people come to you for help, what do they usually want help with?", 
    "What are you interested in that most people haven't heard of?", 
    "Mountains or ocean?",
  ],
  random: [
  "What have you created that you are most proud of?", 
  "What's the best thing you got from one of your parents?", 
  "What bends your mind every time you think about it?", 
  "In your group of friends, what role do you play?", 
  "What incredibly strong opinion do you have that is completely unimportant in the grand scheme of things?", 
  "What's your favorite piece of clothing you own?",
  "What fictional place would you most like to go to?", 
  "What's one place you've travelled that you never want to go back to?", 
  "When people come to you for help, what do they usually want help with?", 
  "What are you interested in that most people haven't heard of?", 
  "Mountains or ocean?",
  "What was your best birthday?", 
  "Pizza or tacos?",
  "What's the story behind one of your scars?",
  "Pancakes or waffles?", 
  "Pirates or ninjas?",
  "What was the best compliment you've ever received?",
  "If you lost all of your possessions but one, what would you want it to be?", 
  "Who inspires you to be better?", 
  "What dumb accomplishment are you most proud of?", 
  "When was the last time you changed your opinion about something major?",  
  "What is something you can never seem to finish?",
  "What is one of your favorite smells?", 
  "If you had to change your name, what would you change it to?", 
  "What are you a natural at?", 
  "What do you like most about your family?",
  "Have you ever saved someone's life?",
  "What's an unpopular opinion you have?", 
  "Who is one of your best friends, and what do you love about them?",
  "Do you have any nicknames?",
  "What's one of your favorite comfort foods?",
  "What is your theme song?",
  "What is one of the great values that guides your life?",
  "What's your favorite book?",
  "What's the last book you gave up on and stopped reading?",
  "What's the worst movie you've ever seen?",
  "What issue will you always speak your mind about?",
  "What would you do on a free afternoon in the middle of the week?",
  "Pet peeves?",
  "What's the best piece of advice you ever received?",
  "Who was your favorite teacher and why?",
  "If you could have any superpower, what would it be and why?",
  "What's on your bucket list this year?",
  "If you could live in a book, TV show, or movie, what would it be?",
  "What languages do you speak?",
  "Would you rather be stuck on a broken ski lift or a broken elevator?",
  "If you were a vegetable, what vegetable would you be?",
  "What makes you cry?",
  "Who are some of your heroes?",
  "What's something you wish you'd figured out sooner?",
  "What's your favorite candy?",
  "What's your worst habit?",
  "Favorite city?",
  "What's your go-to dance move?",
  "Do you ever sing when you're alone? What songs?",
  "What's your earliest memory?",
  "What's something you learned in the last week?",
  "What story does your family always tell about you?",
  "What talent would you show off in a talent show?",
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