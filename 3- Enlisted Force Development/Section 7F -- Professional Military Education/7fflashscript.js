const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const flashcard = document.getElementById('flashcard');

// Flashcard data
const flashcards = [
  {
    question: "1. What complements training, experience, and other educational programs to provide enlisted leaders a continuum of learning via progressive courses concentrated on developing leadership, airmanship, and military professionalism? (7.20)",
    answer: "Professional Military Education (PME)"
  },
  {
    question: "2. In 1955, what was established across the Air Force to provide non-commissioned officers leadership and management training required to assume day-to-day mission execution responsibilities? (7.21)",
    answer: "Enlisted PME schools"
  },
  {
    question: "3. Operational control of stateside enlisted PME schools lies with Air Education and Training Command at the Thomas N. Barnes Center for Enlisted Education. Where is this center located? (7.21)",
    answer: "Maxwell Air Force Base-Gunter Annex, Alabama \nNote: The Barnes Center, Academic Affairs is responsible for developing and providing enlisted PME program development, faculty development, and operational program management"
  },
  {
    question: "4. Which PME course does NOT award Airmen collegiate academic credit for completing enlsited PME courses through the Community College of the Air Force? (7.21)",
    answer: "Chief Leadership Course"
  },
  {
    question: "5. Which course provides PME to prepare Senior Airmen to supervise and foster a commitment to the military profession; however, it is not available for Regular Air Force Personnel? (7.21)",
    answer: "Airman Leadership School Distance Learning (ALS-DL) Course \nNote: The ALS-DL course is open to Air National Guard and Air Force Reserve Senior Airmen and Staff Sergeants."
  },
  {
    question: "6. Airmen Leadership School Blended Learning Course (ALS-BLC) combines distance learning principles with traditional classroom learning by dividing it into two phases. What are these phases? (7.21)",
    answer: "-Phase 1 is eight weeks long and delivered by utilizing an online learning management system. \n-Phase 2 is two weeks long and coducted at the Paul H. Lankford PME Center located on McGhee Tyson Air National Guard Base, Tennessee."
  },
  {
    question: "7. The Airman Leadership School Blended Learning Course (ALS-BLC) curriculum is designed to develop a mindset and associated skills with respect to four core attributes. What are they? (7.21)",
    answer: "(1) Professional Airmen, \n(2) Expeditionary Airmen, \n(3) Supervisor of Airmen, and \n(4) supervisory communicator"
  },
  {
    question: "8. Which is the first level of enlisted PME that Airmen complete as they progress through their Air Force careers? (7.21)",
    answer: "Airman Leadership School (ALS)"
  },
  {
    question: "9. What are the Airman Leadership School (ALS) four curriculum areas? (7.21)",
    answer: "(1) Mission, \n(2) Leadership, \n(3) Problem Solving, and \n(4) Air Force Culture"
  },
  {
    question: "10. What provides PME for basic NCO institutional competency development required to prepare each enlisted leader to be professional, warfighting Airmen who can lead and manage Air Force units in the employment of air and space power? (7.21)",
    answer: "Noncommissioned Officer Distance Learning (NCO-DL) Course \nNote: The NCO-DL course is open to Air Reserve Component Airmen"
  },
  {
    question: "11. The Noncommissioned Officer Distance Learning (NCO-DL) course consists of which three course modules? (7.21)",
    answer: "(1) Course foundation, \n(2) leadership and management, and \n(3) operational Airman."
  },
  {
    question: "12. Whose mission is to prepare enlisted leaders for current and future leadership and management opportunities to operate (think and act) critically in complex and ambiguous environments? (7.21)",
    answer: "NCO Academy (NCOA)"
  },
  {
    question: "13. Which PME program encompasses the intermediate leadership experience? (7.21)",
    answer: "NCO Academy (NCOA) program"
  },
  {
    question: "14. Which PME course provides institutional competency development required to prepare SNCOs to lead the enlisted force at the tactical and operational levels? (7.21)",
    answer: "Senior Noncommissioned Officer Distance Learning (SNCO-DL) Course \nNote: Senior Noncommissioned Officer Distance Learning (SNCO-DL) Course is open to Air Reserve Component Airmen."
  },
  {
    question: "15. Which PME course curriculum's design heightens students' appreciation and understanding of three attributes: (1) self-awareness, \n(2) leadership and management, and \n(3) joint warfighter? (7.21)",
    answer: "Senior Noncommissioned Officer Distance Learning (SNCO-DL) Course"
  },
  {
    question: "16. Which PME's mission is to develop joint and coalition senior enlisted leaders to influence mission success in dynamic service environments? (7.21)",
    answer: "Senior Noncommissioned Officer Academy (SNCOA) \nNote: The SNCO Academy (SNCOA) trains up to 2,250 Air Force, Navy, Coast Guard, Marine, and international SNCOs, annually"
  },
  {
    question: "17. Which PME program encompasses the advanced leadership experience, representing comprehensive institutional competency development? (7.21)",
    answer: "Senior Noncommissioned Officer Academy (SNCOA)"
  },
  {
    question: "18. Which PME course is designed to sharpen senior enlisted leader skills with education that helps prepare them for continued and increased relevant responsibilities in joint, combined, interagency, and strategic environments? (7.21)",
    answer: "Senior Noncommissioned Officer Academy (SNCOA)"
  },
  {
    question: "19. The Chief Leadership Course (CLC) is the capstone and pinnacle level of enlisted PME. What is its mission? (7.21)",
    answer: "To provide chiefs the education to bridge operational-to-strategic perspectives of the Air Force"
  },
  {
    question: "20. Which policy requires all enlisted personnel operating in joint, interagency, multinational, and coalition warfighting organizations to learn joint concepts? (7.22)",
    answer: "CJCSI 1805.01B, Enlisted Professional Military Education Policy"
  },
  {
    question: "21. What provides SNCOs a comprehensive joint education to prepare them for assignments to joint billets at the senior enlisted leader or command senior enlisted leader level? (7.22)",
    answer: "Senior Enlisted Joint Professional Military Education (SEJPME)"
  },
  {
    question: "22. Which course is web-based and designed to expose enlisted personnel to joint education, preparing them to succeed by improving their ability to operate effectively and supervise multiple service members? (7.22)",
    answer: "Senior Enlisted Joint Professional Military Education (SEJPME) \nNote: SEJPME courses are offered online and are accessible from anywhere at any time"
  },
  {
    question: "23. What are the two courses of instruction that make up Senior Enlisted Joint Professional Military Education (SEJPME)? (7.22)",
    answer: "SEJPME 1 emphasizes curriculum commensurate with E-5/E-7 joint assignment responsibilities. SEJPME 2 is focused on preparing E-7/E-9 enlisted members for their senior leadership roles in joint assignments. \nNote: SEJPME 1 and 2 have learning areas and objectives in: \n(1) national strategic overview; \n(2) joint interagency, intergovernmental, and multinational capabilities; \n(3) foundations of joint operations; and \n(4) Joint Force leadership."
  },
  {
    question: "24. What, under the Department of Defense guidance, leads national security  objective efforts to train, educate, advise, and equip foreign partners? (7.23)",
    answer: "Security cooperation"
  },
  {
    question: "25. What does the Department of Defense policy state that, as an important tool of national security and foreign policy, shall be planned, programmed, budgeted, and executed with the same high degree of attention and efficiency as other integral Department of Defense activities? (7.23)",
    answer: "Security cooperation"
  },
  {
    question: "26. Which training program has provided significant contributions to promote regional stability, encourage the growth of democracy, prevent low intensity conflicts, and counter foreign intervention in Central America. (7.23)",
    answer: "Inter-American Air Forces Academy (IAAFA) \nNote: Inter-American Air Forces Academy (IAAFA) is an element of the U.S. Security Assistance Program, and more specifically the International Military Education and Training Program."
  },
  {
    question: "27. What has served as a military training center for Latin American air forces by training military forces, national police services, and civilian personnel from over 25 nations in areas ranging from PME for officers and enlisted personnel, security forces training, principles of logistics, aircraft maintenance, and pilot aviation training? (7.23)",
    answer: "Inter-American Air Forces Academy (IAAFA)"
  },
  {
    question: "28. Whose mission is it to provide military education and training to military personnel of the Americas (Central, South America, and Caribbean nations) and other eligible partner nations? It offers the three enlisted tiers of professional military education (ALS, NCO Academy, and the SNCO Academy) (7.23)",
    answer: "Inter-American Air Forces Academy (IAAFA) \nNote: IAAFA graduates an average of 900 students annually, it has graduated over 35,000 students in its 75-year history."
  },
  {
    question: "29. Whose purpose is to provide military education and training to military personnel of countries that are members of the North Atlantic Treaty Organization (NATO) or signatories to the Partnership for Peace (PfP) Framework Documents? (7.23)",
    answer: "Inter-European Air Forces Academy (IEAFA)"
  },
  {
    question: "30. Whose mission is to enable combined, joint air operations by strengthening NATO and Pfp Air Force capabilities and interoperability through targeted military education and training? (7.23)",
    answer: "Inter-European Air Forces Academy (IEAFA) \nNote: The Inter-European Air Forces Academy (IEAFA) was passed into U.S. law in the Carl Levin and Howard P. \"Buck\" McKeon National Defense Authorization Act for Fiscal Year 2015, Section 1268."
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
