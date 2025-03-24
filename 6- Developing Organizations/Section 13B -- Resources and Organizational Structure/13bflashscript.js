const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const flashcard = document.getElementById('flashcard');

// Flashcard data
const flashcards = [
  {
    question: "1. For organizational change to be effective, planning and execution generally must include redesign or coordination on which five inerrelated fronts? (13.6)",
    answer: "(1) Organization and People; \n(2) Technology; \n(3) Policies, Legislation, and Regulations; \n(4) Physical Infrastructure, and \n(5) Process."
  },
  {
    question: "2. What does the acronym, DOTMLPF, stand for? (13.7)",
    answer: "Doctrine, organization, training, material, leadership and education, personnel, and facilities"
  },
  {
    question: "3. Which acronym describes a thought process that considers a broad spectrum of elements or requirements to generate informed, conclusive solutions to problems, future requirements, strategic direction, and performance improvement? (13.7)",
    answer: "DOTMLPF \nNote: Here is an example of how DOTMLPF would be interpreted in the military context: \nDoctrine: The way we fight (emphasizing maneuver warfare, combined air-ground campaigns). \nOrganization: How we organize the fight (divisions, air wings, task forces). \nTraining: How we prepare to fight tactically (basic military training, advanced individual training, unit training, joint exercises). \nMateriel: All the \'stuff\' necessary to equip the forces (weapons, spares) so we can operate effectively. \nLeadership and Education: How we prepare leaders to lead the fight from squad leaders to four stars (professional development) \nPersonnel: Availability of qualified people for peacetime, wartime, and various contingency operations. \nFacilities: Real property, installations, and industrial facilities (government owned ammunition production facilities) that support the forces."
  },
  {
    question: "4. Why are combatant commanders able to consider gaps in the context of strategic direction for the U.S. Armed Forces and influence the direction of requirements earlier in the acquisition process ? (13.7)",
    answer: "Because combatant commanders define requirements in consultation with the Office of the Secretary of Defense"
  },
  {
    question: "5. What should organizational design be based on? (13.8)",
    answer: "The organization's overall mission and strategy, taking into consideration the environment, size and pace of technology."
  },
  {
    question: "6. What is important to balance when determining how an organization should be structured? (13.8)",
    answer: "The need for precision (need to maintain order, decrease ambiguity, and ensure direction is followed) with the need for flexibility (potential need to adapt quickly and encourage innovation)"
  },
  {
    question: "7. Which organizational structure is vertically arranged; \ncommunication and decision-making begin at the top and then filter downward; \nvery little involvement of low-level members in decision-making; \nemployees work in teams based on task specialty, and there is a heavy reliance on rules? (13.8)",
    answer: "Mechanistic (Bureaucratic) Structure"
  },
  {
    question: "8. Which organizational structure lends itself well to an organization where strategy or goals are geared toward efficiency and tasks needing to be accomplished quickly and accurately? (13.8)",
    answer: "Mechanistic (Bureaucratic) Structure"
  },
  {
    question: "9. A stable environment that requires little flexibility is often conducive to which organizational structure? (13.8)",
    answer: "Mechanistic (Bureaucratic) Structure"
  },
  {
    question: "10. Which organizational structure supports horizontal and vertical communication, allowing communication to occur up and down as well as across departments and among co-workers without bureaucratic lines? It allows more involvement in decision-making and contribution into how things are done and is more adaptable to changes. (13.8)",
    answer: "Organic Structure"
  },
  {
    question: "11. Which organizational structure's strategy is often geared toward innovativeness and creativity? Its environment is unstable, with change being the norm rather than the exception. (13.8)",
    answer: "Organic Structure"
  },
  {
    question: "12. Which organizational structure may slow down the implementation process, lead to low efficiency, and reduce standards? (13.8)",
    answer: "Organic Structure"
  },
  {
    question: "13. Which organizational structure design is used when an organization needs a rigid structure in some areas and flexibility in others? (13.8)",
    answer: "Diverse Structure \nNote: For example, administrative sessions often have specific rules to follow when processing performance reports, decorations, and orders. For this purpose, a mechanistic system would be appropriate. In the same organization, a training section may be hindered by a rigid mechanistic system; therefore, ann organic system would be more effective to allow for more frequent innovation in how training is delivered."
  },
  {
    question: "14. Which organizational structure design is usually best for addressing a temporary need within an organization; therefore, it is short-lived, and the overall organizational structure remains intact? (13.8)",
    answer: "Matrix structure \nNote: Matrix structure design is basically an organizational design or team within a mechanistic organic, or diverse organization."
  },
  {
    question: "15. Which organizational structural design brings workers from different sections or organizations together to serve a particular function? Its strength lies in the pooling of expertise and resources; the weakness lies in the confusion of who is in charge. (13.8)",
    answer: "Matrix Structure"
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
