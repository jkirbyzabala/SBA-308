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
  
getLearnerData(CourseInfo, AssignmentGroup,[LearnerSubmissions]) 

// Try Catch // 
// This confirms that the course-id for an Assignment Group is correct

try {
	if (AssignmentGroup.course_id === CourseInfo.id) {
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

LearnerSubmissions.forEach(function(learnerHandedIn) {
    const learnerId = learnerHandedIn.learner_id;
    const assignments = AssignmentGroup.assignments;
    const learnerAssignments = LearnerSubmissions.filter(function(eachPerson) {
        return eachPerson.learner_id ===learnerId;

    });

    let weightedGrade = 0;
    let totalGrade = 0;
    
}