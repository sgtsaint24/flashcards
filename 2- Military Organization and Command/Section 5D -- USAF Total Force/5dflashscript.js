const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const flashcard = document.getElementById('flashcard');

// Flashcard data
const flashcards = [
  {
    question: "1. What three components comprise the USAF Total Force-one team USAF? (5.10)",
    answer: "RegAF, USAF Reserve, and Air National Guard \nNote: Airpower cannot be applied efficiently and effectively without the contributions of each component working together."
  },
  {
    question: "2. Who provides invaluable experience, continuity, and leadership in all mission sets and contributes a viewpoint that expands the USAF perspective and enhances its capability to solve problems, adapt to new challenges, and achieve mission success? (5.10)",
    answer: "Civilian employees"
  },
  {
    question: "3. What caused the Air National Guard and USAF Reserve over the past few decades to transform from a traditionally Strategic Reserve Force into a force that provides operational capability, strategic depth, and surge capacity? (5.10)",
    answer: "Elevated requirements and the demands of recurring deployments"
  },
  {
    question: "4. Under which association is the Regular Component the host unit, retaining weapon system responsibility while sharing the mission with a Reserve or Guard tenant unit? (5.10)",
    answer: "Classic association \nNote: Organizations designed under Total Force integration share equipment, facilities, and resources."
  },
  {
    question: "5. Under which association is the Reserve or Guard unit the host, with a Regular Component tenant? Integrating with the Regular Component in this way yields numerous synergistic benefits to the USAF's strength, including an improved ability to respond with surge capacity at a moment's notice. (5.10)",
    answer: "Active association \nNote: Organizations designed under Total Force integration share equipment, facilities, and resources"
  },
  {
    question: "6. Which forces form a significant part of our aerospace capability as the Air Reserve component? (5.11)",
    answer: "Air National Guard and USAF Reserve \nNote: Forces are drawn from the Air Reserve Component when circumstances require the RegAF to rapidly deploy."
  },
  {
    question: "7. How are Air Reserve Components staffed and trained to meet the same training standards and readiness levels as RegAF Component Forces? They are supplied with the same equipment as well. (5.11)",
    answer: "On an equal priority"
  },
  {
    question: "8. Whose written approval is needed for the RegAF to withdraw, divert, or reassign equipment for other commitments? (5.11)",
    answer: "Secretary of Defense"
  },
  {
    question: "9. Sometimes Air Reserve Component units are separated to take advantage of state or regional demographics and not centralized at major, multi-squadron bases, as is the case with RegAF resources. Why is this exception beneficial? (5.11)",
    answer: "Because it implements a strong relationship with the civilian community and builds public support for the USAF"
  },
  {
    question: "10. How is the command of non-mobilized USAF Reserve unit exercised? (5.11)",
    answer: "Through the Commander, USAF Reserve Command, who, in turn, is responsible to the Chief of Staff of the Air Force"
  },
  {
    question: "11. How is the command of non-mobilized USAF Reserve Individual Mobilization Augmentees (IMAs) exercised? (5.11)",
    answer: "Concurrently through USAF Reserve Command and the unit of attachment"
  },
  {
    question: "12. When would the Secretary of the Air Force be authorized to call Air National Guard and USAF Reserve Forces to RegAF status? (5.11)",
    answer: "Whenever the U.S. President authorizes mobilization, the Secretary of Defense can delegate call-up authority to the service Secretaries"
  },
  {
    question: "13. When activated, to whom is the operational command of Air Reserve Components transferred? This person is also responsible for establishing training resources for all assigned or attached Air Reserve Components. (5.11)",
    answer: "The gaining commander \nNote: The seven Reserve Components of the U.S. Armed Forces are: the Army National Guard, Army Reserve, Navy Reserve, Marine Corps Reserve, Air National Guard, USAF Reserve, and Coast Guard Reserve"
  },
  {
    question: "14. Which branch department has joint activity with the National Guard Bureau? (5.11)",
    answer: "Department of Defense"
  },
  {
    question: "15. Who are the primary sources of full-time support for Air National Guard units? These personnel perform day-to-day organization, administration, recruitment, instruction, training, and maintenance support for the unit. (5.11)",
    answer: "Dual-status military technicians"
  },
  {
    question: "16. By law, who are dual-status military technicians? (5.11)",
    answer: "Civil service employees of the federal government who must be military members of the unit that employs them \nNote: Technicians train with the unit and are mobilized with the unit when federalized."
  },
  {
    question: "17. What does the Air National Guard's dual federal and state mission, a provision of the U.S. Constitution, mean? (5.11)",
    answer: "Each Guardsman holds membership in the National Guard of his or her state and the U.S. National Guard"
  },
  {
    question: "18. Whose federal mission is to maintain well-trained, well-equipped units available for prompt mobilization during war and provide assistance during national emergencies, such as natural disasters or civil disturbances? (5.11)",
    answer: "Air National Guard"
  },
  {
    question: "19. When not mobilized or under federal control, which units' command jurisdiction is vested in the governor of the state, commonwealth, or possesion? (5.11)",
    answer: "Air National Guard"
  },
  {
    question: "20. As the Governor of the District of Columbia, who has command jurisdiction over Air National Guard units? (5.11)",
    answer: "U.S. President \nNote: The U.S. President delegates this authority to the Secretary of the Army as Governor of the District of Columbia. \nNote: Each of the 54 National Guard organizations is supervised by the adjutant general of the state or territory."
  },
  {
    question: "21. Under state law, who protects life and property and preserves peace, order, and public safety? (5.11)",
    answer: "Air National Guard"
  },
  {
    question: "22. Who serves as the principal advisor on reserve matters to the Secretary of the Air Force and Chief of Staff of the Air Force? (5.11)",
    answer: "Chief of USAF Reserve, HAF, Pentagon"
  },
  {
    question: "23. Which force consists of officers, enlisted, and civil servants who are tasked, by law, to fill the needs of the U.S. Armed Forces whenever more units and people are required than are available within the RegAF? (5.11)",
    answer: "USAF Reserve"
  },
  {
    question: "24. Which force is a combat-ready force, stationed at over 66 locations throughout the United States, and serving globally for every CCMD in air, space, and cyberspace? (5.11)",
    answer: "USAF Reserve \nNote: Today and in recent years, Reservists have supported every USAF core function and every combatant commander around the world."
  },
  {
    question: "25. Which corporation is designated the volunteer civilian auxiliary of the USAF when its services are utilized by any department or agency of the Federal government? (5.12)",
    answer: "Civil Air Patrol \nNote: The Civil Air Patrol (CAP) is a congressionally chartered, non-profit corporation. (5.12)"
  },
  {
    question: "26. Whose services can the Secretary of the Air Force employ in lieu of, or to supplement, USAF resources to fulfill the non-combat programs and missions of the USAF? (5.12)",
    answer: "Civil Air Patrol \nNote: CAP has over 55,000 senior members and cadet volunteers, maintains a fleet of over 550 aircraft and over 1000 vehicles, manages multiple nationwide communications capabilities, and maintains a state-of-the-art cell phone forensics cell."
  },
  {
    question: "27. Who, as a Total Force partner, when approved and assigned by the USAF, conducts missions as Airmen of the USAF Auxiliary, aligned under Air Combat Command for fiscal and operational oversight and utilization? (5.12)",
    answer: "Civil Air Patrol \nNote: The four civilian auxiliaries of the U.S. Armed Forces are the Civil Air Patrol, Coast Guard Auxiliary, Merchant Marine, and Military Auxiliary Radio System"
  },
  {
    question: "28. Who manages the following three primary programs: \n(1) Emergency services and civil support, \n(2) Aerospace education, and \n(3) Cadet programs? (5.12)",
    answer: "Civil Air Patrol"
  },
  {
    question: "29. What is the Air Force Junior Reserve Officer Training Corps (AFJROTC) mission? (5.13)",
    answer: "To develop citizens of character dedicated to serving the nation and community"
  },
  {
    question: "30. Which program is a mandated citizenship training program open to 9th-12th grade students that provides leadership training and an aerospace science program for high school students to explore the historical and scientific aspects of aerospace technology and teaches self-reliance, self-discipline, and other characteristics found in good leaders? (5.13)",
    answer: "Air Force Junior Reserve Officer Training Corps (AFJROTC) program \nNote: The AFJROTC program is not a recruiting or accession tool for the military services as students who participate in the program incur no military service obligation."
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
