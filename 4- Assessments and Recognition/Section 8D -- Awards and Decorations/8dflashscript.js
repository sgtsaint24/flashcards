const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const flashcard = document.getElementById('flashcard');

// Flashcard data
const flashcards = [
  {
    question: "1. Which program is designed to recognize units, organizations, and individuals and to foster morale, provide incentive, and instill espirit de corps. (8.18)",
    answer: "Department of the Air Force Military Awards and Decorations Program \nNote: Individuals or units considered for awards and decorations under this program must clearly demonstrate sustained and superior performance."
  },
  {
    question: "2. Which awards recognize members for honorable military service for participation in a campaign, period of war, national emergency, expedition, or specified significant peacetime military operation? (8.19)",
    answer: "Service and campaign awards \nNote: Individuals should keep copies of their travel orders and their travel vouchers as documented proof of entitlement to service and campaign awards."
  },
  {
    question: "3. Which medal is awarded to members of the U.S. Armed Forces who participated in United States military operations, operations in direct support of the United Nations, or operations of assistance for friendly foreign nations? (8.19)",
    answer: "Armed Forces Expeditionary Medal \nNote: Service members will not be awarded more than one expeditionary medal for services during a specific period or duties during an operation."
  },
  {
    question: "4. Which medal is awarded to members who participated in the Global War on Terrorism operations on or after 11 September 2001 until a future date to be determined? (8.19)",
    answer: "Global War on Terrorism Service Medal"
  },
  {
    question: "5. Which medal was established on 29 November 2004 and recognizes service members who serve, or have served, in support of designated Afghanistan operations from 11 September 2001 to 31 August 2021? (8.19)",
    answer: "Afghanistan Campaign Medal \nNote: Effective 1 May 2005, members deployed to Afghanistan receive the respective campaign medal in lieu of the Global War on Terrorism Expeditionary Medal."
  },
  {
    question: "6. Which medal was established on 29 November 2004 and recognizes service members who serve, or have served, in support of designated Iraq operations from 9 March 2003 to 31 December 2011? (8.19)",
    answer: "Iraq Campaign Medal \nNote: Effective 1 May 2005, members deployed to Iraq receive the respective campaign medal in lieu of the Global War on Terrorism Expeditionary Medal."
  },
  {
    question: "7. Which medal is awarded to members of the U.S. Armed Forces who participated as military members in a military operation that is deemed to be a significant activity by the Joint Chiefs of Staff and encountered no foreign armed opposition or imminent threat of hostile action? (8.19)",
    answer: "Armed Forces Service Medal"
  },
  {
    question: "8. Which medal is awarded to members of the U.S. Armed Forces and their Reserve Components who distinguished themselves as individuals or members of military units or ships by meritorious direct participation in a significant military act or operation of humanitarian nature? (8.19)",
    answer: "Humanitarian Service Medal"
  },
  {
    question: "9. Which awards are presented to military units that distinguish themselves during peacetime or in action against hostile forces or an armed enemy of the United States and are approved only to recognize acts or services clearly and distinctly outstanding by nature and magnitude? (8.20)",
    answer: "Unit awards \nNote: Only one unit award is awarded for the same achievement or service. \nNote: Designated subordinate units of the organization may also share in the award; however, higher organizations may not."
  },
  {
    question: "10. When are all assigned or attached people who served with a unit during a period for which a unit award was awarded authorized the appropriate ribbon? (8.20)",
    answer: "If they directly contributed to the mission and accomplishments of the unit"
  },
  {
    question: "11. Which award is awarded to USAF units for extraordinary heroism in action against an armed enemy of the United States while engaged in military operations involving conflict with an opposing foreign force on or after 11 September 2001? (8.20)",
    answer: "Gallant Unit Citation \nNote: The Gallant Unit Citation will normally be earned by units that have participated in single or successive actions covering relatively brief time spans."
  },
  {
    question: "12. Which award is awarded to USAF units for exceptionally meritorious conduct in performance of outstanding achievement or service in direct support of combat operations for at least 90 continuous days during the period of military operations against an armed enemy of the United States on or after 11 September 2001? (8.20)",
    answer: "Meritorious Unit Award \nNote: Superior performance of normal missions alone will not justify the award of the Meritorious Unit Award \nNote: Service in a combat zone is not required, but service must be directly related to the combat effort."
  },
  {
    question: "13. Which award is awarded only to numbered units or Numbered Air Forces, air divisions, wings, groups, and squadrons? (8.20)",
    answer: "Air Force Outstanding Unit Award \nNote: To be awarded the Air Force Outstanding Unit Award, an organization must have performed meritorious service or outstanding achievements that clearly set the unit above and apart from similar units. \nNote: Only 10 percent of simliar units assigned to a command are recommended annually."
  },
  {
    question: "14. Which award is awarded to unnumbered organizations, such as a major command, a field operating agency, a direct reporting unit, the Office of the Chief of Staff, other Air Staff, and deputy assistant chief of staff agencies? (8.20)",
    answer: "Air Force Organizational Excellence Award \nNote: Only 10 percent of similar units assigned to a command are recommended annually."
  },
  {
    question: "15. Which award recognizes joint units and activities, such as a joint task force for meritorious achievement or service superior to that normally expected? (8.20)",
    answer: "Joint Meritorious Unit Award"
  },
  {
    question: "16. Which awards recognize participation in military campaigns and expeditions, significant military operations, personal military service, or attainment of a requirement? (8.21)",
    answer: "DoD campaign, expeditionary, and service awards"
  },
  {
    question: "17. Which medal is awarded to military members (grades E-1 through O-6) who actively participated in ground or air combat on or after 11 September 2001? (8.21)",
    answer: "Combat Action Medal \nNote: Actions eligible include deliberately going into an enemy's domain or defending the base while conducting official duties and having experienced enemy fire by lethal weapons or having fired upon the enemy at the risk of grave danger."
  },
  {
    question: "18. Which medal is awarded for sustained individual combat or mission readiness or preparedness for direct weapon-system employment, subject to combat readiness reporting, individually certified as combat and/or mission ready, subject to a continuous individual positional evaluation program, and upon completion of 24 months of sustained combat or mission readiness? (8.21)",
    answer: "Combat Readiness Medal"
  },
  {
    question: "19. Which medal is awarded to enlisted personnel for exemplary conduct while on active military service? It is automatic unless denied by the unit commander for reasons of less than exemplary conduct. (8.21)",
    answer: "Air Force Good Conduct Medal"
  },
  {
    question: "20. Which medal is awarded to members of the USAF who, after 24 March 1999, supported a significant military operation designated by the Chief of Staff of the Air Force to recognize personnel who provided support of combat operations at home station or from outside the geographic area of combat and were not eligible for the Kosovo Campaign Medal or other Operation Allied Force Department of Defense Campaign Medals? (8.21)",
    answer: "Air and Space Campaign Medal"
  },
  {
    question: "21. Which ribbon is awarded in recognition of Air Expeditionary Force deployed status? Deployment status is defined as either 45 consecutive days or 90 non-consecutive days in deployed status. (8.21)",
    answer: "Air and Space Expeditionary Service Ribbon"
  },
  {
    question: "22. What is the formal recognition for pesronal excellence that requires individual nomination and USAF or Department of Defense approval? (8.22)",
    answer: "Decoration"
  },
  {
    question: "23. What is awarded in recognition for acts of valor, heroism, courage, exceptional service, meritorious service, or outstanding achievement that clearly place members above their peers and are of such importance that the person cannot receive proper recognition in any other way? (8.22)",
    answer: "Decorations"
  },
  {
    question: "24. Who may recommend or contribute to a decoration recommendation by providing evidence or statements through the supervisor and chain of command of the member being recommended? (8.22)",
    answer: "Any person, other than the individual being recommended, having firsthand knowledge of the act, achievement, or service \nNote: Although responsibility for submitting decoration recommendations primarily falls on the immediate supervisor."
  },
  {
    question: "25. Which decoration is the highest decoration for heroism in military action that can be awarded to a member of the U.S. Armed Forces? (8.22)",
    answer: "Congressional Medal of Honor"
  },
  {
    question: "26. Which decoration is awarded for conspicuous gallantry and intrepidity at the risk of life above and beyond the call of duty while engaged in action against an enemy of the United States, while engaged in military operations involving conflict with an opposing foreign force, or while serving with friendly foreign forces engaged in an armed conflict against an opposing armed force in which the United States is not a belligerent party? (8.22)",
    answer: "Medal of Honor"
  },
  {
    question: "27. Who was the first USAF recipient of the Medal of Honor presented by President Lyndon B. Johnson on January on January 19, 1967, for action in South Vietnam? (8.22)",
    answer: "Bernard F. Fisher"
  },
  {
    question: "28. How many versions of the Medal of Honor are there? (8.22)",
    answer: "Three, one for each of the military departments of the Department of Defense: Army, Navy, and Air Force, with slight variations in design \nNote: Members of the Marine Corps and Coast Guard are eligible to receive the Navy version and members of the Space Force are eligible to receive the Air Force version."
  },
  {
    question: "29. Which decoration is the second highest decoration that can be awarded to a member of teh U.S. Armed Forces? (8.22)",
    answer: "Distinguished Service Cross"
  },
  {
    question: "30. Which decoration is awarded for extraordinary heroism while engaged in action against an enemy of the United States, while engaged in military operations involving conflict with an opposing foreign force, or while serving with friendly foreign forces engaged in an armed conflict against an opposing armed force in which the United States is not a belligerent party? (8.22)",
    answer: "Distinguished Service Cross, awarded to USAF members as the Air Force Cross \nNote: Actions that merit the award of the Distinguished Service Cross (or service equivalent) must be of such a high degree that they are above those required for all other combat decorations, but do not merit the award of the Medal of Honor."
  },
  {
    question: "31. Which decoration is awarded for exceptionally meritorious service to the nation in a duty of great responsibility? In wartime, a duty of great responsibility is one that involves the exercise of authority or judgement in matters that decide the successful operation of a major command, activity, installation, or major program. (8.22)",
    answer: "Distinguished Service Medal \nNote: The discharge of such duty must involve the acceptance and fulfillment of the obligaion so as to greatly benefit the interests of the United States."
  },
  {
    question: "32. Which decoration is the third-highest military combat decoration that can be awarded to a member of the U.S. Armed Forces? (8.22)",
    answer: "Silver Star"
  },
  {
    question: "33. Which decoration is awarded for gallantry in action while engaged in action against an enemy of the United States, while engaged in military operations involving conflict with an opposing force, or while serving with friendly foreign forces engaged in an armed conflict against an opposing armed force in which the United States is not a belligerent party? (8.22)",
    answer: "Silver Star"
  },
  {
    question: "34. Which decoratrion is awarded to U.S. Armed Forces personnel for exceptionally meritorious conduct in the performance of outstanding duties? Duties must have been performed in a clearly exceptional manner. (8.22)",
    answer: "Legion of Merit \nNote: Foreign miliitary personnel may be awarded the Legion of Merit for exceptionally meritorious conduct in the performance of outstanding services to the United States."
  },
  {
    question: "35. Which decoration is awarded for heroism or extraordinary achievement while participating in aerial flight for actions that are not entirely distinctive, involving operations that are not routine? (8.22)",
    answer: "Distinguished Flying Cross"
  },
  {
    question: "36. Which decoration is awarded for heroism involving voluntary risk of life under conditions other than those of conflict with an armed enemy of the United States? (8.22)",
    answer: "Airman's Medal"
  },
  {
    question: "37. Which decoration is awarded for heroism, valor, or meritorious achievement or service (not involving participation in aerial flight) while engaged in an action against an enemy of the United States, while engaged in military operations involving conflict with an opposing foreign force, or while serving with friendly foreign forces engaged in an armed conflict against an opposing force in which the United States is not a belligerent party? (8.22)",
    answer: "Bronze Star Medal \nNote: The Bronze Star Medal is awarded for valor in combat to a lesser degree than required for the award of the Silver Star or the Legion of Merit."
  },
  {
    question: "38. Which decoration is awarded for wounds received or death after being wounded in any action against an enemy of the United States, in any action with an opposing force of a foreign country in which the U.S. Armed Forces are or have been engaged, while serving with friendly foreign forces engaged in an armed conflict against an opposing armed force in which the United States is not a belligerent party, as a result of an act of any such enemy or opposing armed force, or as a result of an act of any hostile foreign force? (8.22)",
    answer: "Purple Heart \nNote: Since 11 September 2001, the Purple Heart may be awarded to a service member on active duty who is attacked by a foreign terrorist organization that targeted a member of the U.S. Armed Forces due to such member's status as a member of the Armed Forces, unless the wound is the result of willful misconduct of the member, may be awarded the Purple Heart."
  },
  {
    question: "39. Which decoration is a decoration that a member earns entitlement to rather than being awarded through recommendation? (8.22)",
    answer: "Purple Heart"
  },
  {
    question: "40. Which decoration is awarded for heroism or meritorious achievement while participating in aerial flight? (8.22)",
    answer: "Air Medal \nNote: The Air Medal is awarded to acts accomplished with distinction above and beyond that expected of professional Airmen, but not of that warranting award of the Distinguished Flying Cross."
  },
  {
    question: "41. Which decoration is awarded for sustained meritorious achievement while participating in aerial flight? (8.22)",
    answer: "Aerial Achievement Medal"
  },
  {
    question: "42. Which decoration is awarded for outstanding meritorious achievement? (8.22)",
    answer: "Meritorious Service Medal"
  },
  {
    question: "43. Which decoration is awarded for distinctive meritorious achievement and service? (8.22)",
    answer: "Air and Space Commendation Medal"
  },
  {
    question: "44. Which decoration is awarded for outstanding achievement or meritorious service? (8.22)",
    answer: "Air and Space Achievement Medal"
  },
  {
    question: "45. Which awards are unique in that the commanders of major commands, field operating agencies, and direct reporting units must nominate individuals to compete for these awards? (8.23)",
    answer: "Special trophies and awards"
  },
  {
    question: "46. When may non-military awards and decorations only be accepted? (8.25)",
    answer: "After receiving approval from an official approval authority"
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
