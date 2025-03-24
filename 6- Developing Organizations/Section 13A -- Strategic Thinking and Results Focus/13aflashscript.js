const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const flashcard = document.getElementById('flashcard');

// Flashcard data
const flashcards = [
  {
    question: "1. What is the process of organizing, planning, leading, and controlling resources within an entity with the overall aim of achieving established goals? (13.1)",
    answer: "Organizational management"
  },
  {
    question: "2. Which management provides leaders the ability to make decisions and resolve issues effectively for the benefit of the organization and its employees? (13.1)",
    answer: "Organizational management"
  },
  {
    question: "3. Which manner of thinking is important when establishing goals, and planning how to achieve them, within any unit or work center? It can be applied at any level, across an entire enterprise or on a specific project. (13.1)",
    answer: "Thinking strategically"
  },
  {
    question: "4. When Airmen think on both a large and small scale, long- and short-term in order to identify and achieve desired goals, which type of thinking are they employing? (13.2)",
    answer: "Strategic Thinking"
  },
  {
    question: "5. According to retired USAF general officers, Airmen who identified best and wrost-case scenarios for how a situation might be resolved, were employing which type of thinking? (13.2)",
    answer: "Strategic thinking"
  },
  {
    question: "6. According to retired USAF general officers, Airmen who considered how other stakeholders would be affected by proposed courses of action, were employing which type of thinking? (13.2)",
    answer: "Strategic Thinking"
  },
  {
    question: "7. According to retired USAF general officers, Airmen who viewed issues from the perspective of more senior leadership (\"work your boss's boss's problems\"), were employing which type of thinking? (13.2)",
    answer: "Strategic Thinking"
  },
  {
    question: "8. According to retired USAF general officers, Airmen who identified a realistic time horizon for achieving goals and built on small successes (\"Thought BIG. Started small. Scaled fast.\"), were employing which type of thinking? (13.2)",
    answer: "Strategic Thinking"
  },
  {
    question: "9. All levels of Airmen should adopt which thinking mindset as they approach issues within their organization? (13.3)",
    answer: "Strategic thinking mindset"
  },
  {
    question: "10. What are the three fundamental components of a strategic thinking mindset? (13.3)",
    answer: "Intellectual Flexibility, Intellectual Inclusiveness, and Intellectual Humility"
  },
  {
    question: "11. Which fundamental component of a strategic thinking mindset is a willingness and proclivity to adjust one's understanding, opinions, or approach when conditions change or new information is presented? (13.3)",
    answer: "Intellectual Flexibility"
  },
  {
    question: "12. Which fundamental component of a strategic thinking mindset is employed when a request for critical training for unit members is denied for budgetary reasons, considering other options such as one of the unit Airmen could receive the training and then teach the rest of the unit or maybe other units nearby whose members have received the training could teach it? (13.3)",
    answer: "Intellectual Flexibility"
  },
  {
    question: "13. Which fundamental component of a strategic thinking mindset is the welcoming of information and opinion from a broad range of sources (individuals, groups, disciplines of study, etc.)? (13.3)",
    answer: "Intellectual Inclusiveness"
  },
  {
    question: "14. Which fundamental component of a strategic thinking mindset is employed when Airmen: \nlook beyond their immediate organization; \nmake use of formal and informal networks and reach out to others with relevant expertise; \nreach out to peers from past assignments who have dealt with similar issues or to contacts within the other Services? (13.3)",
    answer: "Intellectual Inclusiveness"
  },
  {
    question: "15. Which fundamental component of a strategic thinking mindset is having a comfort level with being wrong or an incomplete understanding, accomplished by the tendency to check onself, examining issues as if one's understanding is wrong in some way? (13.3)",
    answer: "Intellectual Humility"
  },
  {
    question: "16. Which fundamental component of a strategic thinking mindset is demonstrated when Airmen don't assume they are the smartest person in the room on a given issue (or the only smart person within the room); ask their subordinates for candid feedback on their proposed approach, or explicitly communicate their desire to understand and consider alternate perspectives before making a decision? (13.3)",
    answer: "Intellectual Humility"
  },
  {
    question: "17. In practice, what are the four main activities? (13.4)",
    answer: "Scanning, questioning, conceptualizing, and testing"
  },
  {
    question: "18. Which activity of strategic thinking is the identification of emerging patterns in the environment? It consits of taking in, deconstructing, and synthesizing information from different sources, with the goal of applying this information to the future. (13.4)",
    answer: "Scanning \nNote: Example of scanning techniques could include seeking input from an expert panel and analyzing historical data to identify trends"
  },
  {
    question: "19. Which activity of strategic thinking is asking questions of others and oneself? It is needed to understand an issue more fully from different perspectives? (13.4)",
    answer: "Questioning"
  },
  {
    question: "20. Which activity of strategic thinking involves framing issues broadly, exploring problems rather than aiming to solve them immediately, and considering input from all stakeholders? (13.4)",
    answer: "Questioning"
  },
  {
    question: "21. Which activity of strategic thinking is needed to identify possibilities for future direction with potential options? (13.4)",
    answer: "Conceptualizing"
  },
  {
    question: "22. Which activity of strategic thinking involves identifying a broad range of options (brainstorming), using various analytic tools and techniques to explore potential solutions, and rejecting options only after exploration? (13.4)",
    answer: "Conceptualizing"
  },
  {
    question: "23. Which activity of strategic thinking allows for informed speculation to anticipate the impact of a proposed action on organizational performance? (13.4)",
    answer: "Testing"
  },
  {
    question: "24. Which activity of strategic thinking is being applied when Airmen might initially conduct a role play of how the proposed course of action would be communicated to stakeholders and how they are likely to respond? (13.4)",
    answer: "Testing \nNote: The proposed solution should be tested on a small scale (a pilot test), in order to evaluate its initial impact and to address any problems that arise in the initial implementation"
  },
  {
    question: "25. When is goal setting most likely to improve performance? (13.5)",
    answer: "When goals are: Specific, Measurable, Attainable, Relevant, and Time-bound (SMART). \nNote: The term \"Attainable\" does not imply that goals should be easy to attain. Reserach has consistently found that setting difficult or challenging goals improves performance more than setting goals that are easy or only moderately difficult to meet."
  },
  {
    question: "26. Which type of goal focuses on how individuals contribute to the group, fostering collaboration and incentivizing support that will help other team members succeed? (13.5)",
    answer: "Groupcentric goals"
  },
  {
    question: "27. Which goals may disincentivize support to other team members, such as training and coaching new team members or when collaboration is needed? (13.5)",
    answer: "Egocentric"
  },
  {
    question: "28. What sets priorities, goals, objectives, and key performance indicators (metrics/measures) that are aligned from the lowest echelon to the highest, and ensures all Airmen are marching down the same Path, toward the same Target? (13.3)",
    answer: "Strategy"
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
