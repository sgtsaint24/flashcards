const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const flashcard = document.getElementById('flashcard');

// Flashcard data
const flashcards = [
  {
    question: "1. What description illustrates what makes our enlistees Airmen? (7.1)",
    answer: "Force structure, core values, foundational and occupational competencies"
  },
  {
    question: "2. Functionally, how does the USAF develop technical experts? (7.1)",
    answer: "Through career field progression and succession planning \nNote: Institutionally, the USAF strives to develop experienced leaders."
  },
  {
    question: "3. Institutionally, the USAF strives to develop experienced leaders. As Airmen demonstrate expertise and potential, what should be made available to encourage more responsibility and increased leadership roles? (7.1)",
    answer: "Opportunities"
  },
  {
    question: "4. What offers unique perspectives on how the USAF functions? (7.1)",
    answer: "Developmental opportunities"
  },
  {
    question: "5. What is dependent upon deliberate conversations between supervisors and subordinates regarding career field and USAF requirements, personal qualifications and goals? (7.1)",
    answer: "Effective career progression and development"
  },
  {
    question: "6. What are the officer force structure's three distinct and separate tiers? (7.1)",
    answer: "(1) Company Grade Officer with grades O-1 thru O-3 \n(2) Field Grade Officer with grades O-4 thru O-6 \n(3) General Officer, with grades of O-7 thru O-10 \nNote: Above all, the focus of each tier is leadership, professionalism and mission success in the profession of arms."
  },
  {
    question: "7. Who provides corporate knowledge and stability across the USAF and deploy to various contingency areas? They are fundamental to the strength of our USAF. (7.1)",
    answer: "Civilians"
  },
  {
    question: "8. What does force development generally result in? (7.2)",
    answer: "Leadership, management, and warrior ethos proficiency"
  },
  {
    question: "9. What is a framework that links developmental needs with foundational competencies through the continuum of learning? (7.2)",
    answer: "Force development construct"
  },
  {
    question: "10. What is a career-long process of development where challenging experiences are combined with education and training through a common taxonomy to produce Airmen who possess the tactical expertise, operational competence, and strategic vision to lead and execute the full-spectrum of USAF missions? (7.2)",
    answer: "Continuum of learning \nNote: The continuum of learning, along with the defined competencies, are aligned to ensure Airmen are qualified and ready to meet the challenges of current and future operating environments."
  },
  {
    question: "11. What are the three distinct levels associated with leadership skills? These levels are recognized with varying emphasis across the foundational competencies. (7.2)",
    answer: "Tactical expertise, operational competence, and strategic vision."
  },
  {
    question: "12. Which competencies shift to a broader focus as Airmen progress from tactical expertise to strategic vision level of leadership? (7.2)",
    answer: "Foundational competencies"
  },
  {
    question: "13. Development at what leadership skill level includes a general understanding of team leadership and an appreciation for organization leadership. It is a time to master core duty skills, gain experience in applying those skills, and begin acquiring knowledge and experience essential for demonstrating effective, ethical leadership. (7.2)",
    answer: "Tactical expertise"
  },
  {
    question: "14. At what leadership skill level do Airmen learn to become the USAF's primary technicians and specialists, assimilate into the USAF culture, and adopt the USAF core values? (7.2)",
    answer: "Tactical expertise"
  },
  {
    question: "15. What leadership skill level is a time for honing followership abilities, motivating subordinates, and influencing peers to accomplish the mission while developing a warrior ethos and exercising communication skills as effectively and efficiently as possible? (7.2)",
    answer: "Tactical expertise"
  },
  {
    question: "16. At what leadership skill level are Airmen developing a broader understanding of the USAF perspective and the integration of diverse people and capabilities in operational execution? (7.2)",
    answer: "Operational competence"
  },
  {
    question: "17. Which leadership skill level is the time to transition from specialists to leaders with an understanding of themselves as leaders and followers, while applying an understanding of organizational and team dynamics? (7.2)",
    answer: "Operational competence"
  },
  {
    question: "18. Which leadership skill level is the time to lead teams by developing and inspiring others, taking care of people, and taking advantage of diversity? (7.2)",
    answer: "Operational competence"
  },
  {
    question: "19. Which leadership skill level is the time to foster collaborative relationships through building teams and coalitions, especially within large organizations, and negotiating with others, often external to the organization? (7.2)",
    answer: "Operational competence"
  },
  {
    question: "20. At what leadership skills level(s) do the majority of enlisted Airmen operate? (7.2)",
    answer: "Tactical expertise and operational competence"
  },
  {
    question: "21. At what leadership skill level are Airmen combining highly developed personal and people/team institutional competencies, applying broad organizational competencies, and leading and directing exceptionally complex and multitiered organizations? (7.2)",
    answer: "Strategic vision"
  },
  {
    question: "22. Which leadership skill level is the time to develop a deep understanding of how Airmen achieve synergistic results and desired effects with their operational capabilities? (7.2)",
    answer: "Strategic vision"
  },
  {
    question: "23. Which leadership skill level is the time when an Airman employs military capabilities, understands the operational and strategic arts, and has a thorough understanding of unit, USAF, joint, and coalition capabilities? (7.2)",
    answer: "Strategic vision"
  },
  {
    question: "24. At which leadership skill level do Airmen develop an enterprise perspective with a thorough understanding of the structure and relationships needed to accomplish strategic objectives? (7.2)",
    answer: "Strategic vision"
  },
  {
    question: "25. Which leadership skill level focuses on the effects an Airman can have across the USAF and on the Department of Defense? (7.2)",
    answer: "Strategic vision"
  },
  {
    question: "26. Which competencies are big picture concepts that the USAF does, or is expected to do or know all of the time? (7.3)",
    answer: "Core competencies"
  },
  {
    question: "27. Which competencies are a key set of abilities or qualities at the heart of the organization's reason for being? (7.3)",
    answer: "Core competencies"
  },
  {
    question: "28. Which competencies are those special abilities and qualities that airmen collectively possess that enable the USAF to function successfully and create airpower effects? (7.3)",
    answer: "Core competencies"
  },
  {
    question: "29. Which competencies are required of Airmen within a specific workforce category or specialty? (7.3)",
    answer: "Occupational competencies"
  },
  {
    question: "30. Which competencies describe technical/functional knowledge, skills, abilities, and other characteristics needed to perform that function's mission successfully? (7.3)",
    answer: "Occupational competencies"
  },
  {
    question: "31. Which competencies prepare Airmen to operate successfully across the widest array of USAF tasks and requirements, and to adapt in a constantly changing operational environment? (7.3)",
    answer: "Foundational competencies"
  },
  {
    question: "32. Which competencies are broadly applicable across (enlisted, officer, and civlian) USAF members, spanning all occupations, functions, and organizational levels, and form the framework for force development in the USAF? (7.3)",
    answer: "Foundational competencies"
  },
  {
    question: "33. Which competencies are observable, measurable patterns of knowledge, skills, abilities, and other characteristics needed to perform successfully across an USAF career? They are enduring and encompass attributes the USAF believes are critical to mission success. (7.3)",
    answer: "Foundational competencies"
  },
  {
    question: "34. Into what four major categories are foundational competencies grouped? (7.3)",
    answer: "Developing Self, Developing Others, Developing Ideas, and Developing Organizations"
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
