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


// Code that shows correct students for correct link:


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
  // stors the input's value in the $studentSearch variable
  var $studentSearch = $("input").val();
  // logs the results of the indexOf() method from the $studentSearch into the console
  console.log(".student-item".indexOf($studentSearch));
  // hides all students
  $totalStudents.hide();
  // gets the parent (".student-list") of the .student-details that contains the $studentSearch
  var $filteredstudentsShown = $(".student-details:contains(" + $studentSearch + ")").parent();

  // checks if the $filteredstudentsShown text equals a black string
  if ($filteredstudentsShown.text() === "") {
    // if it does change the .student-list text to "Sorry, there are no students matching your search."
    $(".student-list").text("Sorry, there are no students matching your search.");
    // else
  } else {
    // show the first ten students that match
  $filteredstudentsShown.slice(0, studentsPerPage).show();

// removes all ids from elements with the student-item class
  $(".student-item").removeAttr("id");
  // when an anchor inside a list item is clicked
  $("li a").on("click", function() {
    // goes through each list item and adds an id if necessary
    $filteredstudentsShown.each(function(index){
      if ($(this).attr("id") !== "!display") {
        // adds id with value of "show-index-(value of studentCount)"
        $(this).attr("id", "show-index-"+(studentCount));
        // adds one to studentCount
        studentCount++;
      }
    });

  // Search pagination
    // parsing .active's html into an integer
  parseInt($(".active").html());

  var startId = parseInt($(".active").html()) * studentsPerPage - studentsPerPage + 1;
  var endId = startId + studentsPerPage - 1;
// hides all students
  $totalStudents.hide();
  // shows students from startId to endId
  $totalStudents.slice(startId, endId).show();
// shows elements with id "show-index-(k)"
  for (var k = startId; k < endId; k++) {
    $("#show-index-" + k).show();
    }
  });
}
// removes active class from all anchor tags
  $("a").removeClass("active");
  // adds active class to first anchor inside a ul and li
  $("ul li a:first").addClass("active");
});
