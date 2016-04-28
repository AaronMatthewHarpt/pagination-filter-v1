/*
Pagination Content Filter:
*/
// Global variables
var studentsPerPage = 10;
var $totalStudents = $(".student-item").length;
var numofLinks = studentsPerPage / 10;

// appends search to page
$(".page-header").append('<div class="student-search"><input placeholder="Search for students..."><button>Search</button></div>');


// Pagination:

// hiding all students when the page first loads
$(".student-item").hide();

// showing the first 10 students
var $studentsPerPage = $(".student-item:lt(10)").show();

// appending the pagination div and child ul
$(".page").append('<div class="pagination"><ul></ul></div>');

// adding pagination links

if ($totalStudents / 10 > 0) {
  $(".pagination ul").append('<li><a href="#">2</a></li>');
}






for (; numberLinks > 10; numberLinks += 1) {
  $(".pagination ul").append('<li><a href="#">2</a></li>')
}
