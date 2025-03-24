const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const flashcard = document.getElementById('flashcard');

// Flashcard data
const flashcards = [
  {
    question: "1. What is a formal two-way communication between a rater and ratee to discuss standards, responsibilities, expectations, and goals? Raters document the feedback session to assess or discuss the objectives, standards, behavior, and performance with the ratee. (8.1)",
    answer: "Performance feedback assessment"
  },
  {
    question: "2. What is designed to increase Airmen interaction and support at all levels, provide Airmen an opportunity to discuss personal and professional goals, and assist Airmen in achieving those goals? (8.1)",
    answer: "Performance feedback assessment \nNote: Also, during feedback sessions, raters will provide the ratee information on Air Force benefits by referring them to MyAirForceBenefits website."
  },
  {
    question: "3. What will raters do once the performance feedback assessment has been completed? (8.1)",
    answer: "Raters will give the original, completed, and signed worksheet to the ratee, and maintain copies of all completed performance feedback assessments and all signed performance feedback assessment notices, or appropriate statements (RegAF only)"
  },
  {
    question: "4. Who is responsible for developing a tracking mechanism for performance feedback assessments and ensuring they are conducted properly? (8.1)",
    answer: "Unit commanders \nNote: Rater's raters will monitor personnel to ensure ACAs are conducted, as required."
  },
  {
    question: "5. when a lower-level rater is not available due to unusual circumstances, or when officially assuming the subordinate rater's responsibilities, who will conduct performance feedback assessment sesions in place of the rater? (8.1)",
    answer: "Rater's rater"
  },
  {
    question: "6. Who is responsible for knowing when his or her performance feedback assessment session is due? (8.1)",
    answer: "Ratee \nNote: When a required or requested performance feedback assessment does not take place, ratees will notify the rater and, if necessary, the rater's rater"
  },
  {
    question: "7. For whom are performance feedback assessments mandatory? (8.1)",
    answer: "Officers up through the grade of Colonel, and for all enlisted RegAF and Air Reserve Component personnel \nNote: For student officers receiving DAF Form 475, Education/Training Report, or for enlisted personnel in initial or advanced skills training, a performance feedback assessment is not required, but may be given at the discretion of school leadership."
  },
  {
    question: "8. For performance evaluations completed on non-rated initial or advanced skills training students, what will serve in-lieu of the mandatory mid-term performance feedback assessment? (8.1)",
    answer: "Documented academic progress reports, such as the AETC Form 156, Student Training Report"
  },
  {
    question: "9. True or false? The mid-term performance feedback assessment is a mandatory supporting document to be routed with the performance evaluation but will not be made a matter of official record. (8.1)",
    answer: "True"
  },
  {
    question: "10. When conducting performance feedback assessments sessions, the private, face-to-face feedback session is an opportunity to discuss what information with the ratee? (8.2)",
    answer: "(a) Inform an individual of where they need improvement \n(b) Determine if an individual needs more information \n(c) Set future expectations"
  },
  {
    question: "11. What, whether positive or negative, needs to be specific? If either reinforces behavior or focuses the attention where the ratee needs improvement. (8.2)",
    answer: "Feedback \nNote: Specific positive comments reinforce the behavior, and specific negative comments focus the attention where the ratee needs improvement."
  },
  {
    question: "12. True or false? Raters may only conduct sessions by telephone in unusual circumstances where face-to-face sessions are impractical. (8.2)",
    answer: "True"
  },
  {
    question: "13. What documents are used to record formal communication between raters and ratees and may be used on the ratee's evaluation? (8.3)",
    answer: "Performance feedback assessment worksheets"
  },
  {
    question: "14. On the performance feedback assessment worksheet, who completes Section 3 on their own and reviews Section 9(Airman Basic thru Technical Sergeant) or 8 (Master Sergeant thru Chief Master Sergeant) prior to the feedback session? (8.3)",
    answer: "Ratee \nNote: The areas following Section 3 are completed by the rater"
  },
  {
    question: "15. What are the three performance assessment worksheets designated for use based on the ratee's rank? (8.3)",
    answer: "AF Form 724, Airman Comprehensive Assessment (2Lt thru Col) \nAF Form 931, Airman Comprehensive Assessment (AB thru TSgt) \nAF Form 932, Airman Comprehensive Assessment (MSgt thru CMSgt)"
  },
  {
    question: "16. In most cases, when will the military personnel flight provide a computer-generated performance feedback assessment notice to raters and ratees? (8.4)",
    answer: "Within 30 days of when supervision begins (identifying initial or follow-up performance feedback assessment sessions, as required), and again halfway between the time supervision began and the projected performance report close-out date (identifying mid-term performance feedback assessment session requirements)"
  },
  {
    question: "17. True or false? The computer-generated performance feedback assessment notice serves to remind raters that a performance feedback assessment session is due; failure to receive a performance feedback assessment notice justifies failing to hold a required session. (8.4)",
    answer: "False"
  },
  {
    question: "18. True or False? The Air National Guard does not currently have an automated process for performance feedback assessment notices and may use an alternate form of communication to notify raters and ratees of ACA schedules. (8.4)",
    answer: "True"
  },
  {
    question: "19. When must all initial performance feedback assessment sessions be conducted? (8.4)",
    answer: "Within the first 60 days of when supervision begins \nNote: This will be the ratee's only initial feedback until there is a change of reporting official."
  },
  {
    question: "20. When must the rater conduct a mid-term performance feedback assessment session? (8.4)",
    answer: "Midway between the date supervision begins and the next evaluation projected close-out date"
  },
  {
    question: "21. For the end-of-reporting period, when does the rater conduct the performance feedback assessment session? (8.4)",
    answer: "Within 60 days after the evaluation has been accomplished"
  },
  {
    question: "22. When may Ratees request feedback? (8.4)",
    answer: "As long as 60 days have passed since the last session"
  },
  {
    question: "23. For whom is the initial performance feedback assessment the only feedback required? (8.4)",
    answer: "Chief Master Sergeants and Colonels"
  },
  {
    question: "24. If the ratee is due an annual evaluation and the period of supervision is less than 150 days, how many days before the projected evaluation close-out date does the rater conduct the performance feedback assessment? (8.4)",
    answer: "Approximately 60 days"
  },
  {
    question: "25. True or False? The rater conducts the performance feedback assessment approximately 60 days before the projected evaluation close-out date if the ratee is due an annual evaluation and the period of supervision is less than 180 days. (8.4)",
    answer: "False"
  },
  {
    question: "26. For whom only, will the new rater do an initial feedback if an evaluation is due to a change of reporting official? This feedback may be accomplished using the performance feedback assessment worksheet, but documentation is not required. (8.4)",
    answer: "Lieutenant through Captain"
  },
  {
    question: "27.For whom, after the initial feedback, is a mid-term performance feedback assessment session conducted every 180 days until the rater writes a performance report or a change of reporting official occurs? (8.4)",
    answer: "Airman Basic, Airman, or Airman First Class (with less than 20 months of Total Active Federal Military Service"
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
