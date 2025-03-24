const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const flashcard = document.getElementById('flashcard');

// Flashcard data
const flashcards = [
  {
    question: "1. True or False: The number of promotion-eligible personnel, identified by major commands and Air Force Specialty Codes (AFSC), determines the career field backgrounds of board members. (9.19)",
    answer: "True"
  },
  {
    question: "2. How are promotion board members divided into panels? (9.19)",
    answer: "One Colonel and two Chief Master Sergeants. The board president is always a General Officer \nNote: Before evaluating records, board members are briefed and sworn to complete the board's task without prejudice or partiality and participate in an extensive trial-run process to ensure scoring consistency before evaluating any \"live\" records."
  },
  {
    question: "3. True or False: While scores will vary between panels, all records within a Chief Enlisted Manager (CEM) Code or AFSC are evaluated under the same standard. The important aspects of a final board score is how one is eligible compared to his or her peers in the final order of merit. (9.20)",
    answer: "True \nNote: The evaluation board looks at several areas: performance, education, breadth of experience, job responsibility, professional competence, specific achievements, and leadership."
  },
  {
    question: "4. True or False: Board members have access to the weighted scores of individuals competing for promotion. (9.20)",
    answer: "False"
  },
  {
    question: "5. What helps establish a scoring standard that can be applied consistently across the promotion evaluation board? (9.20)",
    answer: "Trial run \nNote: During the trial run, board members are given two selected sets of records to score as a practice exercise using secret ballots before the actual board scoring process begins."
  },
  {
    question: "6. An individual's record may receive a panel composite score (three members) from a minimum of 18 (6-6-6) to a maximum of 30 (10-10-10) points. What factor is this composite score (18 to 30 points) multiplied by later? (9.20)",
    answer: "A factor of 15, resulting in a total board score (270 to 450) \nNote: Each panel member scores each record using a 6-to 10-point scale and half-point increments."
  },
  {
    question: "7. When records are given to each panel member, what do panel members use to score the record individually? The ballots are then given directly to a recorder. This ensures each panel member has scored each record independently. (9.20)",
    answer: "Secret ballot"
  },
  {
    question: "8. True or False: A record scored with a difference of more than one point between any of the panel members (for example, 8.5, 8.0, and 7.0) is termed a split vote and is returned to the panel for resolution. (9.20)",
    answer: "True \nNote: At this time, all panel members may discuss the record openly among themselves. This allows them to state why they scored the record as they did. Only those panel members directly involved in the split may change their scores."
  },
  {
    question: "9. What happens if promotion panel members cannot agree on the split vote? (9.20)",
    answer: "They give the record to the board president for resolution \nNote: This ensures consistency of scoring and eliminates the possibility that one panel member will have a major impact (positive or negative) on an individual's board score."
  },
  {
    question: "10. After the board is finished, the weighted factor scores are combined with the board scores. This completely electronic operation builds an order of merit listing by total score within each CEM Code or AFSC, and the overall promotion quota is then applied to each list. What happens after the selection results are approved? (9.20)",
    answer: "The data is transmitted to the military personnel section"
  },
  {
    question: "11. What are the means to give Airmen a report of their relative standing in the promotion consideration process? It should be never be provided to or used by anyone other than the individual and his or her commander. (9.21)",
    answer: "Promotion score notices \nNote: An Airman's scores cannot be disclosed without the Airman's written consent."
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
