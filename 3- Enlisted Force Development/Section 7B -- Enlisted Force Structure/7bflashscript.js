const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const flashcard = document.getElementById('flashcard');

// Flashcard data
const flashcards = [
  {
    question: "1. What fulfills a compelling need for a deliberate and common approach to force development, career progression, increased supervisory, and leadership responsibilities? (7.4)",
    answer: "Enlisted force structure"
  },
  {
    question: "2. What provides the framework to best meet mission requirements while developing foundational and occupational competencies? (7.4)",
    answer: "Enlisted force structure"
  },
  {
    question: "3. What is comprised of three distinct and separate tiers, each correlating to increased levels of education, training, and experience, which build increasing levels of proficiency, leadership, and managerial responsibilities? (7.4)",
    answer: "Enlisted force structure \nNote: Three Enlisted force structure tiers: \n(1) Junior Enlisted, \n(2) Noncommissioned Officer, and \n(3) Senior Noncommissioned Officer"
  },
  {
    question: "4. Which Air Force handbook outlines in detail the responsibilities of enlisted tiers? (7.4)",
    answer: "The Little Brown Book, The Enlisted Force Structure, Chapter 4"
  },
  {
    question: "5. Which enlisted tier consists of the ranks: Airman Basic, Airman, Airman First Class, and Senior Airman? (7.5)",
    answer: "Junior Enlisted"
  },
  {
    question: "6. Initial enlisted accessions enter the USAF in the junior enlisted tier. Which competencies are introduced to them? (7.5)",
    answer: "Foundaitonal competencies \nNote: They focus on adapting to the military, being part of the profession of arms, achieving occupational proficiency, and learning to be productive members of the USAF."
  },
  {
    question: "7. Which junior enlisted rank is primarily adapting to the military profession, acquiring knowledge of USAF standards, customs, courtesies, as well as striving to attain occupational proficiency under close supervision? (7.5)",
    answer: "Airman Basic \nNote: The written abbreviation for Airman Basic is \"AB\" and the official term of address is \"Airman Basic\" or \"Airman.\""
  },
  {
    question: "8. Which junior enlisted rank begins to show occupational proficiency at basic tasks and still requires significant supervision and support? (7.5)",
    answer: "Airman \nNote: The written abbreviation is \"Amn\" and the official term of address is \"Airman.\""
  },
  {
    question: "9. Which junior enlisted rank fully complies with USAF standards and devotes time to increasing skills in their career fields and the military profession while becoming effective team members? (7.5)",
    answer: "Airman First Class \nNote: The written abbreviation is \"A1C\" and the official term of address is \"Airman First Class\" or \"Airman.\""
  },
  {
    question: "10. Which junior enlisted rank is continued supervision essential to ongoing occupational and professional growth? Typically, the 5-skill level is earned at this grade. (7.5)",
    answer: "Airman First Class"
  },
  {
    question: "11. Which junior enlisted rank commonly performs as skilled technicians and trainers? (7.5)",
    answer: "Senior Airman \nNote: The written abbreviation is \"SrA\" and the official term of address is \"Senior Airman\" or \"Airman.\""
  },
  {
    question: "12. Which junior enlisted rank begins developing supervisory and leadership skills through progressive responsibility, individual study, and mentoring? (7.5)",
    answer: "Senior Airman"
  },
  {
    question: "13. Which junior enlisted rank must complete Airman Leadership School before assuming the grade of Staff Sergeant? (7.5)",
    answer: "Senior Airman"
  },
  {
    question: "14. In which enlisted tier do airmen continue occupational growth and become expert technicians while developing as leaders, supervisors, managers, and mentors in the profession of arms? (7.6)",
    answer: "Noncommissioned officer \nNote: The noncommissioned officer (NCO) tier consists of the ranks: Staff Sergeant and Technical Sergeant."
  },
  {
    question: "15. In which enlisted tier do airmen understand and internalize foundational competencies in preparation for increased responsibilities while pursuing professional development through a variety of means, including the developmental special duty selection process and professional military education? (7.6)",
    answer: "Noncommissioned officer"
  },
  {
    question: "16. Who are skilled technicians with supervisory and training responsibilities? Typically, the 7-skill level is earned at this rank. (7.6)",
    answer: "Staff Sergeants \nNote: The written abbreviation is \"SSgt\" and the official term of address is \"Staff Sergeant\" or \"Sergeant.\""
  },
  {
    question: "17. Who are often a unit's technical experts? (7.6)",
    answer: "Technical Sergeant \nNote: The written abbreviation is \"TSgt\" and the official term of address is \"Technical Sergeant\" or \"Sergeant.\""
  },
  {
    question: "18. Who continuously strives to develop as technicians, supervisors, leaders, and mentors through professional development opportunities, including professional military education? (7.6)",
    answer: "Technical Sergeants"
  },
  {
    question: "19. What ranks comprise the senior noncommissioned officer (SNCO) tier? (7.7)",
    answer: "Master Sergeant, Senior Master Sergeant, and Chief Master Sergeant"
  },
  {
    question: "20. Who servces as leaders in the profession of arms? (7.7)",
    answer: "Senior Noncommissioned Officers (SNCOs) \nNote: They advise, supervise, mentor, and develop junior enlisted Airmen and NCOs under their charge."
  },
  {
    question: "21. In which enlisted airmen tier do airmen continue professional development and participate in decision-making processes on a variety of technical, operational, and organizational issues? (7.7)",
    answer: "Senior noncommissioned officer (SNCO) tier \nNote: SNCOs have a great deal of leadership experience to leverage resources and personnel against a variety of mission requirements."
  },
  {
    question: "22. Who are technical experts, transitioning from first-line supervisors to leaders of operational confidence? (7.7)",
    answer: "Master Sergeants \nNote: The written abbreviation is \"MSgt\" and the official term of address is \"Master Sergeant\" or \"Sergeant.\""
  },
  {
    question: "23. Which rank carries increased responsibilities for leadership, managerial, and team building? They shoud consider broadening opportunities through the developmental special duty selection process. (7.7)",
    answer: "Master Sergeant"
  },
  {
    question: "24. Who are experienced, operational leaders, skilled at merging team talents, skills, and resources with other organizations? (7.7)",
    answer: "Senior Master Sergeants \nNote: The written abbreviation is \"SMSgt,\" and the official term of address is \"Senior Master Sergeant,\" \"Senior,\" or \"Sergeant.\""
  },
  {
    question: "25. Who possesses substantial operational and occupational experience and holds strategic leadership positions with tremendous influence? (7.7)",
    answer: "Chief Master Sergeants \nNote: The written abbreviation is \"CMSgt\" and the official term of address is \"Chief Master Sergeant\" or \"Chief.\""
  },
  {
    question: "26. Who are charged with mentoring and developing junior enlisted personnel and influencing the professional development of company grade officers? (7.7)",
    answer: "Chief Master Sergeants"
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
