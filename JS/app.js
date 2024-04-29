// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    // nested array
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }]
   
    
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: '140' //changed this to a string
      }
    }
  ];
  
function getLearnerData(CourseInfo, AssignmentGroup,LearnerSubmissions) {

// Try Catch // 
// This confirms that the course-id for an Assignment Group is correct

let isPartOfCourse = false;
try {
	if (AssignmentGroup.course_id === CourseInfo.id) {
        isPartOfCourse = true;
		console.log('Match');
	} else {
		throw "Mismatch - wrong course";
	} 
    } catch (error) {
	    console.log(error, 'ERROR');
    }

// This confirms the points_possible key in the nested assignments array is > 0
try {
    let zeroPointsPossible = false;

    AssignmentGroup.assignments.forEach(assignment => {
    if (assignment.points_possible <= 0) {
        zeroPointsPossible = true;
        }
    });

    if (zeroPointsPossible) {
        throw "ERROR: points_possible must be > 0";
    } else {
        console.log("All points_possible is > 0");
    } 
} catch (error) {
        console.log(error, 'ERROR');
}
// this for if loop confirms that Learner Submission score are number and not strings 

for (let i = 0; i < LearnerSubmissions.length; i++) {
    const element = LearnerSubmissions[i];

if (typeof element['submission']['score'] !== 'number') { // confirm whether to use brackets or . notation for nested arrays
    element['submission']['score'] = Number(element['submission']['score']); //Number converts to a Number
    console.log(`the value of score in Learner Submissions index ${i} is not a number`); //reminder you cannot use quotes
}
}

const result = [];

LearnerSubmissions.forEach(function(learnerHandedIn) { //forEach iterates over each object in LearnerSubmissions array 
    const learnerId = learnerHandedIn.learner_id; //finds the learner id property in the array assigns it to learnerId
    const assignments = AssignmentGroup.assignments; //finds the assignments prpoerty and assigns it to assignments 
    const learnerAssignments = LearnerSubmissions.filter(function(eachPerson) {
        return eachPerson.learner_id === learnerId; // this is a condition; if this is true it is include in the Learner Assignments array
    });

    let weightedGrade = 0; //created to track score
    let totalGrade = 0;

// this is for calculating the learner's weighted grade and total grade

learnerAssignments.forEach(function(hw) {
    const assignment = assignments.find(function(assignment) { //used find method to 
        return assignment.id === hw.assignment_id; // match the submitted hw with the id in the assignment array
    });

    const pointsPossible = assignment.points_possible;
    let score = hw.submission.score;

    const dateDue = assignment.due_at;
    const dateSubmitted = hw.submission.submitted_at;

    if (dateSubmitted > dateDue) {
        score -= (pointsPossible * 0.1); // deducting 10% if the assignment was late
    }

        weightedGrade += (score / pointsPossible) * (pointsPossible * AssignmentGroup.group_weight / 100);
        totalGrade += pointsPossible * (AssignmentGroup.group_weight / 100);
});


const learnerData = {
    id: learnerId,
    avg: weightedGrade / totalGrade * 100
};

result.push(learnerData);
});

return result;
}
const learnerData = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(learnerData);