const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const flashcard = document.getElementById('flashcard');

// Flashcard data
const flashcards = [
  {
    question: "1. True or False? As a member of the USAF, an Airman must practice the highest standards of conduct and integrity, not only in the job, relationships, personal financial dealings, and interactions with the civilian community. (1.4)",
    answer: "True"
  },
  {
    question: "2. True or False? Personal values, such as happiness or stability, are almost always present, but they must not take precedence over ethical values (1.4)",
    answer: "True \nThe key is to align ethical values with personal values, and enhance the commitment we have made to the dedicated service of our nation"
  },
  {
    question: "3. What is prescribed in our core values, our oaths, the Airman's Creed, Air Force instructions, Professions of Arms, and the Uniform Code of Military Justice? (1.4)",
    answer: "Our ethical code"
  },
  {
    question: "4. True or False? When faced with decisions related to mission, personal life, or the interest of peers, the choice can always be made with consideration for our ethical code. (1.4)",
    answer: "True"
  },
  {
    question: "5. ____ values describe what we hold to be right and wrong, ____ is the systematic reflection of these values enabling us to live and act according to our beliefs. (1.4)",
    answer: "Moral/Ethics \nNote: Although following the law is ethical, laws only tell us what we can and cannot do. Ethics, on the other hand, tells us what we should or shouldn't do."
  },
  {
    question: "6. Embedded in our code of ethics, and driven by our competence and character, are key guidelines that help clarify acceptable and unacceptable behavior, but also aspirational values about who we want to be. What can be used to help identify what right looks like and continue to fortify our USAF culture? (1.4)",
    answer: "Principles and ethical guidelines"
  },
  {
    question: "7. Which publication establishes the basic ethical principles and guidelines that must be followed by every government employee? (1.4)",
    answer: "Title 5, CFR, Part 2635, Standards of Ethical Conduct for Employees of the Executive Branch"
  },
  {
    question: "8. True or False? Public service is a public trust, requiring employees to place loyalty to the Constitution, the laws, and ethical principles, above private gain. (1.4)",
    answer: "True"
  },
  {
    question: "9. True or False? Employees shall not hold financial interests that conflict with the conscientious performance of duty. (1.4)",
    answer: "True"
  },
  {
    question: "10. True or False? Employees shall not knowingly make unauthorized commitments or promises of any kind purporting to bind the government. (1.4)",
    answer: "True"
  },
  {
    question: "11. True or False? Employees may act impartially and give preferential treatment to any private organization or individual. (1.4)",
    answer: "False \nNote: Employees \"shall\" act impartially and \"not give\" preferential treatment to any private organization or individual (1.4)"
  },
  {
    question: "12. True or False? Employees may generally not accept gifts from subordinates or employees that make less pay than themselves. (1.4)",
    answer: "True"
  },
  {
    question: "13. True or False? Employees may not solicit a donation or contribution from other personnel for a gift to a superior, make a donation for a gift to a superior official, or accept a gift from subordinate personnel, except for voluntary gifts or contributions of nominal value (not to exceed $10), on occasions of special personal significance (such as marriage or birth of a child), or occasions that terminate the superior-subordinate relationship, such as retirement, permanent change of station or assignment. (1.4)",
    answer: "True"
  },
  {
    question: "14. What is a situation where one is forced to choose between at least two alternatives. (1.4.1)",
    answer: "Ethical dilemma"
  },
  {
    question: "15. What are three general causes or sources of ethical dilemmas? (1.4.1)",
    answer: "Uncertainty, competing values, and potential harm"
  },
  {
    question: "16. What results from not having all the facts pertaining to a situation; not having enough experience for dealing with a situation; or not having a clearly established policy, procedure, or rules for deciding how to make an optimal decision? (1.4.1)",
    answer: "Uncertainty"
  },
  {
    question: "17. What occurs when our personal values conflict with those of our institution, subordinates, peers, or supervisors. (1.4.1)",
    answer: "Competing values"
  },
  {
    question: "18. True or False? The mark of a true professional is maintaining high professional standards despite conflicting values by locating the conflicting values, weighing one's options, and deciding upon the best course of action. (1.4.1)",
    answer: "True"
  },
  {
    question: "19. What type of short and long-term consequences can arise from your actions causing potential harm? (1.4.1)",
    answer: "Intentional and unintentional consequences"
  },
  {
    question: "20. What must Airmen apply to their priorities, so they are able to overcome temptation to stray from our military norms and values? (1.4.1)",
    answer: "Sense of order \nNote: When contemplating what to do, consider possible courses of action by listing to the best options and quality checking ideas to take the right path."
  },
  {
    question: "21. Dr. Robert M. Hicks, former Deputy Director of the Civil Air Patrol, Chaplain Services, identified three tests we can use to check the morality of our actions and decisions. What are these three tests? (1.4.1)",
    answer: "(1) Network test; (2) United States of America test, and (3) Divine test"
  },
  {
    question: "22. Which morality check from Dr> Robert M. Hicks consists of asking yourself, \"How would this decision look if it was aired on the news?\" If your actions were broadcast on the evening news, would you be proud of your actions or ashamed? Would your actions bring credit to yourself and the USAF or would they discredit yourself or those we owe? (1.4.1)",
    answer: "Network test"
  },
  {
    question: "23. Which morality check from Dr. Robert M. Hicks focuses on asking yourself, \"Is this a good decision for the United States? Is this decision good for the USAF? Is this decision good for my unit (us)? Is this decision good for me?\" If you take this course of action, are you properly ordering your priorities? (1.4.1)",
    answer: "United States of America test"
  },
  {
    question: "24. Which morality check from Dr. Robert M. Hicks deals with asking yourself, \"Would I feel good about the decision when I give account for my life?\" When telling the story of your proud and honorable service to our country, would you include conversation about this decision? Would you feel guilt or loss of trust from this action? (1.4.1)",
    answer: "Divine test"
  },
  {
    question: "25. How do Airmen, who are firmly grounded in the core values and ingrained with the warrior ethos, react to stresses, operational deployment pressures, and daily home station demands? (1.4.2)",
    answer: "With valor, courage, and sacrifice"
  },
  {
    question: "26. What is defined as the ability to face danger or hardship in a determined and resolute manner? (1.4.2)",
    answer: "Valor"
  },
  {
    question: "27. What is commonly and rightly recognized as bravery, fearlessness, fortitude, gallantry, heart, and nerve? (1.4.2)",
    answer: "Valor"
  },
  {
    question: "28. True or False? When acting with valor, one expresses the willingness to step outside the comfort zone to deal with unexpected situations. Such situations can happen almost anywhere. (1.4.2)",
    answer: "True"
  },
  {
    question: "29. Courage is about the ability to face fear, danger, or adversity. What are the three types of courage that are critical in the profession of arms? (1.4.2)",
    answer: "Personal, physical, and moral"
  },
  {
    question: "30. What is personal courage? (1.4.2)",
    answer: "Doing what's right even when risking one's career"
  },
  {
    question: "31. What is physical courage? (1.4.2)",
    answer: "The ability to overcome fears of bodily harm to get the job done, or willingness to risk harm to yourself for someone else's sake in battle or the course of everyday life."
  },
  {
    question: "32. What is moral courage? (1.4.2)",
    answer: "The ability to stand by the core values whe moral courage may not be the popular thing to do"
  },
  {
    question: "33. What breeds courage, usually when and where the behavior is most needed? (1.4.2)",
    answer: "Integrity \nNote: More often than not, courage is manifested as an act of bravery on the battlefield when Airmen face the challenges present in combat."
  },
  {
    question: "34. What involves a willingness to give your time, comfort, or life to meet others' needs? (1.4.2)",
    answer: "Sacrifice \nNote: Personal sacrifice occurs on many levels but is commonly evident in the heroic actions of Airmen in combat."
  },
  {
    question: "35. When faced with the call to duty, we must remember that we are Airmen. What do Airmen understand? (1.4.2)",
    answer: "(a) The price that is paid for freedom \n(b) The sacrifices that come from willing to serve our country \n(c) The meaning of belonging to the profession of arms"
  },
  {
    question: "36. Who presented the Airman's Creed to the USAF in 2007? (1.5)",
    answer: "General T. Michael Moseley, 18th Air Force Chief of Staff"
  },
  {
    question: "37. General T. Michael Moseley introduced the Airman's creed as an aspect of one of his top priorities to reinvigorate what? (1.5)",
    answer: "The Total Force"
  },
  {
    question: "38. What was the intent of the Airman's Creed? (1.5)",
    answer: "To enhance the building of a warrior ethos among Airmen and establish a coherent bond between the members of the USAF"
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
