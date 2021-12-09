import { get_courseDetail } from './database.js';
import { displayCourse } from './display.js';

let data = get_courseDetail();
//console.log("data: ", data);
displayCourse(data,'#nav1');