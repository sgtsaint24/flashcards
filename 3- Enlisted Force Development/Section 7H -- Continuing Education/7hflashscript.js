const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const flashcard = document.getElementById('flashcard');

// Flashcard data
const flashcards = [
  {
    question: "1. To what extent are certifications and post-secondary degrees, including associate's, bachelor's, master's, or other advanced academic degrees, important for professional development? (7.25)",
    answer: "They enhance the degree holder's job and professional qualifications"
  },
  {
    question: "2. What should members focus on while expanding their operational employment of air and cyberspace knowledge? (7.25)",
    answer: "Enhancing professional competence"
  },
  {
    question: "3. Which degrees range from 18 to 24 months, depending upon a student's undergraduate degree and prerequisite course work, and are limited to master's degree programs offered at the resident campus, Wright-Patterson Air Force Base, Ohio? (7.25)",
    answer: "Enlisted-to-Air Force Institute of Technology \nNote: In conjunction with other professional education and training programs, AFIT science, engineering and management graduate degrees further develop technical and managerial skills, enhance combat capability through career field core competency augmentation, and provide the USAF with highly proficient NCOs."
  },
  {
    question: "4. What is the USAF's website for all higher education and credentialing needs? (7.26)",
    answer: "Air Force Virtual Education Center \nNote: Airmen can also view information about education benefits and personal education records, which include courses taken, tuition caps, and degree plans; they also apply online for military tuition assistance for civilian college courses, and USAF Credentialing Opportunities On-line (AF COOL) funding for specialty-related and leadership/management credentials."
  },
  {
    question: "5. Which program supports long-range USAF goals for maintaining a high-quality force and enhancing professional and personal development, recruitment, retention, and readiness? (7.26)",
    answer: "Voluntary Education Program"
  },
  {
    question: "6. What three programs does the USAF offer for enlisted personnel to help defray the cost of obatining off-duty education? (7.26)",
    answer: "Military Tuition Assistance, Montgomery GI Bill, and Post-9/11 GI Bill"
  },
  {
    question: "7. What does the USAF provide (with some restrictions) to all eligible USAF members to assist in furthering their education? (7.26)",
    answer: "Tuition assistance program \nNote: The USAF pays the cost of tuition at regionally and nationally accredited institutions, not to exceed the established hourly and annual caps \nNote: Tuition assistance cannot be used to purchase textbooks, e-books, reference/instructional materials, electronic equipment/supplies, certificate/license examinations, or fees, regardless of applicability to course enrollment or institutional reimbursement policy"
  },
  {
    question: "8. What may students use to cover the remaining portion of their tuition when it exceeds the semester hour cap of the military tuition assitance program? (7.26)",
    answer: "The top-up benefit in their Montgomery GI Bill or Post-9/11 GI Bill"
  },
  {
    question: "9. Which education tuition program offers members to have their pay reduced by $100 a month for the 12 months following the election window? They may also elect to contribute an additional $600, which adds a maximum of $5,400 to the total benefit package. (7.26)",
    answer: "Montgomery GI Bill \nNote: In-service use of the Montgomery GI Bill is permitted after two years of continuous RegAF status. Benefits expire 10 years after separation or retirement."
  },
  {
    question: "10. Which program allows Airmen to transfer GI Bill benefits to dependents if they have sufficient retainability? (7.26)",
    answer: "Post-9/11 GI Bill \nNote: The details and benefits of the Post-9/11 GI Bill are different from the Montgomery GI Bill."
  },
  {
    question: "11. Which program helps service members earn college credit for knowledge gained through previous experience? Service members can choose between the College-Level Examination Program (CLEP) and the Dantes Subject Standardized Test (DSST) exams. (7.27)",
    answer: "Credit-by-Examination"
  },
  {
    question: "12. Which exams are college subject tests service members can take to earn college credits for knowledge acquired outside of a traditional classroom or for what they already know? (7.27)",
    answer: "Dantes Subject Standardized Test (DSST) and CLEP \nNote: Test takers who pass these exams earn 3-12 recommended lower-level college credits, based on the exam taken."
  },
  {
    question: "13. Which commissioning program requires military membesr to possess a baccalaureate or higher degree from an accredited college or university? (7.28)",
    answer: "Officer Training School"
  },
  {
    question: "14. Which commissioning program delegates authority to unit and wing commanders to nominate highly qualified Airmen to become USAF officers through USAF Academy attendance? (7.28)",
    answer: "Leaders Encouraging Airmen Development (LEAP) Program"
  },
  {
    question: "15. Which progarm allocates scholarship quoatas for outstanding Airmen? Award of this scholarship is for two to four years. (7.28)",
    answer: "The Scholarships for Outstanding Airmen to Reserve Officer Training Corps (ROTC) \nNote: Airmen separate from the RegAF and join a USAF ROTC detachment to become full-time college students. The USAF provides a tuition and fees scholarship of up to $18,000 per year, an annual textbook allowance, and a monthly nontaxable stipend."
  },
  {
    question: "16. Which program allows military members to receive a USAF ROTC scholarship to attend a college or university of their choice, provided the college or university offers a USAF ROTC Program? This scholarship will be awarded for two to four years. (7.28)",
    answer: "USAF ROTC Airman Scholarship and Commissioning Program \nNote: Those selected separate from the RegAF, join a USAF ROTC detachment, and become a full-time college student. The USAF provides a tuition/fees scholarship of up to $18,000 per year, an annual textbook allowance, and a monthly nontaxable stipend."
  },
  {
    question: "17. Which program sponsors enlisted members to complete the upper division curriculum toward a baccalaureate degree in nursing? (7.28)",
    answer: "Nurse Enlisted Commissioning Program \nNote: After graduation, the member must successfully pass the National Council Licensure Examination for Registered Nurses before attending Officer Training School."
  },
  {
    question: "18. Which program offers enlisted personnel the opportunity to complete the prepartory coursework for admission to medical school while maintaining RegAF status? (7.28)",
    answer: "Enlisted to Medical Degree Prepatory Program"
  },
  {
    question: "19. Which program offers enlisted personnel the opportunity to complete requirements to earn a master's degree from the University of Nebraska Medical Center and receive a commission as a Physician's Assistant in the Biomedical Sciences Corps while maintaining RegAF status? (7.28)",
    answer: "Interservice Physician Assistant Program \nNote: The 29-month program. Graduates must pass the Physician Assistant National Certifying Exam before they may provide world-class healthcare to our Airmen and their families."
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
