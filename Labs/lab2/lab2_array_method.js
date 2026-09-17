/*
Purpose: practicing array methods:
forEach()
map()
reduce()
filter()
search()
 */

const couseList = ["COMP3123", "COMP3122", "COMP1238", "FASH1023"]
couseList.forEach((course) => {
    console.log(course + "!")
})

const filteredCourses = couseList.filter((currentElement) => {
    return currentElement[0] === "C"
})

console.log(filteredCourses)