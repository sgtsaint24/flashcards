const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const flashcard = document.getElementById('flashcard');

// Flashcard data
const flashcards = [
  {
    question: "1. What U.S. code provides specified duties, responsibilities, and legal obligations of the Department of the Air Force? (5.14)",
    answer: "Title 10 United States Code, Armed Forces"
  },
  {
    question: "2. What comprises the Department of the Air Force (DAF)? (5.14)",
    answer: "The secretariat (including the Secretary of the Air Force and the Secretary's principal staff), HAF and field units, and Headquarters Space Force and field units"
  },
  {
    question: "3. What three major entities comprise DAF? (5.14)",
    answer: "Secretariat; Air Staff; and Space Staff"
  },
  {
    question: "4. What are the component organizations within the USAF and Space Force called? (5.14)",
    answer: "Field units"
  },
  {
    question: "5. In which agreement are the general and specific functions of the military branches outlined? (5.14)",
    answer: "The Key West Agreement"
  },
  {
    question: "6. Secretary of the Air Force is a civilian appointed by whom? (5.14)",
    answer: "The U.S. President, by and with the advice and consent of the Senate"
  },
  {
    question: "7. The Secretary of the Air Force is the head of the Department of the Air Force and is subject to the authority, control, and direction of whom? (5.14)",
    answer: "Secretary of Defense"
  },
  {
    question: "8. Who is an USAF General Officer appointed for four years by the U.S. President, by and with the advice and consent of the Senate? (5.15)",
    answer: "Chief of Staff of the Air Force (CSAF) \nNote: Chief of Staff of the Air Force is a member of the Joint Chiefs of Staff"
  },
  {
    question: "9. Who is subject to the authority, direction, and control of the Secretary of the Air Force, and presides over the Air Staff? (5.15)",
    answer: "Chief of Staff of the Air Force (CSAF)"
  },
  {
    question: "10. Who supports the CSAF in carrying out his or her responsibilities? (5.15)",
    answer: "Air Staff"
  },
  {
    question: "11. How are Air Staff responsibilities organized? (5.15)",
    answer: "Based on functional two-letter organizations"
  },
  {
    question: "12. What are USAF subdivisions directly subordinate to a HAF functional manager? (5.15)",
    answer: "Field Operating Agencies (FOAs)"
  },
  {
    question: "13. What type of subdivision are the Air Force Personnel Center and Air Force Officer of Special Investigations? (5.15)",
    answer: "Field Operating Agencies (FOAs) "
  },
  {
    question: "14. What are USAF subdivisions directly subordinate to the Chief of Staff of the Air Force called? (5.15)",
    answer: "Direct Reporting Units (DRUs)"
  },
  {
    question: "15. Who performs a mission that does not fit into any of the major commands but has many of the same administrative and organizational responsibilities? (5.15)",
    answer: "Direct Reporting Unit (DRU)"
  },
  {
    question: "16. What type of units are the Air Force District of Washington (AFD) and the USAF Academy? (5.15)",
    answer: "Direct Reporting units (DRUs)"
  },
  {
    question: "17. Which direct reporting unit was reactivated in 2005 to address three broad objectives: \n(1) align the USAF command structure in the National Capital Region and abroad; \n(2) improve USAF support to the Joint Force Headquarters-National Capital Region; \nand (3) designate a single voice for USAF cross-service issues in the National Capital Region? (5.15)",
    answer: "Air Force District of Washington"
  },
  {
    question: "18. How are major commands (MAJCOMs) organized in the United States and overseas? (5.15)",
    answer: "Functionally in the United States and geographically overseas"
  },
  {
    question: "19. Who represents a major USAF subdivision having a specific portion of the USAF mission? (5.15)",
    answer: "Major command (MAJCOM)"
  },
  {
    question: "20. Each major command (MAJCOM) is directly subordinate to whom? (5.15)",
    answer: "Headquarters Air Force"
  },
  {
    question: "21. Major commands (MAJCOMs) are interrelated and conplementary, providing offensive, defensive, and support elements. Which command consists (in whole or in part) of strategic, tactical, space, or defense forces, or of flying forces that directly support such forces? (5.15)",
    answer: "Operational command \nNote: A support command may provide supplies, weapon systems, support systems, operational support equipment, combat material, maintenance, surface transportation, education and training, special services, and other supported organizations. (5.15)"
  },
  {
    question: "22. What are the two specialized types of major commands (MAJCOMs) within the Air Force MAJCOM structure? (5.15)",
    answer: "Lead MAJCOMs and Component MAJCOMs"
  },
  {
    question: "23. Which type of major command (MAJCOM) consolidates responsibilities for a particular function in a single MAJCOM, supporting the entire USAF, as applicable? (5.15)",
    answer: "Lead MAJCOM \nNote: Air Education and Training Command is the Lead MAJCOM for education and training for the Air Force."
  },
  {
    question: "24. Which major command (MAJCOM) is the type of MAJCOM that is the USAF Component to a unified CCMD? (5.15)",
    answer: "Component MAJCOM \nNote: An example of a Component MAJCOM (C-MAJCOM) is Pacific Air Forces, the USAF Component to United States Indo-Pacific Command."
  },
  {
    question: "25. Can a major command (MAJCOM) be both a Lead MAJCOM and a Component MAJCOM (C-MAJCOM)? (5.15)",
    answer: "YES"
  },
  {
    question: "26. Which command, activated as a MAJCOM on 1 June 1992 and is headquartered at Joint Base Langley-Eustis, Virginia, is the primary provider of air combat forces to America's warfighting commanders? (5.15)",
    answer: "Air Combat Command (ACC)"
  },
  {
    question: "27. Whose mission is to support global implementation of the national security strategy by operating fighter, bomber, reconnaissance, battle-management, and electronic-combat aircraft? (5.15)",
    answer: "Air Combat Command (ACC) \nNote: It also provides command, control, communications, and intelligence systems, conducts global information operations, and  has responsibility for inland search and rescue operations in the 48 contiguous states."
  },
  {
    question: "28. Which command, activated as a MAJCOM on 1 June 1992 and headquartered at Scott Air Force Base, Illinois, is the USAF Component to U.S. Transportation Command? (5.15)",
    answer: "Air Mobility Command (AMC)"
  },
  {
    question: "29. Whose mission is to provide global air mobility, the right effects, right place, right time? This command plays a crucial role in providing humanitarian support at home and around the world, and provides airlift and aerial refueling for all U.S. Armed Forces. (5.15)",
    answer: "Air Mobility Command (AMC)"
  },
  {
    question: "30. Which command was activated as a MAJCOM on 3 August 1944 and is headquartered at Joint Base Pearl Harbor-Hickam, Hawaii? Its area of responsibility is home to 60 percent of the world's population in 36 nations across 52 percent of the Earth's surface. (5.15)",
    answer: "Pacific Air Forces (PACAF) \nNote: The unique location of the strategic triangle (Hawaii-Guam-Alaska) gives our Nation persistent presence and options to project airpower from sovereign territory."
  },
  {
    question: "31. Which command, activated as a MAJCOM on 20 April 2012 and headquartered at Ramstein Air base, Germany, is a combined organization that provides two separate CCMDs? (5.15)",
    answer: "United States Air Forces in Europe and Air Forces Africa (USAFE-AFAFRICA)"
  },
  {
    question: "32. Which command plans, conducts, controls, coordinates, and supports air and space operations in Europe, parts of Asia, and all of Africa with the exception of Egypt, to achieve United States and North Atlantic Treaty Organization objectives? (5.15)",
    answer: "United States Air Forces in Europe and Air Forces Africa (USAFE-AFAFRICA)"
  },
  {
    question: "33. Which command was activated as a MAJCOM on 1 July 1993 and is headquartered at Joint Base San Antonio-Randolph, Texas? Its mission is to recruit, train, and educate exceptional Airmen. (5.15)",
    answer: "Air Education and Training Command (AETC) \nNote: Air Education and Training Command's (AETC's) training mission makes it the first command to touch the lives of nearly every USAF member."
  },
  {
    question: "34. Which command was activated as a MAJCOM on 1 July 1992 and is headquartered at Wright-Patterson Air Force Base, Ohio? Its mission is to equip the USAF for world-dominant airpower. (5.15)",
    answer: "Air Force Materiel Command (AFMC)"
  },
  {
    question: "35. Which command was activated as a MAJCOM on 22 May 1990 and is headquartered at Hurlburt Field, Florida? Its mission is to provide our nation's specialized airpower, capable across the spectrum of conflict: any place, anytime, anywhere. (5.15)",
    answer: "Air Force Special Operations Command (AFSOC) \nNote: AFSOC provides highly trained, rapidly deployable Airmen for global special operations missions ranging from precision application of firepower to infiltration, exfiltration, resupply, and refueling of operational elements for worldwide deployment and assignment to regional unified commands."
  },
  {
    question: "36. Which warfare center,  headquartered at Hurlburt Field, Florida, organizes, trains, educates, and equips forces to conduct special operations missions? It leads MAJCOM irregular warfare activities; executes special operations test and evaluation and lessons learned programs; and develops doctrine, tactics, techniques, and procedures for Air Force special operations missions. (5.15)",
    answer: "Air Force Special Operations Air Warfare Center"
  },
  {
    question: "37. Which command was activated as a MAJCOM on 7 August 2009, is headquartered at Barksdale Air Force Base, Louisiana, and is one of two USAF Service Components of U.S. Strategic Command? Its mission is to provide strategic deterrence, global strike, and combat suppor: anytime, anywhere. (5.15)",
    answer: "Air Force Global Strike Command (AFGSC)"
  },
  {
    question: "38. Which command is responsible for the Nation's three intercontinental ballistic missile wings, the USAF's entire bomber force, the Long-Range Strike Bomber Program? It is also responsible for operational and maintenance support to organizations within the nuclear enterprise. (5.15)",
    answer: "Air Force Global Strike Command (AFGSC)"
  },
  {
    question: "39. Which command is the guardian of the most powerful weapons on the planet and is the force provider for two legs of the nuclear triad? (5.15)",
    answer: "Air Force Global Strike Command (AFGSC)"
  },
  {
    question: "40. Which command was activated as a MAJCOM on 17 February 1997, and is headquartered at Robins Air Force Base, Georgia? Its mission is to provide combat-ready forces to fly, fight, and win. (5.15)",
    answer: "Air Force Reserve Command (AFRC) \nNote: AFRC provides the USAF approximately 20 percent of the Total Force for about 5 percent of the manpower budget."
  },
  {
    question: "41. Which command commander is responsible for organizing, training, and equipping all USAF Reserve units? (5.15)",
    answer: "Air Force Reserve Command (AFRC)"
  },
  {
    question: "42. Which command is an administrative level directly under a major command (MAJCOM) (5.16)",
    answer: "Numbered Air Force"
  },
  {
    question: "43. Which command provides intermediate level operational leadership and supervision? They do not have complete functional staffs. (5.16)",
    answer: "Numbered Air Forces \nNote: A Numbered Air Force (NAF) is assigned subordinate units, such as wings, groups, and squadrons."
  },
  {
    question: "44. In which command does the nubmer of personnel assigned vary, not to exceed 99 manpower authorizations without an approved waiver? (5.16)",
    answer: "Non-component Numbered Air Forces (NAFs)"
  },
  {
    question: "45. Which command is nicknamed \"warfighting headquarters\" and structured to perform an operational and warfighting mission in support of a Joint Force Commander? (5.16)",
    answer: "A component Numbered Air Force (C-NAF)"
  },
  {
    question: "46. What are the primary operational-level warfighting component commands? (5.16)",
    answer: "The 10 Component Numbered Air Forces (C-NAFs)"
  },
  {
    question: "47. The Component Numbered Air Force (C-NAF) headquarters normally consists of an Air Force forces staff and an assigned air and space operations center or operations center. To whom are they dedicated to supporting across the full range of military operations? (5.16)",
    answer: "Unified CCDR and subordinate Joint Force Commanders"
  },
  {
    question: "48. Which commander, assigned as the Commander of Air Force Forces to a geographic CCMD, will normally also be designated as the theater Joint Force Air Component Commander. (5.16)",
    answer: "Component Numbered Air Force (C-NAF) commander"
  },
  {
    question: "49. Which command is a level of command below the Numbered Air Force and has a distinct mission with significant scope? (5.16)",
    answer: "Wing \nNote: A wing is responsible for maintaining the installation and may have several squadrons in more than one dependent group."
  },
  {
    question: "50. What are the different types of wings? (5.16)",
    answer: "Operational, air base, or specialized mission"
  },
  {
    question: "51. What is the minimum adjusted population of wings? (5.16)",
    answer: "At least 1,000"
  },
  {
    question: "52. Which wing is one that has an operations group and related operational mission activity assigned? (5.16)",
    answer: "Operational wing \nNote: When an operational wing performs the primary mission of the base, it usually maintains and operates the base."
  },
  {
    question: "53. When an operational wing is a tenant unit, who typically provides base and logistics support? (5.16)",
    answer: "The host command"
  },
  {
    question: "54. Which type of wing performs a support function rather than an opertional mission? This type of wing maintains and operates a base (5.16)",
    answer: "Air base wing \nNote: An air base wing often provides functional support to a MAJCOM headquarters. (5.16)"
  },
  {
    question: "55. Which type of wing performs a specialized mission and usually does not have an aircraft or missiles assigned? (5.16)",
    answer: "Specialized mission wing \nNote: Intelligence wings and training wings are examples."
  },
  {
    question: "56. Which command is a level of command below the wing? (5.16)",
    answer: "Group"
  },
  {
    question: "57. Which group (unit) is a mission, logistics, support, medical, or large functional unit, such as a civil engineer group. (5.16)",
    answer: "Dependent group"
  },
  {
    question: "58. Which group (unit) has the same functions and responsibilities as a like-type wing, but its scope and size do not warrant wing-level designation? (5.16)",
    answer: "Independent group"
  },
  {
    question: "59. What is the minimum adjusted population of groups? (5.16)",
    answer: "At least 400"
  },
  {
    question: "60. Which unit is the basic unit, the nucleus, and the basic building block of the USAF? (5.16)",
    answer: "Squadron"
  },
  {
    question: "61. What are two types of squadrons? (5.16)",
    answer: "Mission units and functional units"
  },
  {
    question: "62. What is the minimum adjusted population of a squadron? (5.16)",
    answer: "At least 35"
  },
  {
    question: "63. If internal subdivision within a squadron is required, what type of filghts may be established? (5.16)",
    answer: "Numbered/named, alpha, or functional flights"
  },
  {
    question: "64. Which flight primarily incorporates smaller elements into an organized unit? (5.16)",
    answer: "Numbered or named flights"
  },
  {
    question: "65. Which flights are part of a squadron (usually a mission squadron) and are composed of several elements that perform identical missions? (5.16)",
    answer: "Alpha flights"
  },
  {
    question: "66. Which flights are usually part of a squadron and are composed of elements that perform specific missions? (5.16)",
    answer: "Functional flights"
  },
  {
    question: "67. What are subdivisions of flights? (5.16)",
    answer: "Elements \nNote: Typically, flights are broken into three or four evenly distributed elements, when necessary."
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
