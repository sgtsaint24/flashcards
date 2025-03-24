const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const flashcard = document.getElementById('flashcard');

// Flashcard data
const flashcards = [
  {
    question: "1. Who is responsible for ensuring their respective CFETP embodies Airmanship and incorporates the following conpetencies that align with the Air Force foundational competencies: communication, accountability, teamwork, analytical thinking, and resource management? (7.17)",
    answer: "Air Force Career Field Managers"
  },
  {
    question: "2. What is a must to accomplish the mission, whether that means sending satellites into orbit, planes in the air, reports to higher headquarters, or vehicles on the road? (7.12)",
    answer: "Training"
  },
  {
    question: "3. With what does Air Force on-the-job training (OJT) provide personnel? (7.14)",
    answer: "The opportunity to attain knowledge and skill qualifications required to perform duties in their specialty"
  },
  {
    question: "4. The supervisor's primary responsibility is to plan OJT that outlines specific short-term mission-related goals for the trainee. However, on what does the overall success depend? (7.14)",
    answer: "The supervisor's ability to advise and actively assist Airmen in reaching their long-range career objectives"
  },
  {
    question: "5. What are the three components of the Air Force on-the-job training (OJT) program? (7.14)",
    answer: "Job knowledge, job proficiency, and job experience"
  },
  {
    question: "6. The Air Force on-the-job training (OJT) program consists of three components. How is the job knowledge component satisfied? (7.14)",
    answer: "Through a planned program of study involving Career Development Courses (CDC) or technical references"
  },
  {
    question: "7. The Air Force on-the-job training (OJT) program consists of three components. How is the job proficiency component developed? (7.14)",
    answer: "Hands-on training provided on the job, allowing the trainee to gain proficiency in tasks performed in the work center"
  },
  {
    question: "8. The Air Force on-the-job training (OJT) program consists of three components. How is the job experience component gained? (7.14)",
    answer: "During and after upgrade training to build confidence and competence"
  },
  {
    question: "9. What leads to award of higher skill levels and is designed to increase skills and abilities? (7.15)",
    answer: "Upgrade training"
  },
  {
    question: "10. AFSC upgrade training requirements for award of 3-, 5-, 7-, and 9-skill levels can be found in? (7.15)",
    answer: "AFMAN 36-2100, Military Utilization and Classification, DAFMAN 36-2689, Training Program and the applicable CFETP \nNote: AFMAN 36-2100, Military Utilization and Classification, DAFMAN 36-2689, Training Program, and the applicable CFETP."
  },
  {
    question: "11. What must Airmen complete to be awarded the 3-skill level? (7.15)",
    answer: "An initial skills course"
  },
  {
    question: "12. Who is considered an apprentice? (7.15)",
    answer: "Airmen who are awarded the 3-skill level"
  },
  {
    question: "13. How may personnel, who are retraining via OJT, be awarded a 3-skill level? (7.15)",
    answer: "When they complete knowledge training on all tasks taught in the initial skills course and other tasks and mandatory requirements."
  },
  {
    question: "14. Who is called a Journeyman? (7.15)",
    answer: "Airmen who are awarded the 5-skill level"
  },
  {
    question: "15. What are the requirements for Airmen to be awarded the 5-skill level? (7.15)",
    answer: "(a) Must complete mandatory CDCs, if available, and applicable mandatory core tasks identified in the CFETP \n(b) Completion of all mandatory requirements listed in the Air Force Enlisted Classification Directory (AFECD) \n(c) Must be recommended by the supervisor and approved by the commander"
  },
  {
    question: "16. What are the requirements to be a Craftsman? (7.15)",
    answer: "(a) Must be at least a Staff Sergeant Select \n(b) Complete mandatory CDCs, if available, and complete applicable mandatory core tasks identified in the CFETP \n(c) Completion of a 7-skill level craftsman course (if career field requires it) and mandatory requirements listed in the AFECD \n(d) Must be recommended by the supervisor and approved by the commander"
  },
  {
    question: "17. What are the requirements to be awarded the 9-skill level, a Superintendent? (7.15)",
    answer: "(a) Must be at least a Senior Master Sergeant \n(b) Meet mandatory requirements listed in the AFECD \n(c) Be recommended by the supervisor \n(d) Be approved by the commander"
  },
  {
    question: "18. The unit training program is designed to ensure all Airmen receive quality, standardized, comprehensive training. On what does the success and quality of training greatly depend? (7.16)",
    answer: "The trainee's active participation and understanding of the training program, as well as the relationship between the supervisor, trainer, and trainee"
  },
  {
    question: "19. The trainee is the focal point of the training program. Who works together to plan, conduct, and evaluate the trainees' efforts to become qualified to perform in their USAF specialty? (7.16)",
    answer: "Unit training managers and supervisors"
  },
  {
    question: "20. According to basic requirements of the unit training program, when are newly assigned personnel interviewed to determine training status and issued CDCs upon confirmation within the Course Development Student Administration Record System? (7.16)",
    answer: "Within 30 days (60 days for Air Reserve Component)"
  },
  {
    question: "21. What are the time requirements for the work center training orientation, comprehensive trainee orientation, and training progress review with the unit training manager, supervisor, and trainee? (7.16)",
    answer: "(a) Work center training orientation--within 60 days of assignment \n(b) Comprehensive trainee orientation--within 60 days of assignment \n(c) Training progress review with the unit training manager, supervisor, and trainee--at the 24th month of upgrade training and at least every 90 days thereafter until the trainee is upgraded or withdrawn from training"
  },
  {
    question: "22. Who are the commander's key staff members responsible for overall management of the training program? They serve as training consultants to all  unit members and determine if quality training programs are in effect within all sections. (7.16)",
    answer: "Unit training managers"
  },
  {
    question: "23. Who develops, manages, and conducts training in support of in-garrison and expeditionary mission requirements; advises and assists commanders and unit personnel in executing their training responsibilities; and conducts a staff assistance visit of the unit's training program to include a geographically separated units every two years or sooner if requested by the unit commander? (7.16)",
    answer: "Training managers"
  },
  {
    question: "24. In addition to unit training managers, supervisors have the single greatest impact on mission accomplishment with regard to training. What must they do and develop? (7.16)",
    answer: "(a) Must share their experiences and expertise with trainees to meet mission requirements and ensure a quality training program is provided \n(b) Develop one work center master task list (MTL) that ensures completion of all duty position requirements (i.e., 100 percent task coverage) and conduct a review annually \n(c) Must integrate training with day-to-day work center operations and consider trainer and equipment availability, training opportunities, and schedules"
  },
  {
    question: "25. What is needed to be selected as a trainer? (7.16)",
    answer: "(a) Experience and ability to provide instruction to the trainee \n(b) Must maintain task qualification \n(c) Complete the USAF training course"
  },
  {
    question: "26. What do task certifiers provide? (7.16)",
    answer: "Third-party certification and evaluation of progress in the training program"
  },
  {
    question: "27. What are the qualifications for task certifiers? (7.16)",
    answer: "(a) Must be at least a Staff Sergeant with a 5-skill level or civilian equivalent \n(b) Complete the Air Force training course \n(c) Capable of evaluating the task being certified"
  },
  {
    question: "28. Why is training documentation important to personnel at all levels? (7.17)",
    answer: "(a) Validates the status of training and task qualification \n(b) Helps managers assess mission capability and readiness \n(c) Defines requirements for individual career progression"
  },
  {
    question: "29. What is generated for all trainees entering upgrade training for the first time? (7.17)",
    answer: "DAF Form 623, Individual Training Record Folder, six-part folder (when required by the career field manager), or approved electronic equivlaent \nNote: The training record reflects past and current qualifications and is used to determine training requirements."
  },
  {
    question: "30. Who maintains the training record, and ensures it is available to applicable personnel in the chain of command upon request? (7.17)",
    answer: "Supervisors"
  },
  {
    question: "31. Unless classified, when is the training record returned to the member? (7.17)",
    answer: "Upon separation, retirement, commissioning, promotion to Master Sergeant, or as otherwise directed by the career field manager"
  },
  {
    question: "32. What is used to document an individual's training progress? The form reflects status, counseling, and breaks in training? (7.17)",
    answer: "DAF Form 623A, On-the-Job Training Record Continuation Sheet, or automated version"
  },
  {
    question: "33. What is the Career Field Education and Training Plan? (7.17)",
    answer: "A comprehensive core document identifying life-cycle education and training requirements, training support resources, core and home station training, and deployment/unit type code task requirements for USAF specialties"
  },
  {
    question: "34. What do supervisors use to plan, prioritize, manage, and execute training within the career field and to identify and certify all past and current qualifications? (7.17)",
    answer: "Career Field Education and Training Plan (CFETP)"
  },
  {
    question: "35. What does Part 1 of the Career Field Education and Training Plan (CFETP) provide? (7.17)",
    answer: "The information necessary for all overall management of the specialty and is maintained as part of the work center master training plan \nNote: At least one copy of the entire CFETP (Part 1 and 2), should be kept in the work center for general access and master training plan development"
  },
  {
    question: "36. What does Part 2 of the Career Field Education and Training Plan (CFETP) contain? (7.17)",
    answer: "The specialty training standard identifying the duties, tasks, and technical references to support training, core and home station training tasks, deployment/unit type code tasks and CDC requirements \nNote: At least one copy of the entire CFETP (Part 1 and 2), should be kept in the work center for general access and master training plan development"
  },
  {
    question: "37. What is an Air Force job qualification standard (AFJQS)? (7.17)",
    answer: "A training document approved by the career field manager for a particular job type or duty position within an USAF specialty"
  },
  {
    question: "38. DAF Form 797, Job Qualification Standard Continuation/Command JQS, is a continuation of the Career Field Education and Training Plan (CFETP) Part 2, or AFJQS. What does this form define? (7.17)",
    answer: "Locally assigned duty position, home station training, and deployment/unit type code requirements not included in the CFETP, Part 2."
  },
  {
    question: "39. Which form do evaluators use to conduct and document completion of task evaluations during training staff assistance visits, when directed by the commander, or when task certification requires validation? (7.17)",
    answer: "DAF Form 803, Report of Task Evaluations \nNote: Completed evaluations conducted on a single trainee by the supervisor/trainer or task certifier are filed in AF Form 623, Individual Training Record, until upgraded or no longer applicable."
  },
  {
    question: "40. Which form do supervisors use to document selected tasks requiring recurring training or evaluation? (7.17)",
    answer: "DAF Form 1098, Special Task Certification and Recurring Training \nNote: USAF and major command directives may identify tasks contained in the CFETP that require special certification, as well as recurring training or evaluations"
  },
  {
    question: "41. What is the retraining program designed to do? (7.18)",
    answer: "Balance the number of personnel in specific grades and year groups of an USAF specialty \nNote: Once retraining is approved and the Airman has been assigned duty in the new specialty, upgrade training begins."
  },
  {
    question: "42. What AFMAN can an Airman refer to for additional information on the Airman Retraining Program? (7.18)",
    answer: "AFMAN 36-2100"
  },
  {
    question: "43. What online synchronous platform do Language Enabled Airman Program (LEAP) members utilize to develop and professionalize their skills? (7.19)",
    answer: "\"eMentor\" \nNote: LEAP is a highly-competitive, board-selected program that enables the USAF to sustain, deliberately develop, and posture Airmen for utilization in language designated positions, deployments, and other CCMD requirements."
  },
  {
    question: "42. What AFMAN can an Airman refer to for additional information on the Airman Retraining Program? (7.18)",
    answer: "AFMAN 36-2100"
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
