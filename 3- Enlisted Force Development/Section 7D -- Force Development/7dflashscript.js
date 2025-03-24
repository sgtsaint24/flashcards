const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const flashcard = document.getElementById('flashcard');

// Flashcard data
const flashcards = [
  {
    question: "1. What combines training, education, and experience in a life-cycle approach to devloping innovative Airmen prepared to accomplish the USAF mission and lead in a rapidly evolving global environment? (7.10)",
    answer: "Enlisted force development"
  },
  {
    question: "2. What development is essential throughout an Airman's career and is satisfied through education on foundational competencies, training on occupational competencies, seeking a varied array of experiential opportunities, and utilizing additional force developmental tools for continued growth to meet both personal and professional needs? (7.10)",
    answer: "Deliberate development"
  },
  {
    question: "3. True or False: What is imperative from an enterprise perspective is looking at how Airmen progress through their careers to successfully assume the responsibilities required in operational and strategic leadership positions? (7.10)",
    answer: "True"
  },
  {
    question: "4. What teams are designed to leverage the development of qualified Airmen with the leadership capacity and acculturation necessary to support current and projected mission requirements? (7.10)",
    answer: "Enlisted development teams"
  },
  {
    question: "5. What do career field managers use to perform progression and succession planning to place Airmen in key leadership and developmental positions based on defined education, training, experience, and performance requirements? (7.10)",
    answer: "Enlisted development teams \nNote: Placing the right people in the right place at the right time is imperative."
  },
  {
    question: "6. Who is responsible for guiding enlisted force development initiatives by reviewing, evaluating, and making recommendations to senior USAF leaders regarding education, training, and experiences impacting enlisted development? (7.10)",
    answer: "Enlisted Force Development Panel \nNote: Panel members include command chief master sergeants, career field managers, as well as representatives from Air Education Training Command, Air Force Personnel Center, and HAF."
  },
  {
    question: "7. Who is responsible for addressing deliberate development initiatives for Airmen regarding opportunities for enhanced performance? (7.10)",
    answer: "Air Force Enlisted Leadership Council \nNote: The council is comprised of chief master sergeants serving in strategic/joint/combined commands, major command command chiefs, other senior enlisted leader, and selected advisors."
  },
  {
    question: "8. What counsel is comprised of the current 12 Outstanding Airmen of the Year? With mentorship and oversight of teh Air Force Senior Enlisted Leadership Council, it serves as enlisted ambassadors for USAF enlisted recruiting and retention efforts. (7.10)",
    answer: "Air Force Enlisted Council"
  },
  {
    question: "9. What is a Total Force, experience tracking, enterprise solution that supports USAF development priorities? (7.10)",
    answer: "MyVECTOR"
  },
  {
    question: "10. What is a web-based career planning and force development tool that allows individuals greater transparency into their development and career management? (7.10)",
    answer: "MyVECTOR"
  },
  {
    question: "11. What offers robust mentoring capabilities, providing a mentor-matchign capability based on weighted characteristics identified by Airmen searching for a mentor? (7.10)",
    answer: "MyVECTOR"
  },
  {
    question: "12. What offers a real-time mentoring plan, discussion forums, a bullet tracker to document accomplishments, and the ability to dialogue on-line with a mentor? (7.10)",
    answer: "MyVECTOR"
  },
  {
    question: "13. What provides hands-on experiences that are typically outside of AFSC or career series formal training and helps individuals gain or enhance competencies? (7.10)",
    answer: "Developmental Special Experiences (DSEs) \nNote: MyVECTOR also includes a Developmental Special Experience (DSE) Catalog."
  },
  {
    question: "14. What offers a developmental self-assessment that helps members identify their personal strengths and areas for improvement among the USAF Foudnational Competencies? (7.10)",
    answer: "MyVECTOR \nNote: The self-assessment provides immediate feedback on recommended online resources (e.g., videos, articles, courses) based on a member's identified areas for improvement, as well as requests for confidential feedback from their supervisors and/or subordinates, peers, or higher-ranking members (360 degree feedback)."
  },
  {
    question: "15. What begins with recruiting and is continued through training and education, where it is cultivated? The way we manage it directly impacts the way we fight and win wars. (7.10)",
    answer: "Talent management"
  },
  {
    question: "16. What does the USAF as an institution recognize for maintaining a competitive edge and being considered an employer of choice for our nation's best and brightest talent? (7.10)",
    answer: "The importance of an innovative, inclusive, and agile work environment"
  },
  {
    question: "17. How are USAF programs designed to produce a highly skilled, motivated force that is capable of carrying out all tasks and functions in support of the USAF mission? (7.10)",
    answer: "To develop, manage, and execute realistic and flexible training and education \nNote: Innovative Airmen power the force."
  },
  {
    question: "18. Which program's purpose is to equip senior leaders and managers of USAF personnel and education and training programs with objective, fact-based information about USAF occupations and civilian occupational series? (7.11)",
    answer: "USAF Occupational Analysis Program \nNote: The Air Education and Training Command, Studies and Analysis Squadron, Occupational Analysis Section houses the USAF Occupational Analysis Program, governed by DAFMAN 36-2664."
  },
  {
    question: "19. Whose role is to conduct occupational studies, develop survey instruments, analyze data collected, and provide actionable USAF specialty information? (7.11)",
    answer: "Occupational analysis"
  },
  {
    question: "20. Which program is the singularly unique USAF entity that collects, analyzes, and reports the job/occupational performance factors taht are defined, measured, and applied within instructional system devlopment? (7.11)",
    answer: "Occupational Analysis Program"
  },
  {
    question: "21. The Occupational Analysis Program is integral to providing an objective and factual orientation for three force development tenets inherent in force development. What are these tenets? (7.11)",
    answer: "Training, utilization, and promotions"
  },
  {
    question: "22. Who conducts occupational studies on enlisted USAF specialties on a periodic basis, typically a three-to-four-year cycle, and upon request if out of cycle?? (7.11)",
    answer: "Occupational analysis \nNote: Career field leaders and subject matter experts are key to the process in developing the content of occupational survey instruments."
  },
  {
    question: "23. What survey results are provided in occupational analysis reports that include information on the duties and responsibilities performed by career field members in the form of task statements and duty areas throughout each stage of their career? (7.11)",
    answer: "Occupational survey \nNote: The data collected from each survey participant translates into operationally relevant training programs for their USAF specialty, and fair and reliable promotion tests for their career field under Weighted Airman Promotion System."
  },
  {
    question: "24. What serves as an external evaluation mechanism for USAF education and training programs? (7.11)",
    answer: "Occupational analysis"
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
