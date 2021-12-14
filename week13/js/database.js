const baseCourse = {
    courseName : 'Math13',
    grade : "3rd High School",
    profile : 'Profe Alex',
    modules : [
        {
            moduleNumber : 1,
            name : 'Algebra',
            topics : [
                {
                    topicNumber : 1,
                    topicName : 'Logarithms',
                    subtopicsVideos : [
                        {
                            subtName : 'Introduction',
                            subtOrder : 1,
                            subtLink : 'pZTuEHrnOMg'
                        },
                        {
                            subtName : 'Logaritmo Natural',
                            subtOrder : 2,
                            subtLink : 'C0BIfEB0eJM'
                        },
                        {
                            subtName : 'Logaritmo de un numero',
                            subtOrder : 3,
                            subtLink : '6kiXVr3mVp8'
                        },
                        {
                            subtName : 'Logaritmo de un producto',
                            subtOrder : 4,
                            subtLink : '6kiXVr3mVp8'
                        }
                    ]
                }
                
            ]
        },
        {
            moduleNumber : 2,
            name : 'Geometry',
            topics : [
                {
                    topicNumber : 1,
                    topicName : 'Volume and Area of solids',
                    subtopicsVideos : [
                        {
                            subtName : 'Introduction',
                            subtOrder : 1,
                            subtLink : 'W5yMHQXpoQs'
                        },
                        {
                            subtName : 'Volumen del prisma recto',
                            subtOrder : 2,
                            subtLink : 'N50Q0ZctD2U'
                        },
                        {
                            subtName : 'Base polígono regular',
                            subtOrder : 3,
                            subtLink : 'N8q0pk6hfCQ'
                        }
                    ]
                }
                
            ]
        }
    ]
}

const courses = [
    {
        courseName : 'Math13',
        courseLongName : 'Math for Chilean High School 3rd Grade',
        languaje : 'Spanish',
        grade : "3rd High School",
        profile : 'Profe Alex',
        modules :   [
                    ]
    },
    {
        courseName : 'English15',
        courseLongName : 'English for Basic Level Speakers',
        languaje : 'English',
        grade : "3rd High School",
        profile : 'Various teachers',
        modules :   [
                    ]
    },
    {
        courseName : 'Math12',
        courseLongName : 'Math for Chilean High School 2nd Grade',
        languaje : 'Spanish',
        grade : "2nd High School",
        profile : 'Profe Alex',
        modules :   [
                    ]
    },
    {
        courseName : 'Math11',
        courseLongName : 'Math for Chilean High School 1st Grade',
        languaje : 'Spanish',
        grade : "1st High School",
        profile : 'Profe Alex',
        modules :   [
                    ]
    },
    {
        courseName : 'Math14',
        courseLongName : 'Math for Chilean High School 4th Grade',
        languaje : 'Spanish',
        grade : "4th High School",
        profile : 'Profe Alex',
        modules :   [
                    ]
    },
    {
        courseName : 'Math08',
        courseLongName : 'Math for Chilean Primary School 8th Grade',
        languaje : 'Spanish',
        grade : "8th Primary School",
        profile : 'Profe Alex',
        modules :   [
                    ]
    },
    {
        courseName : 'Math07',
        courseLongName : 'Math for Chilean Primary School 7th Grade',
        languaje : 'Spanish',
        grade : "7th Primary School",
        profile : 'Profe Alex',
        modules :   [
                    ]
    },
    {
        courseName : 'Math06',
        courseLongName : 'Math for Chilean Primary School 6th Grade',
        languaje : 'Spanish',
        grade : "6th Primary School",
        profile : 'Profe Alex',
        modules :   [
                    ]
    },
    {
        courseName : 'Math05',
        courseLongName : 'Math for Chilean Primary School 5th Grade',
        languaje : 'Spanish',
        grade : "5th Primary School",
        profile : 'Profe Alex',
        modules :   [
                    ]
    },
    {
        courseName : 'Math04',
        courseLongName : 'Math for Chilean Primary School 4th Grade',
        languaje : 'Spanish',
        grade : "4th Primary School",
        profile : 'Profe Alex',
        modules :   [
                    ]
    },
    {
        courseName : 'Math03',
        courseLongName : 'Math for Chilean Primary School 3rd Grade',
        languaje : 'Spanish',
        grade : "3rd Primary School",
        profile : 'Profe Alex',
        modules :   [
                    ]
    },
    {
        courseName : 'Math02',
        courseLongName : 'Math for Chilean Primary School 2nd Grade',
        languaje : 'Spanish',
        grade : "2nd Primary School",
        profile : 'Profe Alex',
        modules :   [
                    ]
    },
    {
        courseName : 'Math01',
        courseLongName : 'Math for Chilean Primary School 1st Grade',
        languaje : 'Spanish',
        grade : "1st Primary School",
        profile : 'Profe Alex',
        modules :   [
                    ]
    }
]

export function get_courseDetail(course = null, profile = 'default') {
    let answer = baseCourse;
    //console.log("answer: ", answer);
    return answer;
}
export function get_courses(courseGrade) {
    console.log("courseGrade: ", courseGrade);
    if (courseGrade == 'All') {
        return courses;
    }
    else {
        let answer = [];
        courses.forEach(course => {
            if (course.grade == courseGrade) {
                answer.push(course);
            }
        });
        return answer; 
    }
}