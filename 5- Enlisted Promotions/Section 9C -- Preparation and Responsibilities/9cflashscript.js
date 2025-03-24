const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const flashcard = document.getElementById('flashcard');

// Flashcard data
const flashcards = [
  {
    question: "1. What are the testing responsibilities for all promotion eligible individuals? (9.10)",
    answer: "(1) Know their eligibility status \n(2) Maintain specialty and military qualifications \n(3) Initiate a self-study plan \n(4) Obtain all applicable study references as outlined in the Enlisted Promotions References and Requirements Catalog (EPRRC) \n(5) Ensure their selection folder is accurate if it will be reviewed by the central evaluation board \n(6) Be prepared to test on the beginning of the testing window"
  },
  {
    question: "2. When must members who will be unavailable during the entire testing cycle be prepared to test? (9.10)",
    answer: "Prior to their departure, even if that is before the first day of the testing cycle \nNote: Preparing for promotion testing is an individual responsibility. The importance of individual responsibility cannot be overemphasized."
  },
  {
    question: "3. True or False? Airmen may opt to test early provided the correct test booklets are available. (9.10)",
    answer: "True"
  },
  {
    question: "4. What prohibition protects the integrity of the promotion testing program by ensuring promotion test scores are a reflection of each member's individual knowledge? It is strictly prohibited for the purposes of enlisted promotino testing. (9.11)",
    answer: "Group study (two or more people)"
  },
  {
    question: "5. What AFMAN contains information concerning enlisted promotion test compromise? (9.11)",
    answer: "DAFMAN 36-2664"
  },
  {
    question: "6. Which of the following is NOT a restriction regarding promotion tests ? (9.11)",
    answer: "Discussing promotion test content with the test control officer or test examiner is prohibited. \nNote: Enlisted personnel who violate these prohibitions are subject to prosecution under Article 92 of the Uniform Code of Military Justice for violating a lawful general regulation. Conviction can result in a dishonorable discharge, forfeiture of all pay and allowances, and confinement for up to two years."
  },
  {
    question: "7. Who is responsible for providing promotion eligible members access to WAPS Career Development Courses? (9.12)",
    answer: "Barnes Center for Enlisted Education, Air Force Career Development Academy"
  },
  {
    question: "8. According to DAFMAN 36-2664, when must promotion eligible Airmen have access to reference materials? If not, the Airman may request a delay in testing. (9.12)",
    answer: "At least 60 days before the scheduled test date"
  },
  {
    question: "9. What is used to determine Airman promotion eligibility as well as the cutoff date that will determine when the contents of the selction folder and information on promotion evaluation briefs must be updated and complete? (9.13)",
    answer: "Promotion eligibility cutoff date (PECD)"
  },
  {
    question: "10. What is the date that promotion criteria are considered for promotion, such as the data provided on the data verification brief, that is used for promotion board evaluation consideration? (9.13)",
    answer: "Promotion eligibility cutoff date (PECD)"
  },
  {
    question: "11. When will individuals with a reporting identifier or special duty identifier compete within that reporting identifier or special duty identifier? (9.13)",
    answer: "If designated as their control Air Force Specialty Code (AFSC) on the promotion eligibility cutoff date (PECD)"
  },
  {
    question: "12. What is the document utilized for promotion consideration and is the most important tool to review to ensure information on a promotion record is complete? (9.14)",
    answer: "Data Verification Record (DVR)"
  },
  {
    question: "13. Where must all eligible Airmen review their Data Verification Record (DVR)? (9.14)",
    answer: "In the Automated Records Management System/Personnel Records Display Application (ARMS/PRDA) \nNote: Data Verification Record Review Steps: \n(1) Access the Air Force Portal. \n(2) Access Personnel Records Display Application (PRDA). \n(3) Under My Sections, select PRDA. \n(4) The Selection Folder category within PRDA is the \"As Is\" record. \n(5) The Board category within PRDA is the \"As Met\" record."
  },
  {
    question: "14. If an error or omission is noted on the Data Verification Record (DVR), the Airman must immediately contact his or her military personnel flight for assistance. Who will update the Military Personnel Data System with the correct data and update the DVR on virtual military personnel flight? (9.14)",
    answer: "Military Personnel Flight"
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
