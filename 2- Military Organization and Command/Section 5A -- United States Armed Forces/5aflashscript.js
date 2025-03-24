const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const flashcard = document.getElementById('flashcard');

// Flashcard data
const flashcards = [
  {
    question: "1. What are the established levels of responsibility for command, control, and communication throughout a chain of command called? (5.1)",
    answer: "Command authority. Note: Policies and directives are made by civilians assigned to the military and to the executive and legislative branches of the government."
  },
  {
    question: "2. What extends from the U.S. President, through the Secretary of Defense, through two distinct branches of command, and through each commander at every level in the branches of service? (5.1)",
    answer: "Responsibility and authority"
  },
  {
    question: "3. The various levels within the chain of command have different responsibilities and authority; however, each level in the chain is responsible for and accountable to whom? (5.1)",
    answer: "Responsible for all lower levels and accountable to all higher levels"
  },
  {
    question: "4. What document establishes the basic principle of civilian control of the U.S. Armed Forces? (5.1)",
    answer: "U.S. Constitution"
  },
  {
    question: "5. As Commander in Chief, the U.S. President has final command authority, however, as head of the executive branch, is the President subject to what? (5.1)",
    answer: "Checks and balances system of the legislative and judicial branches"
  },
  {
    question: "6. By statute, the chain of command runs from the U.S. President, through the Secretary of Defense, then to whom? (5.1)",
    answer: "Combatant Commanders"
  },
  {
    question: "7. For all forces not assigned to the Combatant Commanders, the chain of command runs from the U.S. President, through the Secretary of Defense, and then to whom? (5.1)",
    answer: "Secretaries of the military departments"
  },
  {
    question: "8. When forces are assigned to the Combatant Commanders, administrative control over those forces typically flows through whom? (5.1)",
    answer: "Their respective service branches"
  },
  {
    question: "9. A provision of what act permits the U.S. President to authorize communications through the Chairman of the Joint Chiefs of Staff, placing the Chariman in the communcations chain of command? (5.1)",
    answer: "The Public Law 99-433, Goldwater-Nichols Department of Defense Reorganization Act of 1986"
  },
  {
    question: "10. What is America's largest government agency? (5.2)",
    answer: "Department of Defense"
  },
  {
    question: "11. Whose mission is to provide military forces to deter war and protect the security of our country? (5.2)",
    answer: "Department of Defense"
  },
  {
    question: "12. Headquartered at the Pentagon, which offices are included in the Department of Defense? (5.2)",
    answer: "-Office of the Secretary of Defense \n-The Joint Chiefs of Staff \n-The Joint Staff \n-The Departments of the Army, Navy(including the Marine Corps), and Air Force(including the Space Force) \n-Unified combatant commands \n-Forces dedicated to combined commands, defense agencies, and field activities"
  },
  {
    question: "13. As the civilian head of the Department of Defense, to whom does the Secretary of Defense (SecDef) report directly? (5.2)",
    answer: "The U.S. President"
  },
  {
    question: "14. The U.S. President appoints the Secretary of Defense (SecDef) with the advice and consent of whom? (5.2)",
    answer: "The Senate"
  },
  {
    question: "15. Who serves as principal defense policy advisor to the U.S. President and is responsible for the formulation of general defense policy, policy related to all matters of direct and primary concern to the Department of Defense, and for the execution of approved policy? (5.2)",
    answer: "Secretary of Defense (SecDef)"
  },
  {
    question: "16. Who exercices operational chain of command between the U.S. President and the Combatant Commanders? (5.2)",
    answer: "Secretary of Defense (SecDef)"
  },
  {
    question: "17. Who, as a specific responsibility, provides written policy guidance for Department of Defense national security objectives and policies, military mission priorities, and projected levels for available resources? (5.2)",
    answer: "Secretary of Defense (SecDef)"
  },
  {
    question: "18. Who provides the Chairman of the Joint Chiefs of Staff with written policy guidance regarding contingency plans? (5.2)",
    answer: "Secretary of Defense (SecDef) \nNote: The Secretaries of the military departments and the Combatant Commanders are provided written guidelines to direct the effective detection and monitoring of all potential aerial and maritime threats to the national security of the United States."
  },
  {
    question: "19. Who assists in matters requiring a long-range view, formulates broad defense policy, and advises the Secretary of Defense on policies, as requested? (5.2)",
    answer: "The Armed Forces Policy Council"
  },
  {
    question: "20. Who are the members of the Armed Forces Policy Council? (5.2)",
    answer: "-Secretary of Defense serving as the Chairman of the Council \n-Deputy Secretary of Defense \n-Secretaries of the Army, Navy, and USAF \n-Chairman of the Joint Chiefs of Staff \n-Under Secretary of Defense for Acquisition and Sustainment \n-Under Secretary of Defense for Research and Engineering \n-Under Secretary of Defense for Policy \n-Under Secretary of Defense for Acquisition and Technology \n-Under Secretary of Defense for Research and Engineering \n-Under Secretary of Defense for Acquisition and Sustainment \n-Service Chiefs"
  },
  {
    question: "21. What are the six Under Secretaries of Defense who assist the Secretary of Defense? (5.2)",
    answer: "(1) Policy \n(2) Comptroller \n(3) Personnel and Readiness \n(4) Acquisition and Sustainment \n(5) Research and Engineering \n(6) Intelligence"
  },
  {
    question: "22. How many Under Secretaries of Defense assist the Secretary of Defense? (5.2)",
    answer: "6"
  },
  {
    question: "23. Who assists members of the Joint Chiefs of Staff in carrying out the assigned responsibilities of strategic direction, unified operation of CCMD, and integration of all branches of the military into an efficient force? (5.3)",
    answer: "The Joint Staff"
  },
  {
    question: "24. By law, the direction of the Joint Staff rests exclusively with whom? (5.3)",
    answer: "Chairman of the Joint Chiefs of Staff (CJCS) \nNote: The Joint Staff consists of more than 1,500 military and civilian personnel, composed of approximately equal numbers of officers from the Army, Navy, USAF, and USSF."
  },
  {
    question: "25. Through whom does the Chairman normally manage the Joint Staff? (5.3)",
    answer: "Director of the Joint Staff \nNote: The Director is selected by the Chairman after consulation with other members of the Joint Chiefs and with the approval of the Secretary of Defense."
  },
  {
    question: "26. What percentage of Joint Staff positions allocated to the Navy do the Marines account for? (5.3)",
    answer: "About 20 percent"
  },
  {
    question: "27. Who is appointed by the U.S. President, by and with advice and consent of the Senate, and holds the grade of General or Admiral? (5.3)",
    answer: "Chairman of the Joint Chiefs of Staff (CJCS) \nNote: The Chairman of the Joint Chiefs of Staff outranks all other officers of the U.S. Armed Forces but may not exercise military command over the Joint Chiefs of Staff or the U.S. Armed Forces."
  },
  {
    question: "28. Who is the principal military advisor to the U.S. President, the National Security Council, and the Secretary of Defense? (5.3)",
    answer: "Chairman of the Joint Chiefs of Staff (CJCS)"
  },
  {
    question: "29. To whom may the Secretary of Defense assign responsibility for overseeing the activities of the combatant commands(CCMDs)? (5.3)",
    answer: "Chairman of the Joint Chiefs of Staff (CJCS)"
  },
  {
    question: "30. Who presides over the Joint Chiefs of Staff and objectively provides recommendations and the views of the Joint Chiefs to the U.S. President, National Security Council, or the Secretary of Defense? (5.3)",
    answer: "Chairman of the Joint Chiefs of Staff (CJCS)"
  },
  {
    question: "31. Who is appointed by the U.S. President, by and with advice and consent of the Senate, and is a member of the Joint Chiefs of Staff? (5.3)",
    answer: "Vice Chairman of the Joint Chiefs of Staff (VCJCS)"
  },
  {
    question: "32. The Vice Chairman of the Joint Chiefs of Staff performs duties prescribed by the Chairman, with the approval of whom? (5.3)",
    answer: "Secretary of Defense (SecDef)"
  },
  {
    question: "33. Who cannot be from the same branch of service as the Chairman of the Joint Chiefs of Staff (CJCS), serves a tour of two years, and may be reappointed for two additional terms? (5.3)",
    answer: "Vice Chairman of the Joint Chiefs of Staff \nNote: When required, the Vice Chairman of the Joint Chiefs of Staff assumes the role of Acting Chairman in the Chairman's absence."
  },
  {
    question: "34. How long is the tour of the Vice Chairman of the Joint Chiefs of Staff (VCJCS)? (5.3)",
    answer: "Two years and may be reappointed for two additional terms"
  },
  {
    question: "35. Who is designated as the highest senior enlisted position in the U.S. Armed Forces? (5.3)",
    answer: "Senior Enlisted Advisor to the Chairman"
  },
  {
    question: "36. Who is appointed to serve as an advisor to the Chairman and the Secretary of Defense on all matters involving Total Force integration, utilization, health of the force, and joint development for enlisted personnel? (5.3)",
    answer: "Senior Enlisted Advisor to the Chairman"
  },
  {
    question: "37. Who serves as advisors to the President, Secretary of Defense, and the National Security Council? They are subject to the authority, direction, and control of the U.S. President and the Secretary of Defense. (5.3)",
    answer: "Members of the Joint Chiefs of Staff"
  },
  {
    question: "38. Who provides the strategic direction of the U.S. Armed Forces, reviews major materiel and personnel requirements according to strategic and logistic requirements, and establishes joint doctrine. (5.3)",
    answer: "The Joint Chiefs"
  },
  {
    question: "39. Who is responsible for the assignment of logistic responsibilities to the military services, formulation of policies for joint training, and coordination of military education? (5.3)",
    answer: "Joint Chiefs of Staff"
  },
  {
    question: "40. Who comprises the Joint Chiefs of Staff? (5.3)",
    answer: "-Chairman \n-Vice Chairman \n-Chief of Staff of the U.S. Army \n-Chief of Naval Operations \n-Chief of Staff of the USAF \n-Chief of Space Operations \n-Commandant of the Marine Corps \n-Chief of the National Guard Bureau"
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
