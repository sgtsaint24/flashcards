const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const flashcard = document.getElementById('flashcard');

// Flashcard data
const flashcards = [
  {
    question: "1. At the heart and soul of our profession, what does the USAF recognize as universal, consistent standards used to evaluate the ethical climate of all USAF organizations? (1.3)",
    answer: "Core values"
  },
  {
    question: "2. When needed in the cauldron of war, what are the beacons that light the path of professional conduct and the highest ideals? (1.3)",
    answer: "Core values"
  },
  {
    question: "3. What represents enduring, guiding principals for which we stand? (1.3)",
    answer: "Values"
  },
  {
    question: "4. What should motivate attitudes and actions on and off duty as essential moral principles or beliefs that are held in the highest regard? (1.3)",
    answer: "Values"
  },
  {
    question: "5. True or False? Our core values represent the USAF's firm convictions about the nature of our personal character, our commitment to each other and our nation, and the manner in which we perform our service. (1.3)",
    answer: "True"
  },
  {
    question: "6. What are so fundamental that they define our very identity through a common bond among all professional Airmen-past and present? (1.3)",
    answer: "Core values"
  },
  {
    question: "7. What provides the bedrock for our military endeavors and is fortified by service to country? (1.3.1)",
    answer: "Integrity"
  },
  {
    question: "8. What is simply doing the right thing, all the time, whether everyone is watching or no one is watching? (1.3.1)",
    answer: "Integrity"
  },
  {
    question: "9. When does an individual realize integrity? (1.3.1)",
    answer: "When thoughts and actions align with what he or she knows to be right"
  },
  {
    question: "10. What actions help to maintain integrity and avoid conflicts of interest? (1.3.1)",
    answer: "(a) Following principles \n(b) Acting with honor \n(c) Maintaining independent judgement \n(d) Performing duties with impartiality"
  },
  {
    question: "11. How are each of the USAF core values further defined that Airmen must practice and demonstrate in their daily lives, showing they truly do value integrity, service, and excellence? (1.3.1)",
    answer: "Virtues (desired behaviors and characteristics) \nNote: Consistently practicing these virtues results in habits of honorable thought and action, producing an Air Force professional"
  },
  {
    question: "12. What are the virtues of Integrity First? (1.3.1)",
    answer: "Honesty, courage, and accountability"
  },
  {
    question: "13. What is the hallmark of integrity? (1.3.1)",
    answer: "Honesty"
  },
  {
    question: "14. What means our words must be unquestionable so we preserve the trust and respect that we hold so dear for one another and the population we serve? (1.3.1)",
    answer: "Honesty"
  },
  {
    question: "15. True or False? Courage is not the absence of fear but doing the right thing despite fear. (1.3.1)",
    answer: "True"
  },
  {
    question: "16. What actions does courage empower Airmen to take? Having the courage to take these actions is crucial for the mission, the USAF, and the Nation. (1.3.1)",
    answer: "(a) Take necessary personal or professional risks \n(b) Make decisions that may be unpopular \n(c) Admit to their mistakes"
  },
  {
    question: "17. What instills our responsibility while maintaining transparency and ownership for our actions? (1.3.1)",
    answer: "Accountability"
  },
  {
    question: "18. What type of individuals maintain transparency, seek honest and constructive feedback, and take ownership of the outcomes of their actions and decisions? (1.3.1)",
    answer: "Accountable"
  },
  {
    question: "19. Airmen are practicioners of the profession of arms, entrusted with the security of the nation, the protection of its citizens, and the preservation of their way of life. In this capacity, Airmen serve as guardians of America's future. What does this responsibility require? (1.3.2)",
    answer: "The needs of service and country to be placed before our own--Service Before Self \nNote: Having the heart and mindset for service allows us to embrace expectations and requirements not levied on the American public or other professions"
  },
  {
    question: "20. What virtues are included in Service Before Self? (1.3.2)",
    answer: "Duty, loyalty, and respect"
  },
  {
    question: "21. What is an internal commitment to the success and preservation of something bigger than ourselves? (1.3.2)",
    answer: "Loyalty"
  },
  {
    question: "22. What is the order of loyalty for Airmen? (1.3.2)",
    answer: "Loyalty is to the nation first, the values and commitments of our USAF second, and finally to the men and women with whom they serve"
  },
  {
    question: "23. What does loyalty to our leaders require us to do? (1.3.2)",
    answer: "(a) Trust, follow, and execute their decisions \n(b) Offer alternative solutions and innovative ideas most effectively through the chain of command \n(c) Ultimately help each other to always act with respect and honor"
  },
  {
    question: "24. True or False? Respect requires us to embrace the unique value of all individuals and treat everyone with dignity. (1.3.2)",
    answer: "True"
  },
  {
    question: "25. What three-dimensional view encompasses respect? (1.3.2)",
    answer: "Self-respect, mutual respect, and organizational respect"
  },
  {
    question: "26. True or False: Respecting others requires a commitment to recognize and root out prejudices, biases, and stereotypes. (1.3.2)",
    answer: "True"
  },
  {
    question: "27. Which core value directs us to develop a sustained passion for the continuous improvement and innovation that propels the Air Force, as well as ourselves, beyond the capabilities of our adversaries. It directs that Airmen continuously advance their craft and increase their knowledge as airmen? (1.3.3)",
    answer: "Excellence in All We Do"
  },
  {
    question: "28. What virtues are included in excellence in all we do? (1.3.3)",
    answer: "Mission, discipline, and teamwork"
  },
  {
    question: "29. FC: What does adherence to excellence in all we do mean for Airmen? (1.3.3)",
    answer: "(a) Seek out and complete developmental education \n(b) Constantly work hard to stay in physical, mental, emotional, spiritual, and moral shape \n(c) Continue to enhance professional competencies \n(d) Diligent to maintain their job skills, knowledge, and personal readiness at the highest possible levels"
  },
  {
    question: "30. What does a mission focus encompass? (1.3.3)",
    answer: "Operations and excellence in stewardship"
  },
  {
    question: "31. What does the complex undertaking of the Air Force mission require us to harness? (1.3.3)",
    answer: "Ingenuity, expertise, and elbow grease of all Airmen"
  },
  {
    question: "32. The complex undertaking of the Air Force mission requires us to harness the ingenuity, expertise, and collective effort of all Airmen. With what mindset do we approach this? (1.3.3)",
    answer: "(a) Respect \n(b) Pride \n(c) Innovation \n(d) A continued commitment to anticipate and embrace change"
  },
  {
    question: "33. What is an individual commitment to uphold the highest of personal and professional standards? We demonstrate it in attitude, work ethic, and effort directed at continuous improvement, whether pursuing professional military education or nurturing ourselves physically, intellectually, emotionally, or spiritually. (1.3.3)",
    answer: "Discipline"
  },
  {
    question: "34. Teamwork is essential at every level. What do Airmen recognize as they strive for organizational excellence as a team? (1.3.3)",
    answer: "Interdependency of every member's contribution toward the mission \nNote: We not only give our personal best, but also challenge and motivate each other."
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
