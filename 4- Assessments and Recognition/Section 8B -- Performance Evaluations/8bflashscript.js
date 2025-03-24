const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const flashcard = document.getElementById('flashcard');

// Flashcard data
const flashcards = [
  {
    question: "1. What is designed to provide a reliable, long-term, cumulative record of performance and potential? (8.5)",
    answer: "Performance evaluation system \nNote: It is important for supervisors to help subordinates understand their strengths and weakensses and how their efforts contribute to the mission."
  },
  {
    question: "2. What are the key aspects associated with the evaluation system? (8.5)",
    answer: "(a) How well the individual does his or her job \n(b) The qualitites the individual brings to the job"
  },
  {
    question: "3. True or False? Evaluations are \"Controlled Unclassified Information\" forms and must be marked, protected, and accessed accordingly. (8.5)",
    answer: "True"
  },
  {
    question: "4. Who is responsible for determining if a requestor's official duties require access? (8.5)",
    answer: "The office with custodial responsibility"
  },
  {
    question: "5. What type of information should not be entered in any section of the evaluation? This includes attachments to evaluations, referral documents, and endorsements to referral documents. (8.5)",
    answer: "Classified information"
  },
  {
    question: "6. Which AFI provides specific instructions for completing evaluations, with reference to proper formatting, appropriate raters/evaluators, HLR and Senior Raters, content, acronym use, classified information, and other details? (8.5)",
    answer: "AFI 36-2406, Officer and Enlisted Evaluation Systems"
  },
  {
    question: "7. What should the officer and enlisted evaluation systems accomplish? (8.6)",
    answer: "(a) effectively communicate performance standards and expectations and provide meaningful feedback on how those standards and expectations are being upheld; \n(b) provide a reliable, long-term, cumulative record of performance and promotion potential based on that performance; \n(c) provide sound information to assist in making talent management decisions"
  },
  {
    question: "8. True or False? The officer and enlisted evaluation systems should document in the permanent record any substantiated allegation of a sex-related offense against an Airman, regardless of grade, that results in conviction by court-martial, nonjudicial punishment, or other adverse administrative action. (8.6)",
    answer: "True"
  },
  {
    question: "9. Which form is the Airman Comprehensive Assessment Worksheet (AB thru TSgt)? (8.7)",
    answer: "AF Form 931"
  },
  {
    question: "10. Which form is the Airman Comprehensive Assessment Worksheet (MSgt thru CMSgt)? (8.7)",
    answer: "AF Form 932"
  },
  {
    question: "11. Which form is the Enlisted Performance Brief? (8.7)",
    answer: "AF Form 716"
  },
  {
    question: "12. Which form is the Airman Comprehensive Assessment Addendum? (8.7)",
    answer: "AF Form 724-A"
  },
  {
    question: "13. Who will ensure supervisors are properly trained and educated on how to write a performance evaluation? (8.8)",
    answer: "Unit commanders"
  },
  {
    question: "14. What must unit commanders do to ensure knowledge of and familiarization with the Airman's history of sex-related offenses resulting in conviction by courts-martial, nonjudicial punishment, or other adverse administrative action? (8.8)",
    answer: "Conduct a record review of all personnel assigned to and/or transferred into his or her command \nNote: This is accomplishment to reduce the likelihood that repeat offenses will escape the notice of current, subsequent, or higher-level commanders."
  },
  {
    question: "15. What is the ratee's performance assessed on by raters, reviewers, senior raters, and HLRs? (8.8)",
    answer: "What the ratee did, how well he or she did it, and the ratee's potential based on that performance throughout the rating period"
  },
  {
    question: "16. Who must review evaluations prior to them becoming a matter of record? This is the time to bring typos, spelling errors, and inaccurate data to the attention of the rater. (8.8)",
    answer: "Ratees"
  },
  {
    question: "17. True or False? When the ratee signs the evaluation, he or she is concurring with the content and certifying they have reviewed the evaluation for administrative errors. (8.8)",
    answer: "False"
  },
  {
    question: "18. If the ratee disagrees with any comments and/or ratings on the report, when may the ratee file an appeal? (8.8)",
    answer: "After the evaluation becomes a matter of record"
  },
  {
    question: "19. True or False: A performance statement is a standalone sentence that must include two elements: \n1) the behavior or action taken by an Airman; and \n(2) the impact, results, or outcome of that behavior or action. (8.9)",
    answer: "True \nNote: Include at least one performance statement in each section of the evaluation being accomplished."
  },
  {
    question: "20. In all cases, what must comments be when they are included in performance evaluations? (8.9)",
    answer: "Specific, outlining the event and any corrective action taken \nNote: Comments, such as \"conduct unbecoming...\" or \"an error in judgement led to an off-duty incident...,\" are too vague. Examples of valid comments are \"Master Sergeant Smith drove while intoxicated, for which he received an Article 15 and \"Captain Jones made improper sexually suggestive and harassing comments to a squadron member, for which he received a Letter of Reprimand.\""
  },
  {
    question: "21. An adverse action includes reportable civilian offenses or convictions. Are convictions for motor vehicle violations that do not require a court appearance considered an adverse action? (8.9)",
    answer: "No \nNote: Convictions required to be reported include: \n1) any finding of guilt; \n2) any plea of guilty; \n3) any plea of no contest or nolo contendere; \n4) any plea of guilty in exchange for a deferred prosecution or diversion program; or 5) any other similar disposition of civilian criminal charges."
  },
  {
    question: "22. When are complaints of sex-related offenses against a member, regardless of grade, required a mandatory notation on the member's next performance report or training report and promotion recommendation form (if not already documented on an evaluation or court-martial in the selection record)? (8.9)",
    answer: "Complaints resulting in conviction by court-martial, non-judicial punishment, or adverse administrative action \nNote: Sex-related offenses include violations of the Uniform Code of Military Justice or attempts to commit related offenses."
  },
  {
    question: "23. If a member has been convicted by a court-martial or if the senior rater decides to file any adverse information in an Airman's selection record, what comments are mandatory on the ratee's next performance or training report and promotion recommendation form (if not already documented on an evaluation or court-martial in the selection record)? (8.9)",
    answer: "Comments relating to the ratee's behavior"
  },
  {
    question: "24. True or False? Raters may request a waiver of the mandatory requirement to document civilian convictions for good cause. The waiver request will route from the rater, through any required additional rater and the ratee's commander, to the ratee's senior rater, and, if endorsed, be forwarded to the major command commander or authorized final approval authority. (8.9)",
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
