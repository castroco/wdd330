import { get_courseDetail, get_courses } from './database.js';
import { displayCourse } from './display.js';

let data = get_courseDetail();
//console.log("data: ", data);
displayCourse(data,'#nav1');
let courses = get_courses('3rd High School');
console.log("courses: ", courses);

