const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const flashcard = document.getElementById('flashcard');

// Flashcard data
const flashcards = [
  {
    question: "1. Who is assigned to a joint force commander who typically delegates operational authority (also called operational control or OPCON) of the Air Force, and under the administrative chain of command, administrative (also called administrative control or ADCON) of the Secretary of the Air Force? (5.9)",
    answer: "COMAFFOR"
  },
  {
    question: "2. To what must combined missions and responsibilities (including command responsibilities) establish, assign, and conform? (5.6)",
    answer: "Relevant multinational agreements"
  },
  {
    question: "3. Normally, under what terms does a combined command operate? (5.6)",
    answer: "Terms of a treaty, alliance, or bilateral agreement between or among the nations concerned."
  },
  {
    question: "4. What type of commands are North American Aerospace Defense Command, Combined Forces Command Korea, and Allied Command Operations? (5.6)",
    answer: "Combined commands"
  },
  {
    question: "5. Who establishes unified CCMDs for the performance of military missions? (5.7)",
    answer: "The U.S. President, assisted by the Chairman of the Joint Chiefs of Staff through the secretary of Defense"
  },
  {
    question: "6. Which commands have a broad, continuing mission composed of forces from two or more military departments? (5.7)",
    answer: "Unified combatant commands"
  },
  {
    question: "7. By whose authority can a force be transferred once assigned or attached to a unified combatant command? (5.7)",
    answer: "Secretary of Defense or under special procedures with approval of the U.S. President"
  },
  {
    question: "8. What is a classified executive branch document prepared by the Chairman of the Joint Chiefs of Staff that assigns missions; planning, training, and operational responsibilities; and geographic areas of responsibilities to CCMDs? (5.7)",
    answer: "Unified Command Plan"
  },
  {
    question: "9. The Unified Command Plan has a significant impact on how CCMDs are organized, trained, and resourced, areas over which Congress has constitutional authority. How often is this plan reviewed and updated? (5.7)",
    answer: "Every two years"
  },
  {
    question: "10. Currently, how many CCMDs are there? (5.8)",
    answer: "11"
  },
  {
    question: "11. How are CCMDs established? (5.8)",
    answer: "By missions and responsibilities based on either a geographic area of responsibility (AOR) or function \nNote: Six geographical and five functional"
  },
  {
    question: "12. Which commands with an AOR operate in clearly delineated physical and geographic boundaries established by the UCP and have a distinctive regional military focus? (5.8)",
    answer: "Combatant commands"
  },
  {
    question: "13. U.S. African Command, U.S. Central Command, U.S. European Command, U.S. Northern Command, U.S. Indo-Pacific Command, and U.S. Southern Command are examples of which CCMDs with an AOR? (5.8)",
    answer: "Unified CCMDs"
  },
  {
    question: "14. Which combatant commands operate globally across geographic boundaries and provide unique capabilities to other CCDRs and the Services? (5.8)",
    answer: "Functional combatant commands \nNote: CCMDs based solely on military functions without respect to a specific geographic region are called functional commands"
  },
  {
    question: "15. U.S. Special Operations Command, U.S. Strategic Command, U.S. Cyber Command, and U.S. Transportation Command are examples of which CCMDs? (5.8)",
    answer: "Functional"
  },
  {
    question: "16. Which unified combatant command headquarters is located at Kelley Barracks, Stuttgart, Germany? It is responsible for military relations with African nations, the African Union, and African regional security organizations. (5.8)",
    answer: "United States Africa Command (USAFRICOM)"
  },
  {
    question: "17. Which unified combatant command headquarters is located at MacDill Air Force Base, Florida? It is responsible for operations in 20 countries that fall in the \"central\" area of the globe to include countries in the Middle East, parts of Northern Africa, and Central Asia. (5.8)",
    answer: "United States Central Command (USCENTCOM)"
  },
  {
    question: "18. Which unified combatant command headquarters is located at Patch Barracks, Stuttgart, Germany? It works closely with countries in the North Atlantic Treaty Organization and other partner nations to address the security, and defense needs of nations in Europe, parts of the Middle East, and Eurasia. (5.8)",
    answer: "United States European Command (USEUCOM)"
  },
  {
    question: "19. Which unified combatant command headquarters is located at Peterson Air Force Base, Colorado? It operates in the area of responsibility encompassing the Continental United States, Alaska, Mexico, Canada, portions of the Caribbean, and surrounding waters. (5.8)",
    answer: "United States Northern Command (USNORTHCOM)"
  },
  {
    question: "20. Which unified combatant command is primarily responsible for civil support and homeland security? (5.8)",
    answer: "United States Northern Command (USNORTHCOM)"
  },
  {
    question: "21. Which unified combatant command headquarters is located at Camp H.M. Smith, Hawaii? It oversees an area of responsibility stretching from the western shores of the United States to the western border of India, and from Antarctica to the Aleutian Islands, encompassing 36 diverse nations. (5.8)",
    answer: "United States Indo-Pacific Command (USINDOPACOM)"
  },
  {
    question: "22. Which unified combatant command headquarters is located at Miami, Florida? It oversees an area of responsibility encompassing 31 nations in Latin America south of Mexico, Central and South America, and the Caribbean Sea. (5.8)",
    answer: "United States Southern Command (USSOUTHCOM)"
  },
  {
    question: "23. Which unified combatant headquarters is located at MacDill Air Force Base, Florida? It is responsible for planning and conducting special operations. (5.8)",
    answer: "United States Special Operations Command (USSOCOM)"
  },
  {
    question: "24. Which unified combatant headquarters is located at Offutt Air Force Base, Nebraska? It conducts global operations in partnership with other combatant commands, services, and U.S. Government agencies, to deter and detect strategic attacks against the United States. It is responsible for command of nuclear capabilities, global strike, joint electromagnetic spectrum operations, and missile threat assessment. (5.8)",
    answer: "United States Strategic Command (USSTRATCOM)"
  },
  {
    question: "25. Which unified combatant headquarters is located at Fort Meade, Maryland? It is responsible for achieving and maintaining cyberspace superiority in alignment with the National Security Strategy and National Defense Strategy as a critical component of advancing national interests. (5.8)",
    answer: "United States Cyber Command (USCYBERCOM)"
  },
  {
    question: "26. Which unified combatant headquarters is located at Scott Air Force Base, Illinois? It conducts globally integrated mobility operations, leads the broader Joint Deployment and Distribution Enterprise, and provides enabling capabilities in order to project and sustain the Joint Force in support of national objectives. (5.8)",
    answer: "United States Transportation Command (USTRANSCOM)"
  },
  {
    question: "27. Which combatant command headquarters is located at Peterson Air Force Base, Colorado? It conducts operations in, from and to space to deter conflict, and, if necessary, defeat aggression, deliver space combat power for the Joint/Combined Force and defend U.S. vital interests with allies and partners. (5.8)",
    answer: "United States Space Command"
  },
  {
    question: "28. Who, in accordance with direction of the Secretary of the Defense, selects and assigns Air Force forces to Air Force Service Component Commands, commanded by a Commander, Air Force Forces (COMAFFOR)? (5.9)",
    answer: "Secretary of the Air Force"
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
