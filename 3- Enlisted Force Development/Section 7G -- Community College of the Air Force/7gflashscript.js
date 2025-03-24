const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const flashcard = document.getElementById('flashcard');

// Flashcard data
const flashcards = [
  {
    question: "1. Which program was activated in 1972 to gain academic recognition for formal technical training conducted by USAF schools? (7.24)",
    answer: "Community College of the Air Force \nNote: It is the only community college system within the Department of Defense and two-year institution exclusively serving enlisted personnel."
  },
  {
    question: "2. Who became CCAF's degree-granting authority when President George W. Bush signed the Public Law 108-375, Fiscal Year 2005 National Defense Authorization Act? (7.24)",
    answer: "Commander of Air University \nNote: The CCAF administrative center is located at Maxwell Air Force Base-Gunter Annex, Alabama"
  },
  {
    question: "3. Whose mission is to provide enlisted professionals pathways to degrees and credentials through military education, training, and experience? (7.24)",
    answer: "Community College of the Air Force \nNote: CCAF awards the associate of applied science degree to total force enlisted Airmen. It offers associate of applied science degree programs in four broad career groups: \n(1) operations, \n(2) logistics, \n(3) medical, and \n(4) support."
  },
  {
    question: "4. Under whose authority is the associate degree from CCAF awarded? (7.24)",
    answer: "Air University \nNote: CCAF is a part of Air University which is accredited by the Southern Association of Colleges and Schools Commission on Colleges to award the associate, master's, and doctoral degrees."
  },
  {
    question: "5. Which degree does the CCAF offer and award through a combination of collegiate credit earned through completed formal technical training courses delivered at CCAF affiliated schools and genearl education courses completed at accredited civilian colleges or credit by examination? (7.24)",
    answer: "Associate of applied science degree \nNote: Associate degrees earned in professional, technical, or terminal programs are frequently called associate of applied science degrees."
  },
  {
    question: "6. True or False: The CCAF awards collegiate academic credit for degree-applicable courses delivered at affiliated military schools? (7.24)",
    answer: "True \nNote: Students may also earn CCAF collegiate credit for specific national professional credentials (licensure or certification) that are approved by the College to satisfy applicable degree program technical education and program elective requirements."
  },
  {
    question: "7. Which program links CCAF associate of applied science degree programs to accredited four-year colleges and universities that provide online bachelor degree opportunities to CCAF graduates? (7.24)",
    answer: "Air University Associate-to-Baccalaureate Cooperative (AU-ABC) Program"
  },
  {
    question: "8. What links CCAF students to accredited colleges and universities offering online freshman-and-sohpomore-level courses to satisfy CCAF general education requirements? (7.24)",
    answer: "General Education Mobile (GEM)"
  },
  {
    question: "9. Which program does CCAF offer to qualified curriculum writers and managers formally assigned to CCAF affiliated schools to develop and manage CCAF degree-applicable courses? (7.24)",
    answer: "Instructional Systems Development Certificate Program \nNote: This certificate program provides a professional credential that validates thee education and training required to develop and manage CCAF collegiate-level courses and the practical experience gained in planning, developing, implementing, and managing instructional systems."
  },
  {
    question: "10. Which program does CCAF offer to qualified instructors assigned to affiliated schools to teach CCAF degree-applicable courses? (7.24)",
    answer: "CCAF Instructor Certificate Program \nNote: This certificate program provides a professional credential that validates the instructor's extensive faculty development training, education, qualification, and practical teaching experience required to teach a CCAF collegiate-level course."
  },
  {
    question: "11. Which program provides funding for USAF DAF specialty-applicable credentials to enlisted Airmen members on Title 10 or Title 32 (502)fRegAF orders? (7.24)",
    answer: "Air Force Credentialing Opportunities On-Line (AF COOL) Program \nNote: The program funds a maximum of $4,500 during the Airman's career, which pays for the exams, preparation courses, books, study materials, administrative fees, and recertification fees necessary to maintain the credential."
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
