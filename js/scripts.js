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

// appending correct number of links

for (var i = 1; i < numofLinks; i++) {
  $(".pagination ul").append('<li><a href="#">' + [i] + '</a></li>');
}

// adds/removes the active class when a link is clicked on

$("ul li a").click(function() {
  $("ul li a").removeClass("active");
  $(this).addClass("active");
});


// adding active class to first link when the page loads

$("ul li a:first").addClass("active");


// Code that shows correct student for correct page

var $studentsPerPage2;

$("<a href='2'>").click( function(){
  console.log($studentsPerPage2 = $(".student-item:gt(11):lt(20)").show());
});
