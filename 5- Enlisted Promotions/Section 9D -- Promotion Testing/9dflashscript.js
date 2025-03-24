const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const flashcard = document.getElementById('flashcard');

// Flashcard data
const flashcards = [
  {
    question: "1. Which section under Air Education and Training, Studies and Analysis Squadron, Joint Base San Antonio-Randolph, Texas, produces all Air Force enlisted promotion tests, which are written by Airmen for Airmen? (9.15)",
    answer: "Airman Advancement Section"
  },
  {
    question: "2. Who travels to work in-house with test development specialists and apply their knowledge and expertise to develop current, relevant, and accurate test questions for enlisted promotion testing? (9.15)",
    answer: "Teams of senior NCOs"
  },
  {
    question: "3. The Promotion Fitness Examinations (PFE) measure military and supervisory knowledge. Who do test development specialists select to develop and validate PFE questions? (9.15)",
    answer: "Chief Master Sergeants based on USAF demographics, extensive experience, and diverse major command representation"
  },
  {
    question: "4. Specialty Knowledge Tests (SKT) measure important job knowledge required in a particular specialty. Who are selected to develop and validate SKT questions? (9.15)",
    answer: "Senior NCOs based on their specialties and job experiences \nNote: For SKTs, test development specialists work closely with USAF career field managers to stay abreast of changes affecting career fields which may impact promotion test development."
  },
  {
    question: "5. Published annually on 1 October, what lists all enlisted promotion tests authorized for administration and the study references associated with these tests? (9.16)",
    answer: "Enlisted Promotions References and Requirements Catalog (EPRRC) \nNote: The study references for the PFE are the grade-specific Enlisted Promotion Study Guides derived from DAFH 1, Airman."
  },
  {
    question: "6. What is the point requirement when taking both examinations, Promotion Fitness Examinations (PFE) and Specialty Knowledge Tests (SKT)? (9.17)",
    answer: "A minimum score of 40 points is required on a PFE. A minimum score of 40 points is required on a SKT. A combined score of 90 points is required. airmen who score the minimum 40 points on either exam (when taking both examinations) must score a minimum 50 on the other one to meet the minimum combined score of 90. \nNote: For those testing PFE only, a minimum score of 45 is required (combined score of 90 when doubled)."
  },
  {
    question: "7. Which AFI includes complete charts with exceptions and notes for calculating points and factors for promotion? (9.18)",
    answer: "AFI 36-2502"
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
