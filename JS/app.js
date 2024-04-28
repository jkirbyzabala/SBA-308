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
        score: 140
      }
    }
  ];
  
//   function getLearnerData(CourseInfo, AssignmentGroup,[LearnerSubmissions]) 


  


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

try {
    AssignmentGroup.assignments.forEach(assignment => {
    if (assignment.points_possible <= 0) {
        throw "ERROR: points_possible must be > 0";
    } else {
        throw "confirmed points_possible is > 0"
    }
 });   
    } catch (error) {
        console.log(error, 'ERROR');
    }

