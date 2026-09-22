const ASSIGNMENT_MAX = 20;
const MIDTERM_MAX = 30;
const FINAL_MAX = 50;
const TOTAL_MAX = ASSIGNMENT_MAX + MIDTERM_MAX + FINAL_MAX; 


const studentScenarios = [

  {
    name: "Muhammad Asawar",
    regNo: "FA24-BCS-242723",
    program: "BS Computer Science",
    semester: "5th",
    cgpa: 3.5,
    attendance: 85,
    assignment: 19,
    midterm: 29,
    final: 49
  },
 
  {
    name: "Muhammad Abbas",
    regNo: "FA24-BCS-242708",
    program: "BS Software Engineering",
    semester: "5th",
    cgpa: 3.0,
    attendance: 83,
    assignment: 15,
    midterm: 20,
    final: 30
  },
  
  {
    name: "Abdul Wahab",
    regNo: "FA24-BCS-2427828",
    program: "BS Computer Science",
    semester: "5th",
    cgpa: 3.6,
    attendance: 70,
    assignment: 18,
    midterm: 27,
    final: 45
  },
  
  {
    name: "Ammar Jmashaid",
    regNo: "FA24-BCS-243347",
    program: "BS Information Technology",
    semester: "5th",
    cgpa: 1.8,
    attendance: 60,
    assignment: 8,
    midterm: 10,
    final: 15
  }
];


function calculateAcademics(student) {
  
  const totalMarks = student.assignment + student.midterm + student.final;

 
  const percentage = (totalMarks / TOTAL_MAX) * 100;

  return {
    totalMarks: totalMarks,
    percentage: Math.round(percentage * 100) / 100 
  };
}

function calculateGrade(percentage) {
  let grade;

  // Comparison Operators: >=
  if (percentage >= 80) {
    grade = "A";
  } else if (percentage >= 70) {
    grade = "B";
  } else if (percentage >= 60) {
    grade = "C";
  } else if (percentage >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  return grade;
}


function getPassFailStatus(percentage) {
  // Comparison Operator: >=
  const isPassing = percentage >= 50;
  return isPassing ? "Passed" : "Failed";
}

// -----------------------------------------------------------
// Part G & H: Scholarship Eligibility (multiple categories)
// Demonstrates logical operators: && , || , !
// -----------------------------------------------------------
function getScholarshipStatus(student, percentage) {
  const cgpa = student.cgpa;
  const attendance = student.attendance;

  // Logical AND (&&): every condition must be true for Gold
  const qualifiesForGold =
    cgpa >= 3.7 && attendance >= 90 && percentage >= 85;

  // Logical AND (&&) combined with logical NOT (!):
  // qualifies for Silver only if NOT already Gold, and meets lower thresholds
  const qualifiesForSilver =
    !qualifiesForGold &&
    (cgpa >= 3.3 && attendance >= 80 && percentage >= 70);

  // Logical OR (||): if a student clearly misses the minimum bar
  // in any single area, they cannot receive any scholarship
  const clearlyIneligible = cgpa < 2.5 || attendance < 70 || percentage < 60;

  if (qualifiesForGold) {
    return "Gold Scholarship";
  } else if (qualifiesForSilver && !clearlyIneligible) {
    return "Silver Scholarship";
  } else {
    return "Not Eligible";
  }
}

// -----------------------------------------------------------
// Part I: Academic Warning System
// Uses logical operators (|| and !) to flag at-risk students
// -----------------------------------------------------------
function getAcademicStatus(percentage, attendance, cgpa) {
  // Logical OR (||): any one of these being true is serious
  const isCritical = percentage < 40 || cgpa < 2.0;

  // Logical NOT (!) combined with OR (||)
  const isWarning = !isCritical && (percentage < 60 || attendance < 75);

  if (isCritical) {
    return "Critical";
  } else if (isWarning) {
    return "Academic Warning";
  } else {
    return "Good Standing";
  }
}

// -----------------------------------------------------------
// Part J: Hoisting Demonstration (var vs let)
// This runs once when the page loads and prints results to the Console.
// Open the browser Console (F12) to see the difference.
// -----------------------------------------------------------
function hoistingDemonstration() {
  console.log("===== HOISTING DEMONSTRATION =====");

  // --- var example ---
  // 'var' declarations are hoisted to the top of the function and
  // initialized with 'undefined', so accessing it before assignment
  // does NOT throw an error, it simply prints "undefined".
  console.log("Accessing 'var' variable before assignment:", hoistedVar);
  var hoistedVar = "I am declared with var";
  console.log("Accessing 'var' variable after assignment:", hoistedVar);

  // --- let example ---
  // 'let' declarations are also hoisted, but they stay in the
  // "Temporal Dead Zone" until the line where they are declared.
  // Accessing them before that line throws a ReferenceError.
  try {
    console.log("Accessing 'let' variable before declaration:", hoistedLet);
  } catch (error) {
    console.log("Error accessing 'let' before declaration:", error.message);
  }
  let hoistedLet = "I am declared with let";
  console.log("Accessing 'let' variable after declaration:", hoistedLet);

  console.log("===================================");
}

// -----------------------------------------------------------
// Part K: Operators Demonstration
// Uses the ACTUAL student data (not unrelated numbers)
// -----------------------------------------------------------
function operatorsDemonstration(student, academics) {
  console.log("===== OPERATORS DEMONSTRATION =====");
  console.log("Using data for:", student.name);

  // Arithmetic Operators
  console.log("Addition (assignment + midterm):", student.assignment + student.midterm);
  console.log("Subtraction (final - midterm):", student.final - student.midterm);
  console.log("Multiplication (cgpa * 10):", student.cgpa * 10);
  console.log("Division (totalMarks / 3):", academics.totalMarks / 3);
  console.log("Modulus (totalMarks % 10):", academics.totalMarks % 10);

  // Comparison Operators
  console.log("Is percentage > 50?:", academics.percentage > 50);
  console.log("Is attendance < 75?:", student.attendance < 75);
  console.log("Is percentage >= 80?:", academics.percentage >= 80);
  console.log("Is cgpa <= 2.0?:", student.cgpa <= 2.0);
  console.log("Is percentage === 100?:", academics.percentage === 100);
  console.log("Is percentage !== 0?:", academics.percentage !== 0);

  // Logical Operators
  console.log(
    "Logical AND - cgpa >= 3.5 && attendance >= 85:",
    student.cgpa >= 3.5 && student.attendance >= 85
  );
  console.log(
    "Logical OR - cgpa < 2.0 || attendance < 70:",
    student.cgpa < 2.0 || student.attendance < 70
  );
  console.log("Logical NOT - !(percentage >= 50):", !(academics.percentage >= 50));

  console.log("====================================");
}

// -----------------------------------------------------------
// Part C & L: Display Student Info + Build Dynamic Final Report
// -----------------------------------------------------------
function displayStudent(student) {
  // Academic Calculation
  const academics = calculateAcademics(student);

  // Grade Calculation
  const grade = calculateGrade(academics.percentage);

  // Pass / Fail Decision
  const passFail = getPassFailStatus(academics.percentage);

  // Scholarship Eligibility
  const scholarship = getScholarshipStatus(student, academics.percentage);

  // Academic Warning System
  const academicStatus = getAcademicStatus(
    academics.percentage,
    student.attendance,
    student.cgpa
  );

  // ---- Part C: Display student info pulled from the object (not hard-coded) ----
  document.getElementById("stuName").textContent = student.name;
  document.getElementById("stuReg").textContent = student.regNo;
  document.getElementById("stuProgram").textContent = student.program;
  document.getElementById("stuSemester").textContent = student.semester;
  document.getElementById("stuCgpa").textContent = student.cgpa;
  document.getElementById("stuAttendance").textContent = student.attendance + "%";

  // Marks
  document.getElementById("stuAssignment").textContent = student.assignment + " / " + ASSIGNMENT_MAX;
  document.getElementById("stuMidterm").textContent = student.midterm + " / " + MIDTERM_MAX;
  document.getElementById("stuFinal").textContent = student.final + " / " + FINAL_MAX;
  document.getElementById("stuTotal").textContent = academics.totalMarks + " / " + TOTAL_MAX;
  document.getElementById("stuPercentage").textContent = academics.percentage + "%";

  // Results
  document.getElementById("stuGrade").textContent = grade;
  document.getElementById("stuPassFail").textContent = passFail;
  document.getElementById("stuAcademicStatus").textContent = academicStatus;
  document.getElementById("stuScholarship").textContent = scholarship;

  // Color-code the Academic Status
  const statusEl = document.getElementById("stuAcademicStatus");
  statusEl.className = "";
  if (academicStatus === "Good Standing") {
    statusEl.classList.add("status-good");
  } else if (academicStatus === "Academic Warning") {
    statusEl.classList.add("status-warning");
  } else {
    statusEl.classList.add("status-critical");
  }

  // ---- Part L: Dynamic Final Report ----
  const report =
    "================================\n" +
    "      STUDENT ACADEMIC REPORT\n" +
    "================================\n" +
    "Student Name:      " + student.name + "\n" +
    "Registration No:   " + student.regNo + "\n" +
    "Program:           " + student.program + "\n" +
    "Semester:          " + student.semester + "\n" +
    "CGPA:              " + student.cgpa + "\n" +
    "Attendance:        " + student.attendance + "%\n" +
    "Assignment Marks:  " + student.assignment + " / " + ASSIGNMENT_MAX + "\n" +
    "Midterm Marks:     " + student.midterm + " / " + MIDTERM_MAX + "\n" +
    "Final Exam Marks:  " + student.final + " / " + FINAL_MAX + "\n" +
    "Total Marks:       " + academics.totalMarks + " / " + TOTAL_MAX + "\n" +
    "Percentage:        " + academics.percentage + "%\n" +
    "Grade:             " + grade + "\n" +
    "Pass/Fail:         " + passFail + "\n" +
    "Academic Status:   " + academicStatus + "\n" +
    "Scholarship Status:" + scholarship + "\n" +
    "================================";

  document.getElementById("finalReport").textContent = report;

  // Operators demonstration run against this scenario's real data
  operatorsDemonstration(student, academics);

  console.log(report);
}

// -----------------------------------------------------------
// Event wiring
// -----------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const scenarioSelect = document.getElementById("scenarioSelect");
  const calculateBtn = document.getElementById("calculateBtn");

  // Run the hoisting demonstration once on page load (check the Console)
  hoistingDemonstration();

  // Part M: Log all four scenarios to the console for testing purposes
  console.log("===== TESTING ALL FOUR SCENARIOS =====");
  studentScenarios.forEach(function (student, index) {
    const academics = calculateAcademics(student);
    console.log(
      "Scenario " + (index + 1) + " (" + student.name + "): " +
      "Percentage=" + academics.percentage +
      ", Grade=" + calculateGrade(academics.percentage) +
      ", PassFail=" + getPassFailStatus(academics.percentage) +
      ", Scholarship=" + getScholarshipStatus(student, academics.percentage) +
      ", AcademicStatus=" + getAcademicStatus(academics.percentage, student.attendance, student.cgpa)
    );
  });
  console.log("=======================================");

  // Display the first scenario by default
  displayStudent(studentScenarios[0]);

  // Recalculate and display whenever the user picks a new scenario
  calculateBtn.addEventListener("click", function () {
    const selectedIndex = parseInt(scenarioSelect.value, 10);
    displayStudent(studentScenarios[selectedIndex]);
  });
});