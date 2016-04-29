/*
Pagination Content Filter:
*/

// Global variables
var studentsPerPage = 10;
var totalStudents = $(".student-list").find(".student-item");
var numofLinks = Math.ceil(totalStudents.length / studentsPerPage);

console.log(numofLinks);

console.log(totalStudents);


// appends search to page
$(".page-header").append('<div class="student-search"><input placeholder="Search for students..."><button>Search</button></div>');


// Pagination:

// hiding all students when the page first loads
$(".student-item").hide();

// appending the pagination div and child ul
$(".page").append('<div class="pagination"><ul></ul></div>');

// showing the first 10 students
var $studentsPerPage = $(".student-item:lt(10)").show();


// adding pagination links

// if (totalStudents / 10 > 0) {
//   $(".pagination ul").append('<li><a href="#">2</a></li>');
// }

for (var i = 1; i < numofLinks; i++) {
  $(".pagination ul").append('<li><a href="#">' + [i] + '</a></li>');
}

// adding active class to first link when the page loads

$("ul li a:first-child").addClass("active");
