const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const flashcard = document.getElementById('flashcard');

// Flashcard data
const flashcards = [
  {
    question: "1. What describes who we are as a service and how we conduct ourselves as Airmen and representatives of the USAF? It sets the standards all Airmen are expected to adhere to-and exceed. (1.1)",
    answer: "Professionalism"
  },
  {
    question: "2. What requirements frame professionalism within the USAF? (1.1)",
    answer: "Trust, loyalty, dignity, and personal commitment"
  },
  {
    question: "3. What is the root of professionalism? It is what bonds every Airman's contribution to the mission with the collective understanding of what it means to serve with humility and respect for those we serve with. (1.1)",
    answer: "Respect"
  },
  {
    question: "4. The USAF is a Total Force that effectively leverages the unique capabilities of officer, enlisted, and civilian Airmen across all service components. As a Total Force, what characterizes us as an air force? (1.1)",
    answer: "Values-based, mission-focused, people-oriented."
  },
  {
    question: "5. What is the heart and soul of who we are and who we aspire to be every day? Our sense of it underlies the pride we feel when we say, \"I am an American Airman.\" (1.1)",
    answer: "Professionalism"
  },
  {
    question: "6. True or False? Every Airman has an \"obligation\" to be the very best professional possible (1.1)",
    answer: "True"
  },
  {
    question: "7. Our most important resources is people. What is our duty? (1.1)",
    answer: "Taking care of our wingmen"
  }
];

let currentCardIndex = 0;

// Function to show the current card
function displayCard(index) {
  const card = flashcards[index];
  flashcard.querySelector('.front').textContent = card.question;
  flashcard.querySelector('.back').textContent = card.answer;
  flashcard.classList.remove('flipped');
  nextButton.style.display = 'none';
  flipButton.style.display = 'inline-block';
}

// Flip the card to show the answer
flipButton.addEventListener('click', () => {
  flashcard.classList.toggle('flipped');
  flipButton.style.display = 'none';
  nextButton.style.display = 'inline-block';
});

// Show the next card when the "Next Card" button is clicked
nextButton.addEventListener('click', () => {
  currentCardIndex++;
  if (currentCardIndex < flashcards.length) {
    displayCard(currentCardIndex);
  } else {
    alert('You have completed all flashcards!');
    currentCardIndex = 0; // Reset to the first card
    displayCard(currentCardIndex);
  }
});

// Initialize with the first card
displayCard(currentCardIndex);
