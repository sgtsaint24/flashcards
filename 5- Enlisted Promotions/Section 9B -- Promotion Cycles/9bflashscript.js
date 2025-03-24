const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const flashcard = document.getElementById('flashcard');

// Flashcard data
const flashcards = [
  {
    question: "1. Why does the USAF establish promotion cycles? (9.4)",
    answer: "(a) To ensure timely periodic promotions \n(b) To permit accurate forecasting of vacancies \n(c) To balance the promotion administrative workload \n(d) To provide promotion eligibility cutoff dates (PECD)"
  },
  {
    question: "2. What are some factors for promotion eligibility? (9.4)",
    answer: "-Proper skill level \nSufficient time in grade, time in service \n-Commander recommendation \n-Completion of enlisted professional military education (PME) \n-Completion of a college degree \n-Cumulative years of enlisted service \n-High year of tenure"
  },
  {
    question: "3. What is the time-in-grade requirement Airman Basic may be promotion eligible to Airman? (9.5)",
    answer: "Six Months"
  },
  {
    question: "4. What is the time-in-grade requirement Airman may be promotion eligible to Airman First Class? (9.5)",
    answer: "10 Months"
  },
  {
    question: "5. When are Airmen initially enlisting for a period of six years promoted from Airman Basic to Airman First Class? (9.5)",
    answer: "Upon completion of either technical training or 20 weeks of technical training after graduation from basic military training (whichever occurs first) \nNote: The date of rank for Airman First Class is then adjusted to the signatory date on the basic military training certificate, without back pay and allowances."
  },
  {
    question: "6. When may Airmen be promotion eligible to Senior Airman? (9.5)",
    answer: "Upon completion of 36 months of time in service and 20 months of time in grade or 28 months of time in grade (whichever occurs first) \nNote: Required skill level in primary AFSC is 3-level"
  },
  {
    question: "7. Senior Airman below-the-zone is a one-time promotion consideration to advance to Senior Airman. How much earlier is the advancement? (9.5)",
    answer: "Six Months"
  },
  {
    question: "8. What is the time in service and time in grade requirement for Senior Airmen to be promotion eligible to Staff Sergeant? (9.5)",
    answer: "Three years of time in service and six months of time in grade"
  },
  {
    question: "9. What is the promotion eligibility cutoff dates (PECD) and required skill level in the primary AFSC for promotion to Staff Sergeant? (9.5)",
    answer: "PECD is 31 March and 5-level \nNote: The test cycle is May - June."
  },
  {
    question: "10. What is the time in service and time in grade requirement for Staff Sergeants to be promotion eligible to Technical Sergeant? (9.5)",
    answer: "Five years of time in service and 23 months of time in grade"
  },
  {
    question: "11. What is the promotion eligibility cutoff dates (PECD) and required skill level in primary AFSC for promotion to Technical Sergeant? (9.5)",
    answer: "PECD is 31 January and 7-level \nNote: The test cycle is February - March"
  },
  {
    question: "12. What is the time in service and time in grade requirement for Technical Sergeants to be promotion eligible to Master Sergeant? (9.5)",
    answer: "Eight years of time in service and 24 months of time in grade"
  },
  {
    question: "13. What is the promotion eligibility cutoff dates (PECD) and required skill level in primary AFSC for promotion to Master Sergeant? (9.5)",
    answer: "PECD is 30 November and 7-level \nNote: The test cycle is February - March."
  },
  {
    question: "14. What is the time in service and time in grade requirement for Master Sergeants to be promotion eligible to Senior Master Sergeant? (9.5)",
    answer: "11 years of time in service and 20 months of time in grade"
  },
  {
    question: "15. What is the promotion eligibility cutoff dates (PECD) and required skill level in primary AFSC for promotion to Senior Master Sergeant? (9.5)",
    answer: "PECD is 30 September and 7-level"
  },
  {
    question: "16. What is the time in service and time in grade requirement for Senior Master Sergeants to be promotion eligible to Chief Master Sergeant? (9.5)",
    answer: "14 years of time in service and 21 months of time in grade"
  },
  {
    question: "17. What is the promotion eligibility cutoff dates (PECD) and required skill level in primary AFSC for promotion to Chief Master Sergeant? (9.5)",
    answer: "PECD is 31 July and 9-level"
  },
  {
    question: "18. When must a Statement of Understanding be signed for selects to the grade of Master Sergeant and Senior Master Sergeant with more than 18 years Total Active Federal Military Service (TAFMS) by effective date of promotion? (9.6)",
    answer: "Within 10 duty days after selections are confirmed \nNote: In addition, all Chief Master Sergeant-selects, regardless of TAFMS, will sign a Statement of Understanding within 10 duty days after selections are confirmed."
  },
  {
    question: "19. How many years of service retainability and active duty service commitment (ADSC) from the effective date of promotion must Master Sergeant-selects and Senior Master Sergeant-selects obtain and incur to qualify for non-disability retirement? (9.6)",
    answer: "Two years of service retainability and incur two-year active duty service commitment (ADSC) \nNote: Failure to withdraw an existing retirement application (approved or pending) within 10 duty days from presentation of the AF Form 63 or the Statement of Understanding will result in removal from the selection list."
  },
  {
    question: "20. How many years of service retainability and active duty service commitment (ADSC) from the effective date of promotion must Chie Master Sergeant-selects acknowledge and obtain and incur to qualify for non-disability retirement? (9.6)",
    answer: "Three years of service retainability and incur a three-year active duty service commitment (ADSC)"
  },
  {
    question: "21. True or False? Failure to withdraw an existing retirement application (approved or pending) within 30 duty days from presentation of the Statement of Understanding will result in removal from the selection list. (9.6)",
    answer: "False \nNote: Failure to withdraw an existing retirement application (approved or pending) within 10 duty days from presentation of the Statement of Understanding will result in removal from the selection list."
  },
  {
    question: "22. The Air Force Personnel Center assigns promotion sequence numbers to Airmen selected for promotion to Staff Sergeant through Chief Master Sergeant. On what are promotion sequence numbers based? (9.7)",
    answer: "Date of rank, Total Active Federal Military Service (TAFMS), and date of birth \nNote: Supplemental selectees are assigned promotion sequence numbers of .9 (increment previously announced) or .5 (unannounced future increment)."
  },
  {
    question: "23. When may Airmen decline promotion in writing by submitting a letter to the military personnel flight (MPF)? (9.8)",
    answer: "Any time prior to the promotion effective date \nNote: MPF will ensure Military Personnel Data System (MilPDS) is updated and forwards a copy of the declination letter to AFPC to be filed in the member's Autoamted Records Management System (ARMS)."
  },
  {
    question: "24. May an Airman be considered ineligible for promotion if he or she fails? (9.9)",
    answer: "Yes"
  },
  {
    question: "25. True or False? When individuals are ineligible for promotion, they (a) cannot test, \n(b) cannot be considered if already tested, and \n(c) the projected promotion, if already selected, will be canceled? (9.9)",
    answer: "True"
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
