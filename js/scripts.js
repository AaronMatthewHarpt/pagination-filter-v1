// Current issues
  // Paginated search is not working a first link


/*
Pagination Content Filter:
*/

// Global variables
var studentsPerPage = 10;
var $totalStudents = $(".student-list").find(".student-item");
var numofLinks = Math.ceil($totalStudents.length / studentsPerPage);
var currentLink = 0;


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
  var $activePage = $(this).addClass("active");
});


// Code that shows correct student for correct page

currentLink += 1;



var listCorrectStudents = parseInt([i]) + 1;

// Holds student index
var studentCount = 1;

// goes through each list item and adds id if necessary
$(".student-list > li").each(function(index){
  if ($(this).attr("id") !== "!display") {
    $(this).attr("id", "show-index-"+(studentCount));
    studentCount++;
  }
});

// shows correct students when an anchor is clicked
$("li a").on("click", function(){

// parsing the active class's html into an integer
parseInt($(".active").html());
var startId = parseInt($(".active").html()) * studentsPerPage - studentsPerPage + 1;
var endId = startId + studentsPerPage - 1;


$totalStudents.hide();
$totalStudents.slice(startId, endId).show();

// show elements with id 'k'
for (var k = startId; k < endId; k++) {
  $("#show-index-" + k).show();
  }
});



// Search:

$("button").on("click", function() {
  var $studentSearch = $("input").val();
  console.log(".student-item".indexOf($studentSearch));
  $totalStudents.hide();
  var $filteredstudentsShown = $(".student-details:contains(" + $studentSearch + ")").parent();

  if ($filteredstudentsShown.text() === "") {
    $(".student-list").text("Sorry, there are no students matching your search.");
  } else {

  $($filteredstudentsShown).slice(0, studentsPerPage).show();
  console.log($($filteredstudentsShown).slice(0, studentsPerPage).show().length);

  $("li a").on("click", function() {
  parseInt($(".active").html());

  var startId = parseInt($(".active").html()) * studentsPerPage - studentsPerPage + 1;
  var endId = startId + studentsPerPage - 1;

  $totalStudents.hide();
  $totalStudents.slice(startId, endId).show();

  for (var k = startId; k < endId; k++) {
    $("#show-index-" + k).show();
    }
  });
}

  $("a").removeClass("active");
  $("ul li a:first").addClass("active");
});
