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

export function get_courseDetail(course = null, profile = 'default') {
    let answer = baseCourse;
    //console.log("answer: ", answer);
    return answer;
}