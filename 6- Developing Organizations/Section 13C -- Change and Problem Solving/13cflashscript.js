const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const flashcard = document.getElementById('flashcard');

// Flashcard data
const flashcards = [
  {
    question: "1. What is appropriate when there is a perceived gap between what the norms are and what they should be? (13.9)",
    answer: "Change"
  },
  {
    question: "2. If organizational change is not automatic, what is it? (13.9)",
    answer: "The deliberate adoption of a new idea or behavior by an organization and the establishment of new norms \nNote: These norms can involve such as technology, tasks, structure, and resources, including people."
  },
  {
    question: "3. What must leaders do to facilitate organizational change? (13.9)",
    answer: "(1) Must do their part to create an organizational climate conducive to change by explaining the limitations or shortfalls of the present process and the possibilities and benefits of the proposed change \n(2) Must facilitate the change itself by walking Airmen through the change, explaining the details, and answering questions \n(3) Should show appreciation for those who contribute to the change and help refocus those who do not"
  },
  {
    question: "4. True or False? Tough-minded, realistic optimism is the best quality a leader can demonstrate when coping with change. (13.9)",
    answer: "True"
  },
  {
    question: "5. What is the first reaction to change often perceived as? (13.9)",
    answer: "Resistance"
  },
  {
    question: "6. What is an essential element for preventing or overcoming resistance to change? (13.9)",
    answer: "Establishing a well thought out plan"
  },
  {
    question: "7. What enables a change agent (the person advocating for or leading the organizational change) to build confidence, anticipate questions, develop courses of action, and address opposing perceptions? (13.9)",
    answer: "Planning"
  },
  {
    question: "8. What are the five of most common responses to change? (13.9)",
    answer: "Distrust, Uncertainty, Self-interest, Different Perception/No Felt Need to Change, and Over-Determination"
  },
  {
    question: "9. Imposed changes that significantly affect an organization will often be met with tough questions. What do these tough questions ensure? (13.9)",
    answer: "The purpose and intent of the change is clearly understood"
  },
  {
    question: "10. What results when leaders are not prepared to clarify or explain thought processes behind changes? (13.9)",
    answer: "They will not easily overcome employee doubt and will struggle to gain employee buy in"
  },
  {
    question: "11. When faced with impending change, people may experience fear of the unknown or see the change as a threat to organizational stability and their job security. Which common response to change is this? (13.9)",
    answer: "Uncertainty"
  },
  {
    question: "12. People often consider the position they currently have or their role in the existing environment and question the direction and capabilities of those in positions of power after changes are implemented. Which common response to change is this? (13.9)",
    answer: "Self-interest"
  },
  {
    question: "13. Even if a leader thinks people recognize the need for change, they may see the situation differently, particularly if the change has been dropped on them. Which common resistance to change is this? (13.9)",
    answer: "Different Perception/No Felt Need to Change"
  },
  {
    question: "14. Ironically, organizational structure may be a barrier to change. For example, a mechanistic structure that relies on strict procedure and lines of authority may be so rigid that it inhibits change and possibly damages professional relationships. Which common resistance to change is this? (13.9)",
    answer: "Over-Determination"
  },
  {
    question: "15. On what does successful change management depend? (13.10)",
    answer: "Addressing the causes of resistance and improving the change implementation process"
  },
  {
    question: "16. What are five approaches leaders can take to implement change successfullly? (13.10)",
    answer: "(1) Education and Communication \n(2) Participation and Involvement \n(3) Facilitation and Support \n(4) Negotiation and Agreement \n(5) Coercion"
  },
  {
    question: "17. Which approach to change emphasizes the principal open communication is necessary throughout the change process and helps reduce uncertainty? It states that educating people about the need for and expected results of a change should reduce resistance. (13.10)",
    answer: "Education and Communication"
  },
  {
    question: "18. When leaders reduce resistance by actively involving those affected in designing and implementing change and understand that involving people in the change process helps generate ownership and commitment to the change, what approach to change are they practicing? (13.10)",
    answer: "Participation and Involvement"
  },
  {
    question: "19. When leaders introduce the change to employees gradually and provide additional training, if needed, and understand that reinforcement and encouragement help facilitate the power of high expectations throughout the organization, what approach to change are they embracing? (13.10)",
    answer: "Facilitation and Support"
  },
  {
    question: "20. When leaders choose to offer incentives to those who continue to resist the change, and in difficult times, agreements to help focus and remind employees of the changes agreed upon as the change process progresses, what approach to change is taking place? (13.10)",
    answer: "Negotiation and Agreement"
  },
  {
    question: "21. Which approach to change is a forcing technique used to make employees accept change? It can negatively affect attitudes and can potentially cause long-term negative consequences. (13.10)",
    answer: "Coercion"
  },
  {
    question: "22. Regarding organizational change, what is NOT recommended and requires constant leadership oversight to ensure the change remains in effect? (13.10)",
    answer: "Coerced compliance"
  },
  {
    question: "23. What is the three-stage process model for change recommended by renowned social psychologist, Kurt Lewin? (13.11)",
    answer: "(1) Unfreezing \n(2) Changing \n(3) Refreezing"
  },
  {
    question: "24. In the three-stage change process, what two forces must leaders (change agents) analyze, recognize, and strengthen so that they can attend to change itself? (13.11)",
    answer: "(1) Restraining or opposing forces and devise ways to reduce them to overcome resistance \n(2) Supporting forces, which are those forces pushingn toward change"
  },
  {
    question: "25. When does the three-stage change process begin with unfreezing? (13.11)",
    answer: "Once the need for change is recognized"
  },
  {
    question: "26. What is a deliberate management activity to prepare people for change by knowing and going where issues may exist? (13.11)",
    answer: "Unfreezing"
  },
  {
    question: "27. What is the most neglected, yet essential, part of unfreezing? (13.11)",
    answer: "Creating an environment where people feel the need for change"
  },
  {
    question: "28. How are leaders able to generate a need in the people who will feel the greatest effect of the change? (13.11)",
    answer: "By pointing out problems or challenges that currently exist in the organization \nNote: A key factor in unfreezing involves making people knowledgeable about the importance of a change and how it will affect their jobs or the overall organizational structure."
  },
  {
    question: "29. After unfreezing, the next stage in the three-stage change process is changing. What does the changing stage involve? (13.11)",
    answer: "Modifying technology, tasks, structure, or distribution of people"
  },
  {
    question: "30. During which stage of the three-stage process model does the organization move from the old state or the previous norms, to the new state by installing new equipment, restructuring work centers, or implementing procedures? (13.11)",
    answer: "Changing"
  },
  {
    question: "31. True or False? In short, changing is anything that alters the previously accepted status quo. (13.11)",
    answer: "True"
  },
  {
    question: "32. Why is a change agent essential in the changing stage of the three-stage process model? (13.11)",
    answer: "Change needs to be monitored as it occurs by paying close attention to the people most affected by the change \nNote: Signs of implementing the change too early may include negative reactions from employees."
  },
  {
    question: "33. True or False? It is a leader's responsibility to be receptive to the needs of the organization and its employees. Readressing unfreezing techniques is better than forcing a change that causes more problems than it resolves. (13.11)",
    answer: "True"
  },
  {
    question: "34. After implementing a change, it is time to lock-in (or refreeze) desired outcomes and new norms so they become permanent. What is a way of helping new behaviors stick? (13.11)",
    answer: "Actively encouraging and reinforcing the use of new techniques"
  },
  {
    question: "35. What is a critical step in refreezing? (13.11)",
    answer: "Remaining engaged and evaluating results to determine if changes reached their desired effects or if the new processes needs more support, instruction, training, or time"
  },
  {
    question: "36. What is crucial during the refreezing stage? (13.11)",
    answer: "Positively reinforcing desired outcomes \nNote: Rewarding people when they do something in alignment with the change emphasizes the value of the new procedures or behaviors and helps freeze them into place."
  },
  {
    question: "37. True or False? Highlighting successful changes helps reduce the desire to return to the old way of doing things. (13.11)",
    answer: "True"
  },
  {
    question: "38. In many cases, a change agent can call attention to the success of changes and show how the changes work while also being receptive to feedback and aware of areas that may cause lingering issues or continued frustration. In this case, what must the change agent do? (13.11)",
    answer: "Evaluate results, reinforce the desired outcomes, and make constructive modifications, as needed"
  },
  {
    question: "39. What increases operational capabilities while reducing associated costs by applying proven methodologies to all process associated with fulfilling the USAF mission? (13.12)",
    answer: "Continuous Improvement (CI)"
  },
  {
    question: "40. What is a comprehensive philosophy of operations built around the concept that there are always ways a process can be improved to better meet mission/customer requirements? Organizations must constantly strive to make those improvements based on performance metrics that align to strategic objectives, and efficiencies should be replicated to the extent practical. (13.12)",
    answer: "Continuous Improvement (CI)"
  },
  {
    question: "41. What is a hallmark of highly sucessful organizations; \nan Airmen Leadership Quality; \na major graded area in the Air Force Inspection System; \na commander's responsibility; \nand a focal point within the Air Force Standards within Air Force Core Values \'Excellence in all we do\'? (13.12)",
    answer: "Continuous Improvement (CI) \nNote: AFI 90-201, The Air Force Inspection System; AFI 1-2, Commander's Responsibilities; AFI 1-1, Air Force Standards."
  },
  {
    question: "42. The Air Force Continuous Improvement (CI) incorporates aspects of which four major methodologies? (13.12)",
    answer: "(1) Lean \n(2) Six Sigma \n(3) Business Process Reengineering \n(4) Theory of Constraints"
  },
  {
    question: "43. Which methodology focuses on workflow, customer value, and eliminating process waste? It is unique from traditional process improvement strategies in that the primary focus is on eliminating non value-added activities. (13.12)",
    answer: "Lean"
  },
  {
    question: "44. Which methodology is a rigorous, data-driven methodology for process improvement which focuses on minimizing waste through identifying, controlling, and reducing process variation? (13.12)",
    answer: "Six Sigma"
  },
  {
    question: "45. Which methodology is a comprehensive process requiring a change in the fundamental way business processes are performed? It identifies unnecessary activities and eliminates them wherever possible (13.12)",
    answer: "Business Process Reengineering \nNote: Business Process Reengineering allows great opportunity to empower airmen to be innovative."
  },
  {
    question: "46. Which methodology is a systematic approach to optimize resource utilization by identifying, exploiting, subordinating, elevating, and reassessing constraints (bottlenecks) in the process? (13.12)",
    answer: "Theory of constraints"
  },
  {
    question: "47. What is a standardized and structured approach to problem solving used by global industry leaders, and adopted by the DoD? (13.13)",
    answer: "Practical Problem-Solving Method"
  },
  {
    question: "48. What is an eight-step process used to clarify problems, identify root causes, and develop appropriate countermeasures to achieve change? (13.13)",
    answer: "Practical Problem-Solving Method"
  },
  {
    question: "49. In which response is the Practical Problem-Solving Method in its CORRECT order of steps? (13.13)",
    answer: "Step 1: Clarify and validate the problem \nStep 2: Break down the problem and identify performance gaps \nStep 3: Set improvement target \nStep 4: Determine root cause \nStep 5: Develop countermeasures \nStep 6: See countermeasures through \nStep 7: Confirm results and process \nStep 8: Standardize successful processes"
  },
  {
    question: "50. What is the first step to effective problem-solving? It is often best accomplished by developing a problem statement. (13.13)",
    answer: "Clearly understand the problem"
  },
  {
    question: "51. What does a well-defined problem statement use? (13.13)",
    answer: "Date to identify where the problem is occuring, determine the impact of the problem, and compare performance against a standard with scope and direction"
  },
  {
    question: "52. True or False? A problem statement does NOT assume a root cause, solution, or countermeasure, but should include visual tools to depict the current state. (13.13)",
    answer: "True"
  },
  {
    question: "53. The problem statement should be validated by data. How is this done? (13.13)",
    answer: "By collecting and analyzing data to validate the existence and magnitude of the problem \nNote: If data does not exist, the effort should be paused to collect and analyze the needed data before moving forward."
  },
  {
    question: "54. What is paramount to performance gap analysis? (13.13)",
    answer: "(a) Understanding what appropriate data is required \n(b) The ability to interpret that data"
  },
  {
    question: "55. Once the problem statement has been identified and answers the who, what, when, where, and significance of the problem, one must further analyze the data in comparison to the expected outcome. What is the expected outcome? (13.13)",
    answer: "The objective from which to measure the gap between the current state and end state (the expected outcome) and highlight opportunities for improvements (also called the performance gap)"
  },
  {
    question: "56. USAF leaders establish a vision of what an organization will strive to become. What is this known as? (13.13)",
    answer: "The ideal state"
  },
  {
    question: "57. In Step 3, 'set improvement targets', what do process owners or project managers set and base improvement targest on? (13.13)",
    answer: "Expected outcomes and strategic goals and objectives"
  },
  {
    question: "58. What helps define the required performance levels to achieve a desired end state? They should be challenging but achievable. (13.13)",
    answer: "Targets"
  },
  {
    question: "59. Why do USAF leaders often find themselves addressing problems which have been solved many times using previous problem-solving efforts? (13.13)",
    answer: "The efforts were directed at symptoms of a problem rather than root causes"
  },
  {
    question: "60. Which analysis often involves applying a tradeoff between digging as deeply as possible as opposed to finding the deepest point within the team's sphere of influence? (13.13)",
    answer: "Root cause analysis"
  },
  {
    question: "61. How should the correct root cause of a problem be validated? (13.13)",
    answer: "By using the same data used to define the problem in Step 1: Clarify and Validate the Problem"
  },
  {
    question: "62. What is used to address potential root causes in Step 5, develop countermeasures? (13.13)",
    answer: "Countermeasures \nNote: Consideration should be given to the most practical, efficient, and effective countermeasures."
  },
  {
    question: "63. What will close performance gaps and should move the organization closer to its ideal state? (13.13)",
    answer: "Valid countermeasures"
  },
  {
    question: "64. When developing countermeasures, what should be the aim for process improvement change? (13.13)",
    answer: "Sustainable and repeatable"
  },
  {
    question: "65. At the end of Step 5, develop countermeasures, what should be obtained to ensure strategic alignment with the desired outcome is still moving in the appropriate direction? (13.13)",
    answer: "Vector check"
  },
  {
    question: "66. What should be remembered about the impact of a solution? (13.13)",
    answer: "It is a combination of the quality of the solution and the acceptance of the solution by people who implement it"
  },
  {
    question: "67. What does the judicious involvement of employees in the development of countermeasures generate? (13.13)",
    answer: "Buy-in and ownership of the solution and its success"
  },
  {
    question: "68. Step 6 is seeing countermeasures through to execution and tracking detailed implementation plans for each countermeasure approved in Step 5. What should be updated regularly on all tasks until countermeasures have been implemented, or until deemed unnecessary? (13.13)",
    answer: "Reviews and progress checks"
  },
  {
    question: "69. Which step compares the results of implemented countermeasures to the identified performance gaps, improvement objectives/targets, and the expected outcome? (13.13)",
    answer: "Step 7, confirm results and process"
  },
  {
    question: "70. What should be verified in Step 7, confirm results and process? (13.13)",
    answer: "Sustainability and repeatability of the improved process"
  },
  {
    question: "71. In Step 7, confirm results and process, what is measured by data and analyzed to confirm the project's intent? (13.13)",
    answer: "Results"
  },
  {
    question: "72. In Step 7, confirm results and process, what should be monitored for performance relative to the baseline developed in Steps 1 and 2, relative to targets established in Step 3, and relative to the solution implementation? (13.13)",
    answer: "Processes"
  },
  {
    question: "73. In Step 7, confirm results and process, how should confirmed results be illustrated? (13.13)",
    answer: "With appropriate data tools which link back to performance gaps and improvement targets"
  },
  {
    question: "74. What is the most common mistake made during CI efforts? (13.13)",
    answer: "Incorrect root-cause determination \nNote: If targets are not met, it may be necessary to return to Step 4, determine root cause."
  },
  {
    question: "75. Which step is the most commonly neglected step of the entire practical problem-solving method? It ensures the results of the efforts made in previous steps are codified. (13.13)",
    answer: "Step 8, Standardize Successful Processes"
  },
  {
    question: "76. In Step 8, standardize successful processes, what three questions are considered? (13.13)",
    answer: "(1) What is needed to standardize the improvements? (Possible answers may include a submission to the Airmen Powered by Innovation Program or change requests for technical orders, instructions, manuals, materiel, and suppliers.) \n(2) How should improvements and lessons learned be communicated? (The wing process manager should be made aware of the success. Information should be input into the USAF CPI portal, conducting key meetings, writing publications, utilizing public affairs, informing the chain of command, or populating data collection sites.) \n(3) Were other opportunities or problems identified by the problem-solving model? (This project may have identified additional problem-solving opportunities that should be recognized and addressed.)"
  },
  {
    question: "77. Consistently applied, what provides an excellent tool for making data-driven decisions with regard to management, process change, and the sharing of best practices, ensuring actions lead to the desiried results with minimal waste? (13.14)",
    answer: "Practical Problem-Solving Method \nNote: It also ensures the results are aligned with the needs of the organization."
  },
  {
    question: "78. At what three levels of effort can the practical problem-solving method be used for solving problems and performing process improvement initiatives? (13.14)",
    answer: "(1) Just Do It \n(2) Rapid Improvement Event \n(3) Improvement Event"
  },
  {
    question: "79. Which improvement effort, also called point improvement, is an approach that involves one person (or a small team) and can be accomplished in less than a day? (13.14)",
    answer: "Just Do It \nNote: Examples could be using torque wrenches instead of adjustable wrenches or routing paperwork electronically rather than through physical distribution channels."
  },
  {
    question: "80. Which event consists of a small team of individuals, usually subject matter experts, and can be accomplished in less than a week? It is designed to develop and implement countermeasures after appropriate project preparations ahve been made. (13.14)",
    answer: "Rapid Improvement Event \nNote: Examples could be improving aircraft servicing cycle times or improving first-time pass yields on task management tool taskers."
  },
  {
    question: "81. Which event setting requires a large team and is conducted over a longer period of time? (13.14)",
    answer: "Improvement Project \nNote: Examples could be shortening aircraft annual overhaul cycle time or writing software to track annual overhauls."
  },
  {
    question: "82. What is defined as the process of leading, coordinating, planning and controlling a diverse and complex set of processes and people in the pursuit of achieving an established objective? (13.15)",
    answer: "Project management"
  },
  {
    question: "83. True or False? A project is not a program; programs are ongoing. A project is temporary, based on an established objective that has a generalized time frame attached to it. (13.15)",
    answer: "True"
  },
  {
    question: "84. What are the six steps of project management? (13.15)",
    answer: "(1) Define the Project Objective \n(2) Develop Solution Opinions \n(3) Plan the Project \n(4) Execute the Plan \n(5) Monitor and Control Progress \n(6) Close the Project"
  },
  {
    question: "85. Constraint consideration is crucial for project management. What are among the main constraints most often realized in project management? (13.16)",
    answer: "Quality, time, and cost"
  },
  {
    question: "86. When managing a project, what will be the driver for the project? (13.16)",
    answer: "One of the constraints (quality, time, or cost)"
  },
  {
    question: "87. When making decisions about the project's objective what should the project manager take into consideration and adjust the management of the project accordingly? (13.16)",
    answer: "The driving constraint for the project (quality, time, or cost) will have an impact on its other two constraints."
  },
  {
    question: "88. What is incumbent upon a project manager to do in order to establish a sound project objective and generate the solution options necessary to achieve those objectives? (13.16)",
    answer: "To provide leadership and use good team-building techniques"
  },
  {
    question: "89. Once options are developed in step 2, develop solution options, what is the most important and time-consuming aspect of project management? (13.17)",
    answer: "Planning the project--step 3"
  },
  {
    question: "90. True or False? Planning a project involves activities that answer the questions who, what, when, where, and how. (13.17)",
    answer: "True"
  },
  {
    question: "91. What are three techniques of special importance to use during project planning? (13.17)",
    answer: "(1) Gathering important information \n(2) Creating a work breakdown structure \n(3) Conducting a task analysis"
  },
  {
    question: "92. Regardless of the method of planning used, what, made forseeable through task analysis, ensures project completion is more likely to succeed? (13.17)",
    answer: "The completion of the tasks with a sense of order and timeliness \nNote: Ultimately, the goal of project management is to achieve the objective of the project in the most logical, sensible manner."
  },
  {
    question: "93. What is a technique based on dividing a project into sub-units or work packages? (13.17)",
    answer: "Work breakdown structure \nNote: A work breakdown structure is typically constructed with two or three levels of detail, although more levels are common, depending on the complexity of a project."
  },
  {
    question: "94. Why are the chances of neglecting or overlooking an essential step minimized when using the work breakdown structure technique? (13.17)",
    answer: "All the elements required to complete the project are identified \nNote: The amount of breakdown is an element the project manager and the project team must decide upon."
  },
  {
    question: "95. True or False? The more complex the project, the lessser the importance of detailed task analysis. (13.17)",
    answer: "False"
  },
  {
    question: "96. True or False? Information contained in the task analysis, which is not depicted in a work breakdown structure, includes \n(a) task milestones, \n(b) how the milestones can be measured, and \n(c) resources requirements. (13.17)",
    answer: "True"
  },
  {
    question: "97. What provides crucial information for determining how the tasks of the project interrelate? (13.17)",
    answer: "Task analysis \nNote: Once compiled, final decisions on task assignments and budgetary concerns can be addressed."
  },
  {
    question: "98. What is imperative prior to beginning a project to ensure the efficiency of the project? (13.17)",
    answer: "To establish the proper sequencing of tasks"
  },
  {
    question: "99. What should Airmen of all skills and jobs possess as their first duty for change management and continuous process improvement? (13.9)",
    answer: "A mindset of critical thinking and problem solving \nNote: As an Airmen matures, their career path should include basic, fundamental, intermediate, and Master level education for change maangement and continuous process improvement."
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
