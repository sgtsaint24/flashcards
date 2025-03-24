const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const flashcard = document.getElementById('flashcard');

// Flashcard data
const flashcards = [
  {
    question: "1. When properly applied, what facilitates a quick understanding of a person's role and level of responsibility? (7.8)",
    answer: "Duty titles"
  },
  {
    question: "2. What are assigned based on the scope of responsibility and the duties being performed? (7.8)",
    answer: "Enlisted duty titles"
  },
  {
    question: "3. True or False: The title of Supervisor is used for NCOs and some Senior Airmen who are first-line supervisors, such as heavy equipment supervisors and shift supervisors? (7.8)",
    answer: "True"
  },
  {
    question: "4. When will Junior enlisted Airmen have the duty title of supervisor? (7.8)",
    answer: "When they are at least an Airman Leadership School graduate and supervise the work of others"
  },
  {
    question: "5. Which title is used only for NCOs and SNCOs in charge of a work center or element? They typically have subordinate supervisors. (7.8)",
    answer: "Noncommissioned Officer In Charge (NCOIC)"
  },
  {
    question: "6. Which title is also used for those whose primary duty is a unit-wide program or management function, even if they do not directly supervise personnel? (7.8)",
    answer: "Noncommissioned Officer In Charge (NCOIC)"
  },
  {
    question: "7. How many subordinate work centers or elements are required for the title of Section Chief to be used for NCOs and SNCOs in charge of a section? (7.8)",
    answer: "At least two subordinate work centers or elements"
  },
  {
    question: "8. Which title is used for NCOs and SNCOs who are the enlisted leaders of a flight? (7.8)",
    answer: "Flight Chief"
  },
  {
    question: "9. Which title is used for NCOs and SNCOs who are program, project, and policy managers at designated USAF levels? (7.8)",
    answer: "Manager \nNote: Managers may or may not have personnel working for them and maybe the enlisted leader of the branch, division, or directorate."
  },
  {
    question: "10. Which title is used for Chief Master Sergeants who are program, project, or policy managers at designated USAF levels? (7.8)",
    answer: "Chief \nNote: They may or may not have personnel working for them and maybe the enliste dleader of the branch, division, or directorate."
  },
  {
    question: "11. Who is the senior enlisted leader of the USAF and takes precedence over all USAF enlisted members? (7.9)",
    answer: "Chief Master Sergeant of the Air Force (CMSAF)"
  },
  {
    question: "12. Who provides leadership to the enlisted force and advises the Chief of Staff of the Air Force, Secretary of the Air Force, Chariman of the Joint Chiefs of Staff, and the Secretary of Defense on enlisted military matters for Airmen and their families? (7.9)",
    answer: "Chief Master Sergeant of the Air Force (CMSAF)"
  },
  {
    question: "13. Who is the USAF career field manager for command chief master sergeants and group superintendents? (7.9)",
    answer: "Chief Master Sergeant of the Air Force (CMSAF)"
  },
  {
    question: "14. Who represents the USAF to the American public, professional organizations, and media and manages the Air Force Order of the Sword Program? (7.9)",
    answer: "Chief Master Sergeant of the Air Force (CMSAF)"
  },
  {
    question: "15. Who, in April 1967, became the first to wear the unique CMSAF insignia with the wreath around the star? (7.9)",
    answer: "Chief Paul W. Airey \nNote: In October 1966, Chief of Staff of the Air Force General John P. McConnell announced the newly created position of CMSAF."
  },
  {
    question: "16. Which title applies to the senior enlisted leader in a designated USAF level - traditionally at wings, centers, numbered air forces (NAF), and major commands (MAJCOM)? (7.9)",
    answer: "Command Chief Master Sergeant (CCM)"
  },
  {
    question: "17. Who serves on the enlisted force distribution panel by advising their senior rater and panel membership on enlisted Airmen's potential to serve in the next higher grade? (7.9)",
    answer: "RegAF command chief master sergeants"
  },
  {
    question: "18. Who is the functional manager for the subordinate unit's senior enlisted leaders and first sergeants in their organization? (7.9)",
    answer: "Command chief master sergeant"
  },
  {
    question: "19. When are the titles of Senior Enlisted Advisor (SEA), Senior Enlisted Leader (SEL), and Chief Enlisted Manager (CEM) only used? (7.9)",
    answer: "When holding a designated and approved position"
  },
  {
    question: "20. Which title is the equivalent of a command chief master sergeant in a combatant command (COCOM) or a joint task force (JTF)? (7.9)",
    answer: "Combatant command or joint task force senior enlisted leader"
  },
  {
    question: "21. Which position serves as a key advisor in every command team and unit? (7.9)",
    answer: "Senior Enlisted Leader (SEL) \nNote: These enlisted leaders provide mentorship, guidance, experience, and expertise in organizing, equipping, training, and mobilizing the organization's enlisted force to meet home station and expeditionary mission requirements."
  },
  {
    question: "22. Which title is used for SNCOs in charge of squadron, group, and headquarters levels? (7.9)",
    answer: "Senior Enlisted Leader (SEL)"
  },
  {
    question: "23. Which title typically applies to Chief Master Sergeants, normally located at HAF, and is responsible for organizing and managing one or more enlisted career fields? (7.9)",
    answer: "Enlisted Air Force Career Field Manager (AFCFM) \nNote: Their responsibilities include establishing career field entry requirements, managing trained personnel requirements, and developing and managing career-long training plan requirements and programs."
  },
  {
    question: "24. Which title applies to SNCOs who manage designated enlisted career fields and serve as the major command liaisons for their respective AFCFMs? (7.9)",
    answer: "Enlisted Major Command Functional Manager (MFM) \nNote: They regularly visit organizations in the major command they oversee, monitor the health and manning of their career fields within their command, and elevate concerns to the AFCFMs."
  },
  {
    question: "25. Who provides functional and subject matter expertise to training managers to develop new or modify/improve existing training programs? (7.9)",
    answer: "Enlisted Major Command Functional Manager (MFM)"
  },
  {
    question: "26. Who is a key leader serving in a time-honored career-broadening position rich in custom and tradition? They epitomize the highest qualities of Air Force Senior Noncommissioned Officers. (7.9)",
    answer: "First sergeant"
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
