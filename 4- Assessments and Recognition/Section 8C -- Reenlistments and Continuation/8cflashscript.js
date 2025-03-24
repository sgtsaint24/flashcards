const flipButton = document.getElementById('flipButton');
const nextButton = document.getElementById('nextButton');
const flashcard = document.getElementById('flashcard');

// Flashcard data
const flashcards = [
  {
    question: "1. What does the Selective Reenlistment Program ensure? (8.10)",
    answer: "USAF retains those who consistently demonstrate the capability and willingness of maintaining high professional standards"
  },
  {
    question: "2. Within how many months of their expiration of term of service do first-term Airmen receive selective reenlistment consideration? (8.10)",
    answer: "15 months"
  },
  {
    question: "3. Within how many months of the original expiration of term of service are second term and career Airmen with less than 19 years of total active federal military service considered for selective reenlistment? (8.10)",
    answer: "13 months"
  },
  {
    question: "4. When do career Airmen receive selective reenlistment consideration upon completing 20 years of total active federal military service? (8.10)",
    answer: "Within 13 months"
  },
  {
    question: "5. Once career Airmen have served beyond 20 years of total active federal military service, when do they receive selective reenlistment consideration? (8.10)",
    answer: "Each time they are within 13 months of their original expiration of term of service"
  },
  {
    question: "6. When determining if a member may reenlist, what do commadners and civilian directors consider? (8.11)",
    answer: "(a) Enlisted performance report ratings \n(b) Unfavorable information from any substantiated source \n(c) The Airman's willingness to comply with USAF standards \n(d) The Airman's ability (or lack thereof) to meet required training and duty performance levels"
  },
  {
    question: "7. What should supervisors do before making a recommendation to unit commanders and civilian directors concerning the Airman's career potential? (8.11)",
    answer: "(a) Carefully evaluate the Airman's duty performance \n(b) Review the Airman's personnel records \n(c) Review the DAF Form 1137, Unfavorable Information File Summary, if applicable"
  },
  {
    question: "8. If an Airman is not selected for reenlistment, which form is completed, and the Airman is informed of the decision? (8.11)",
    answer: "DAF Form 418, Selective Reenlistment Program (SRP) Consideration/Denial of Continued Service for Airmen"
  },
  {
    question: "9. If an Airman is not selected for reenlistment, an DAF Form 418 is completed, and the Airman is informed of the decision. What must the commander make sure the Ariman understands? (8.11)",
    answer: "The right to appeal the decision"
  },
  {
    question: "10. If an Airman is not selected for reenlistment, an AF Form 418 is completed. What happens afterwards? (8.11)",
    answer: "(a) The Airman has up to three calendar days to render an appeal intent \n(b) The Airman must submit the appeal to the military personnel flight within 10 calendar days of the date he or she renders the appeal intent on the form \nNote: The commander sends the completed form to the military personnel section after the Airman signs and initials the appropriate blocks."
  },
  {
    question: "11. What is the specific appeal authority to appeal selective reenlistment program non-selection decisions based on? (8.11)",
    answer: "Airman's total active federal military service"
  },
  {
    question: "12. Who is the selective reenlistment program appeal authority for first-term Airmen and career Airmen who will complete at least 20 years of total active federal military service on their current expiration of term of service? (8.11)",
    answer: "Their respective group commander"
  },
  {
    question: "13. Who is the selective reenlistment program appeal authority for second term and career Airmen who will complete fewer than 16 years of total active federal military service on their current expiration of term of service? (8.11)",
    answer: "Their respective wing commander"
  },
  {
    question: "14. Which program extended the length of reenlistments for RegAF Airmen, streamlining the reenlistment and extension process and alleviating unnecessary administrative actions for Airmen, supervisor chains, and military personnel flights? (8.12)",
    answer: "Noncommissioned Officer Career Status Program"
  },
  {
    question: "15. How many years of total active federal military service on date of discharge must selected Airmen have to be reenlisted for an unspecified period? These Airmen will serve up to their High Year of Tenure based on current grade, or if promoted, projected grade. (8.12)",
    answer: "At least 12 years"
  },
  {
    question: "16. When may eligible Airmen who serve 20 or more years of total active federal military service retire? (8.12)",
    answer: "No later than the first day of the month following High Year of Tenure"
  },
  {
    question: "17. What is the purpose of the Career Job Reservation (CJR) Program? (8.13)",
    answer: "To assist in the management of first-term Airmen reenlistments by Air Force Specialty Code (AFSC) to prevent surpluses and shortages"
  },
  {
    question: "18. What must all eligible first-term Airmen have in order to reenlist? (8.13)",
    answer: "An approved Carrer Job Reservation(CJR)"
  },
  {
    question: "19. When are Airmen automatically placed on the career job applicant list? (8.13)",
    answer: "The 1st duty day of the month during which they complete 35 months on their current enlistment (59 months for six-year enlistees), but no later than the last duty day of the month during which they complete 43 months on their current enlistment (67 months for six-year enlistees)"
  },
  {
    question: "20. What must Airmen do to keep their approved Career Job Reservation (CJR)? (8.13)",
    answer: "Reenlist on or before the CJR expiration date"
  },
  {
    question: "21. In which AFSCs do first-term Airmen have limited quotas, when available and compete for a CJR? (8.13)",
    answer: "Constrained AFSCs"
  },
  {
    question: "22. At what command level are CJRs approved? (8.13)",
    answer: "Group commander level or equivalent"
  },
  {
    question: "23. When may commanders or civilian directors recommend First Term Airmen for award of a CJR? (8.13)",
    answer: "Anytime during the Airman's CJR window"
  },
  {
    question: "24. What conditions must be met in order to be considered for a CJR? (8.13)",
    answer: "Airmen's evaluations must reflect that the member has met the minimum expectation; not have an unfavorable information file, lost time, or record of active nonjudicial punishment on their current enlistment"
  },
  {
    question: "25. Which Airmen, whose AFSC was removed from the constrained list, will receive a CJR? (8.13)",
    answer: "Airmen who were on the CJR waiting list prior to the AFSC being removed"
  },
  {
    question: "26. When does an Airman's approved CJR expire? (8.13)",
    answer: "On the Airman's date of separation"
  },
  {
    question: "27. When are Airmen in unconstrained AFSCs automatically awarded the CJR? (8.13)",
    answer: "On the first duty day of the month during which they complete 35 months on their current enlistment (59 months for six-year enlistees), but no later than the last duty day of the month during which they complete 43 months on their current enlistment (67 months for six-year enlistees). "
  },
  {
    question: "28. When may Airmen serving on an active enlistment request an enlistment extension? (8.14)",
    answer: "If he or she has a service-directed retainability reason and the extension is in the best interest of the Air Force"
  },
  {
    question: "29. In what time increments are extensions granted? (8.14)",
    answer: "In whole-month increments"
  },
  {
    question: "30. What is the maximum limit for voluntary extensions for all Airmen per enlistment? (8.14)",
    answer: "48 months \nNote: In the event that Air Force specialties are constrained, the Air Staff may limit first-term Airmen extensions to a specified period. \nNote: Certain situations (such as citizenship pending) may warrant exceptions to policy."
  },
  {
    question: "31. When may Airmen be eligible to request an extension of enlistment to establish a date of separation at high year of tenure? (8.14)",
    answer: "To separate or retire--normally, Airmen must be within two years of their high year of tenure before they can extend."
  },
  {
    question: "32. Once approved, an extension has the legal effect of the enlistment agreement by extending the Airman's period of obligated service. When can enlistment extensions be canceled? (8.14)",
    answer: "Only when the reason for the extension no longer exists, if the Airman has not already entered into the extension"
  },
  {
    question: "33. What is a monetary incentive paid to Airmen serving in certain selected critical military skills who reenlist for additional obligated service? (8.15)",
    answer: "Selective Retention Bonus (SRB)"
  },
  {
    question: "34. What monetary incentive is intended to encourage the reenlistment of sufficient numbers of qualified enlisted personnel in military skills with either demonstrated retention shortfalls or high training costs? (8.15)",
    answer: "Selective Retention Bonus (SRB)"
  },
  {
    question: "35. What is the minimum amount of years needed to extend enlistment for those Airmen in Selective Retention Bonus (SRB) skills who are eligible for an SRB providing they meet additional criteria? (8.15)",
    answer: "Three years \nNote: Airmen can expect to serve in the Selective Retention Bonus (SRB) specialty for the entire enlistment for which the bonus was paid."
  },
  {
    question: "36. Selective Retention Bonus (SRB) designations are established by zones, which are determined by the total regular Air Force federal military service of Airmen at the time of reenlistment or the date they enter the extension. What are they? (8.15)",
    answer: "Zone A--Airmen reenlisting between 17 months and 6 years. \nZone B--Airmen reenlisting between 6 and 10 years. \nZone C--Airmen reenliisting between 10 and 14 years. \nZone E--Airmen reenlisting between 18 and 20 years. \nNote: Eligible Airmen may receive an SRB in each zone (A, B, C or E), but only one SRB per zone. (8.15)"
  },
  {
    question: "37. How does the Air Force calculate the Selective Retention bonuses (SRBs)? (8.15)",
    answer: "One month's base pay, multiplied by the number of years reenlisting or extending, multiplied by the SRB multiple as listed on the authorized SRB listing"
  },
  {
    question: "38. What is the maximum Selective Retention Bonus (SRB) paid per zone? (8.15)",
    answer: "$100,000"
  },
  {
    question: "39. Which pay date is used to calculate the Selective Retention Bonus (SRB)? (8.15)",
    answer: "Airman's base pay on the date of discharge \nNote: If an Airman was promoted to Staff Sergeant on 1 May and reenlisted on 1 May, the SRB would be calculated on the base pay of the day prior to the reenlistment as Senior Airman."
  },
  {
    question: "40. What is a force management tool used primarily to balance career fields (officer and enlisted) across all AFSCs, and to ensure sustainability of career fields? (8.16)",
    answer: "Retraining \nNote: Airmen maybe selected for involuntary retraining based on USAF needs."
  },
  {
    question: "41. What provides a means to return disqualified Airmen to a productive status? (8.16)",
    answer: "Retraining"
  },
  {
    question: "42. Which program allows a limited number of Airmen the opportunity to pursue other career paths in the Air Force? (8.16)",
    answer: "Retraining program"
  },
  {
    question: "43. What is a living document found on myFSS, maintained by the Air Force Personnel Center as a key tool used to advise members of retraining opportunities? (8.16)",
    answer: "Online Retraining Advisory"
  },
  {
    question: "44. Which AFMAN offers additional information on retraining eligibility and application procedures. (8.16)",
    answer: "AFMAN 36-2100"
  },
  {
    question: "45. When may Airmen assigned to the continental United States apply for retraining under the first-term Airmen retraining program? (8.16)",
    answer: "Not earlier than the first duty day of the month during which they complete 35 months of their current enlistment (59 months for six-year enlistees), but not later than the last duty day of the 43rd month of their current enlistment (67 months for six-year enlistees)"
  },
  {
    question: "46. When may Airmen assigned outside the continental United States apply for retraining under the first-term Airmen retraining program? (8.16)",
    answer: "Nine to 15 months prior to the date they are eligible to return from overseas if serving within their normal first-term window (35th month for four-year enlistees or 59th month for six-year enlistees) \nNote: Airmen with an indefinite return from overseas date must complete the original tour length before departing for retraining."
  },
  {
    question: "47. When does the Air Force pesronnel center selects the most eligible Airmen for retraining based on quality indicators? (8.16)",
    answer: "On the last duty day of each month"
  },
  {
    question: "48. Which program is designed to retrain second term and career Airmen from overage USAF specialties into shortage specialties to optimize the enlisted force and to best meet current and future mission needs? (8.16)",
    answer: "NCO retraining program \nNote: Airmen possessing a secondary or additional AFSC in a shortage skill may be returned to the shortage skill if in the best interest of the USAF."
  },
  {
    question: "49. What are the two phases of the NCO retraining program? (8.16)",
    answer: "Phase 1--obtain volunteer applicants from identified overage AFSCs to fill requirements in shortage specialty codes. \nPhase 2--Airmen will be selected for mandatory retraining based on USAF needs to balance the force. \nNote: During Phase 1, if sufficient applications are not received and retraining objectives for the fiscal year are not met, implementation of Phase 2 is necessary."
  },
  {
    question: "50. In Phase 2, Airmen will be selected for mandatory retraining based on USAF needs to balance the force. Which list is used to select Airmen for mandatory retraining? (8.16)",
    answer: "Master vulnerability list"
  },
  {
    question: "51. Which program addresses manning shortages and overages by conducting a crossflow panel when needed to select the best qualified officers to fill the required vacancies? (8.17)",
    answer: "Nonrated Line Crossflow Program \nNote: Out-of-cycle crossflow reqeusts, as well as initial skills training reclassification, are additional programs to ensure the balance of officer career fields"
  },
  {
    question: "52. Which program is a process ensuring the Nuclear and Missile Operations (13N) Air Force specialty remains balanced for sustainment by crossflowing excess officers at the four-year point back to donor career fields? (8.17)",
    answer: "Missileer Crossflow Program"
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
