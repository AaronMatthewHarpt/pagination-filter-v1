/*
Pagination Content Filter:
*/

// Global variables
var studentsPerPage = 10;
// var $totalStudents = $(".student-list").find(".student-item").size();
var $totalStudents = $(".student-list").find(".student-item");
var numofLinks = Math.ceil($totalStudents.length / studentsPerPage);
var currentLink = 0;


// console.logs for testing
console.log(numofLinks);

// console.log(totalStudents);


// appends search to page
$(".page-header").append('<div class="student-search"><input placeholder="Search for students..."> <button>Search</button></div>');

// appending the pagination div and child ul
$(".page").append('<div class="pagination"><ul></ul></div>');

// hiding all students when the page first loads
$(".student-item").hide();
// showing the first 10 students
var $studentsPerPage = $(".student-item:lt(10)").show();


// Adding pagination links:

// appending correct number of links

for (var i = 1; i <= numofLinks; i++) {
  $(".pagination ul").append('<li> <a href="#">' + [i] + '</a> </li>');
}

// adding active class to first link when the page loads

$("ul li a:first").addClass("active");

// adds/removes the active class when a link is clicked on

$("ul li a").click(function() {
  $("ul li a").removeClass("active");
  $(this).addClass("active");
});


// Code that shows correct student for correct page


// $("ul li a").click( function(){
//   $totalStudents.hide();
//   document.write($(".student-item:gt("+ [i] + "):lt(10)").show());
// });


currentLink += 1;

var $studentsPerPage = $(".student-item:lt(10)").show();

$("ul li a:not(:first)").click( function(){
  $totalStudents.hide();
  var $studentsPerPage = $(".student-item").nextAll(":lt(10)").show();
});



// $("ul li:nth-child(1) a").click( function(){
//   $totalStudents.hide();
//   var $studentsPerPage = $(".student-item:lt(10)").show();
// });

// $("ul li:nth-child(2) a").click( function(){
//   $totalStudents.hide();
//   // $(".student-item:gt(11):lt(20)").show();
//   $(".student-item:gt(11):lt(10)").show();
// });
//
// $("ul li:nth-child(3) a").click( function(){
//   $totalStudents.hide();
//   // $(".student-item:gt(11):lt(20)").show();
//   $(".student-item:gt(21):lt(10)").show();
// });
//
// $("ul li:nth-child(4) a").click( function(){
//   $totalStudents.hide();
//   // $(".student-item:gt(11):lt(20)").show();
//   $(".student-item:gt(31):lt(10)").show();
// });
//
// $("ul li:nth-child(5) a").click( function(){
//   $totalStudents.hide();
//   // $(".student-item:gt(11):lt(20)").show();
//   $(".student-item:gt(41):lt(10)").show();
// });
//
// $("ul li:nth-child(6) a").click( function(){
//   $totalStudents.hide();
//   // $(".student-item:gt(11):lt(20)").show();
//   $(".student-item:gt(51):lt(10)").show();
// });
