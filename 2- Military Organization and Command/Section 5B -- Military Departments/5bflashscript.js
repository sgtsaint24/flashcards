const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const flashcard = document.getElementById('flashcard');

// Flashcard data
const flashcards = [
  {
    question: "1. What services make up the military departments? (5.4)",
    answer: "Army, Navy (including the Marine Corps and, in wartime, the Coast Guard), and the USAF (including the Space Force)"
  },
  {
    question: "2. The Secretary of Defense and the Joint Chiefs of Staff established the general and specific functions (roles and missions) of each branch of the U.S. Armed Forces according to what agreement? (5.5)",
    answer: "Key West Agreement of 1948"
  },
  {
    question: "3. What are the three general functions of the U.S. Armed Forces established in the 1958 revision to the Key West Agreement? (5.5)",
    answer: "(1) Support and defend the U.S. Constitution against all enemies, foreign and domestic \n(2) Ensure, by timely and effective military action, the security of the United States, its possessions, and areas vital to its interests \n(3) Uphold and advance the national policies and interests of the United States"
  },
  {
    question: "4. What service is responsible for the preparation of land forces necessary for the effective prosecution of war, and for the expansion of peacetime components of the Army to meet the needs of war? (5.5)",
    answer: "Army"
  },
  {
    question: "5. The Army organizes, trains, and equips land forces for what three specific functions? (5.5)",
    answer: "(1) Operations on land, including joint operations \n(2) The seizure of defense of land areas, including airborne and joint amphibious operations \n(3) The occupation of land areas"
  },
  {
    question: "6. What forces are included in the Navy? (5.5)",
    answer: "Naval combat and service forces, naval aviation, and the Marine Corps"
  },
  {
    question: "7. The Navy organizes trains, equips naval forces for which five specific functions? (5.5)",
    answer: "(1) Operations at sea, including joint operations \n(2) The control of vital sea areas, the protection of vital sea lanes, and the suppression of enemy sea commerce \n(3) The support of occupation forces as requried \n(4) The seizure of minor enemy shore positions capable of reduction by such landing forces as may be comprised within the fleet organization \n(5) Naval reconnaissance, antisubmarine warfare, and protection of shipping"
  },
  {
    question: "8. What are the Marine Corps' five specific functions? (5.5)",
    answer: "(1) To provide marine forces with supporting components for service in the seizure or defense of advanced naval bases and for the conduct of limited land operations in connection therewith \n(2) To develop, in coordination with the Army and the Air Force, those phases of amphibious operations which pertain to the tactics, technique, and equipment employed by landing forces \n(3) To provide detachments and organizations for service on armed vessels of the Navy \n(4) To provide security detachments for protection of naval property at naval stations and bases \n(5) To provide, as directed by proper authority, such missions and detachments for service in foreign countries as may be required to support the national policies and interests of the United States"
  },
  {
    question: "9. Which service is always both a military service and a branch of the U.S. Armed Forces? It is a service in the Department of Homeland Security except when operating as part of the Navy on declaration of war or when the U.S. President directs. (5.5)",
    answer: "U.S. Coast Guard"
  },
  {
    question: "10. What are the seven major functions of the Coast Guard? (5.5)",
    answer: "(1) Enforce or assist in the enforcement of all applicable Federal laws on, under, and over the high seas and waters subject to the jurisdiction of the United States \n(2) Engage in maritime air surveillance or interdiction to enforce or assist in the enforcement of the laws of the United States \n(3) Administer laws and promulgate and enforce regulations for the promotion of safety of life and property on and under the high seas and waters subject to the jurisdiction of the United States, covering all matters not specifically delegated by law to some other executive department \n(4) Develop, establish, maintain, and operate, with due regard to the requirements of national defense, aids to maritime navigation, icebreaking facilities, and rescue facilities for the promotion of safety on, under, and over the high seas and waters subject to the jurisdiction of the United States \n(5) Pursuant to international agreements, develop, establish, maintain, and operate icebreaking facilities on, under, and over waters other than the high seas and waters subject to the jurisdiction of the United States \n(6) Engage in oceanographic research of the high seas and in waters subject to the jurisdiction of the United States \n(7) Maintain a state of readiness to function as a specialized service in the Navy in time of war, including the fulfillment of Maritime Defense Zone command responsibilities"
  },
  {
    question: "11. Whose function is it to provide the means for coordination of air defense among all services? (5.5)",
    answer: "USAF"
  },
  {
    question: "12. Who assists the Army and Navy in accomplishment of their missions, including the provision of common services and supplies as determined by proper authority? (5.5)",
    answer: "USAF"
  },
  {
    question: "13. The USAF organizes, trains, and equips air forces for what eight specific functions? (5.5)",
    answer: "(1) Air operations including joint operations \n(2) Gaining and maintaining general air supremacy \n(3) Establishing local air superiority where and as required \n(4) The strategic force of the United States and strategic air reconnaisance \n(5) Airlift and support for airborne operations \n(6) Air support to land forces and naval forces, including support of occupation forces \n(7) Air transport for the U.S. Armed Forces, except as provided by the Navy \n(8) To develop weapons, tactics, technique, organization and equipment of USAF combat and service elements, coordinating with the Army and Navy on all aspects of joint concern, including those which pertain to amphibious and airborne operations"
  },
  {
    question: "14. What force(s) are the nation's principle air and space forces responsible for the preparation of forces encessary for the effective prosecution of war? (5.5)",
    answer: "USAF and Space Force"
  },
  {
    question: "15. Who provides the nation with global vigilance, global reach, and global power in the form of in-place, forward-based, and expeditionary forces to deter aggression and violence to prevent conflict? (5.5)",
    answer: "USAF and Space Force"
  },
  {
    question: "16. What five specific functions does Space Force perform within the Department of the Air Force? (5.5)",
    answer: "(1) Provide freedom of operation for the United States in, from, and to space. \n(2) Provide prompt and sustained space operations. \n(3) Protect the interests of the United States in space. \n(4) Deter aggression in, from, and to space. \n(5) Conduct space operations."
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
