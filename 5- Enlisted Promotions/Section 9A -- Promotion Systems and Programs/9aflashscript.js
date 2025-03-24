const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const flashcard = document.getElementById('flashcard');

// Flashcard data
const flashcards = [
  {
    question: "1. Which system provides visible, relatively stable career progression opportunities; attracts, retains and motivates the kinds and numbers of people the military needs? It ensures a reasonable uniform application of the principle of equal pay for equal work among the services. (9.1)",
    answer: "Enlisted promotion system \nNote: The enlisted promotion system supports DoD Directive 1304.20, Enlisted Personnel Management System (EPMS)"
  },
  {
    question: "2. Which AFI provides detailed information regarding enlisted promotion systems? (9.1)",
    answer: "AFI 36-2502, Enlisted Airman Promotion/Demotion Programs"
  },
  {
    question: "3. Who limits the number of Airmen the RegAF may have in the top five enlisted grades? (9.2)",
    answer: "Department of Defense"
  },
  {
    question: "4. Whose promotion quotas are tied to fiscal year-end strength and are affected by funding limits, regulatory limits, and the number of projected vacancies in specific grades? (9.2)",
    answer: "Staff Sergeant through Chief Master Sergeant \nNote: The Department of Defense limits the number of Airmen the regular Air Force may have in the top five enlisted grades."
  },
  {
    question: "5. What limts, as outlined in Title 10 United States Code, Armed Forces, the number of Airmen who may serve in the RegAF in the top two enlisted grades? (9.2)",
    answer: "Public law"
  },
  {
    question: "6. What percentage may the authorized average of enlisted members on RegAF status (other thahn for training) be in a fiscal year for pay grades E-8 and E-9? (9.2)",
    answer: "Not be more than 2.5 percent (E-8) and 1.25 percent (E-9)"
  },
  {
    question: "7. Under the Senior Airman Below-the-Zone Program, who may be considered one time for early advancement if they meet the minimum eligibility criteria? (9.3)",
    answer: "Airman First Class"
  },
  {
    question: "8. If promoted to Senior Airman below-the-zone, when is the promotion effective date? (9.3)",
    answer: "Six months before their fully qualified date"
  },
  {
    question: "9. When are Airmen considered for below-the-zone promotion? (9.3)",
    answer: "In the month (December, March, June, or September) before the quarter (January - March, April - June, July - September, or October - December) that they are eligible"
  },
  {
    question: "10. Which program is designed to meet those unique circumstances that, in a commander's judgement, clearly warrant promotion? (9.3)",
    answer: "Stripes for Exceptional Performers (STEP) Program"
  },
  {
    question: "11. Which program is intended to promote Airmen for compelling, although perhaps not quantifiable, reasons? Isolated acts or specific achievements should not be the sole basis for promotion under this program. (9.3)",
    answer: "Stripes for Exceptional Performers (STEP) Program"
  },
  {
    question: "12. Under the STEP program, to what ranks may commanders at various organizational levels promote a limited number of exemplary performing Airmen with exceptional potential? (9.3)",
    answer: "Staff Sergeant through Technical Sergeant"
  },
  {
    question: "13. An individual may not receive more than one promotion under any combination of promotion programs within a 12-month period. What is the one exception to this? (9.3)",
    answer: "Senior Airmen must serve six months of time in grade before being promoted to Staff Sergeant"
  },
  {
    question: "14. Where do NCOs and SNCOs compete for promotion and test? (9.3)",
    answer: "Under the Weighted Airman Promotion System in the control Air Force Specialty Code held on the promotion eligibility cutoff date"
  },
  {
    question: "15. Promotion selectees are individuals with the highest scores in each AFSC, within the quota limitations. What happens if more than one individual has the same total score at the cutoff point? (9.3)",
    answer: "The USAF promotes everyone with that score"
  },
  {
    question: "16. Which process occurs when eligible Staff Sergeants through Senior Master Sergeants, whose weighable data changes in their promotion file, compete monthly for promotion consideration? Its action is typically processed on a monthly basis. (9.3)",
    answer: "In-System Supplemental Promotion Process"
  },
  {
    question: "17. Under what process do Airmen who test after initial selects have been made, such as deployed Airmen, or anyone who was unable to test during their normal testing window, compete for promotion consideration? (9.3)",
    answer: "In-System Supplemental Promotion Process"
  },
  {
    question: "18. When are senior NCO supplemental evaluation boards conducted? (9.3)",
    answer: "Semiannual basis"
  },
  {
    question: "19. True or False? With the exception of a missing static closeout date evaluation, there are no automatic approvals for supplemental board consideration when a record did not meet a previous board for which they were eligible. (9.3)",
    answer: "True"
  },
  {
    question: "20. Why may supplemental promotion consideration NOT be granted if an error or omission appeared on the data verification record or in the SNCO selection record located in the personnel records display application? (9.3)",
    answer: "The individual did not take the necessary steps to correct the error prior to promotion selection or prior to the evaluation board"
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
