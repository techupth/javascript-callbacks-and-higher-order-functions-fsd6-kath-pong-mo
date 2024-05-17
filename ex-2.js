//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let keepArray = [];
  for (let i = 0; i < array.length; i++) {
    if (operation(array[i])) {
      keepArray.push(operation(array[i]));
    }
  }

  if (keepArray.length >= 5) {
    return "ผ่านเกณฑ์ ✅";
  } else {
    return "ไม่ผ่านเกณฑ์ ❌";
  }
}

function scores(studentScores) {
  if (studentScores > 70) {
    return studentScores;
  }
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here
atLeastFive(studentScoresRoom2, scores);

let scoreRoom1Result = atLeastFive(studentScoresRoom1, scores);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, scores);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, scores);

console.log("นักเรียนห้องที่ 1 " + scoreRoom1Result);
console.log("นักเรียนห้องที่ 2 " + scoreRoom2Result);
console.log("นักเรียนห้องที่ 3 " + scoreRoom3Result);
