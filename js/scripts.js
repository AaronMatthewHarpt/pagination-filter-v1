/*
Pagination Content Filter:
*/

// Global variables
var studentsPerPage = 10;
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
  var $activePage = $(this).addClass("active");
  // $(".student-list");
});


// Code that shows correct student for correct page


// $("ul li a").click( function(){
//   $totalStudents.hide();
//   document.write($(".student-item:gt("+ [i] + "):lt(10)").show());
// });

currentLink += 1;


// adding animations


// var $studentsPerPage = $(".student-item:lt(10)").show();

// $("ul li a:not(:first)").click(function() {
//   $("body").css("display", "none").fadeIn(1000);
//   $totalStudents.hide();
//   event.preventDefault();
//   newLocation = "filter-example.html";
//   $("body").fadeOut(1000, newpage);
//   $(".student-item").nextAll(":lt(10)").show();
// });
//
// function newpage() {
//   window.location = newLocation;
// }



var listCorrectStudents = parseInt([i]) + 1;

// for (var i = 1; i < 10; i++) {
// $("ul li:nth-child(" + listCorrectStudents + ") a").click( function(){
//   $totalStudents.hide();
//   var $studentsPerPage = $(".student-item:gt(" + parseInt([i]) * 10 + "):lt(10)").show();
//   console.log(parseInt([i]) + 1);
//   });
// }
//
// for (var j = 1; j <= numofLinks; j++) {
//   console.log(parseInt([j]) * 10);
//   $("ul li:nth-child(" + parseInt([j]) + ") a").click( function(){
//     $totalStudents.hide();
//     // $(".student-item:gt(11):lt(20)").show();
//     $(".student-item:gt(" + parseInt([j]) * 10 + "):lt(10)").show();
//   // });
//   console.log(parseInt([j]) * 10);
//   });
// }
// console.log(parseInt([i]) + 1);
// for (var j = 0; j < 4; j++) {
//   console.log(parseInt([j]) + 1);
// }
// console.log(parseInt([j]) + 1);

// for (var j = 1; j <= numofLinks; j++)
// var parseIntIndexJ = parseInt([j]);
// $("ul li:nth-child(" + parseIntIndexJ + ") a").click( function(){
//   $totalStudents.hide(":hidden");
//   // $(".student-item:gt(11):lt(20)").show();
//   $(".student-item:lt(10):hidden").show();
// });

// function go_to_page(page_num) {
//   var showPerPage = parseInt(studentsPerPage.val());
//   var startFrom = parseInt(page_num) * studentsPerPage;
//   var end_on = startFrom + parseInt(page_num);
//   $totalStudents.css("display", "none").slice(startFrom, end_on).css("display", "block");
// }

// $("ul li:nth-child(1) a").click( function(){
//   $totalStudents.hide();
//   // $(".student-item:gt(11):lt(20)").show();
//   $(".student-item:lt(10)").show();
// });
//
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



// $("ul li a").click( function() {
//   $totalStudents.nextAll(":lt(10)").show();
//   var $itemsShownDefault = $(".student-list").find(".student-item:visible").hide();
//   // $(".student-item:gt(11):lt(20)").show();
//   $(".student-list").find(".student-item:hidden:not(:visible)").show();
// });


// http://web.enavu.com/tutorials/making-a-jquery-pagination-system/ code

// $totalStudents.hide();
//
// $totalStudents.slice(0, studentsPerPage).show();
//
// function previous() {
//    new_page = parseInt($activePage.val()) - 1;
//   if ($(".active").prev("li a").length==true) {
//     go_to_page(new_page);
//   }
// }
//
// function next() {
//    new_page = parseInt($activePage.val()) + 1;
//   if ($(".active").next("li a").length==true) {
//     go_to_page(new_page);
//   }
// }
//
//
//  startFrom = parseInt(numofLinks) * parseInt(studentsPerPage);
//
//  end_on = parseInt(startFrom) + parseInt(numofLinks);
//
// function go_to_page(page_num) {
//   var showPerPage = parseInt(studentsPerPage.val());
//   var startFrom = parseInt(page_num) * studentsPerPage;
//   var end_on = startFrom + parseInt(page_num);
//   $totalStudents.css("display", "none").slice(startFrom, end_on).css("display", "block");
// }



// $("ul li a").click( function() {
// for (var j = 1; j <= parseInt(numofLinks); j++) {
//   $totalStudents.hide();
//   $totalStudents.slice(parseInt([j]), parseInt([j]) * 10).show();
//   }
// });
// ends http://web.enavu.com/tutorials/making-a-jquery-pagination-system/ code



// $("ul li a").click( function() {
//   $(".student-list").find(".student-item:visible").replaceWith($(".student-item:lt(10)")).nextAll().show();
// });



var studentCount = 1;
$(".student-list > li").each(function(index){
  if ($(this).attr("id") !== "!display") {
    $(this).attr("id", "show-index-"+(studentCount));
    studentCount++;
  }
});


$("li a").on("click", function(){
console.log(parseInt($(".active").html()));


parseInt($(".active").html());
var startId = parseInt($(".active").html()) * studentsPerPage - studentsPerPage + 1;
var endId = startId + studentsPerPage - 1;

$totalStudents.hide();
$totalStudents.slice(startId, endId).show();


for (var k = startId; k < endId; k++) {
  $("#show-index-" + k).fadeIn();
  }
});



// Search:

// $("button").on("click", function() {
  // var $studentNames = $("h3").text();
  // $("input").filter(function() {
  //   // $totalStudents.hide()
  //   var $matchingStudents = $("input:contains(" + $studentNames + ")");
  //   $(".student-item").text($matchingStudents);
  // });
// })


$("button").on("click", function() {
  var $studentSearch = $("input").val();
  console.log($studentSearch.indexOf(".student-item"));
  $totalStudents.hide();
  var $filteredstudentsShown = $(".student-details:contains(" + $studentSearch + ")").parent();

  $($filteredstudentsShown).slice(0, studentsPerPage).show();

  $("li a").on("click", function() {
  parseInt($(".active").html());

  var startId = parseInt($(".active").html()) * studentsPerPage - studentsPerPage + 1;
  var endId = startId + studentsPerPage - 1;

  $totalStudents.hide();
  $totalStudents.slice(startId, endId).show();

  for (var k = startId; k < endId; k++) {
    $("#show-index-" + k).fadeIn();
  }
});

  $("a").removeClass("active");
  $("ul li a:first").addClass("active");

  // $("li a").on("click", function() {
  // parseInt($(".active").html());
  // var startId = parseInt($(".active").html()) * studentsPerPage - studentsPerPage + 1;
  // var endId = startId + studentsPerPage - 1;
  //
  // $totalStudents.hide();
  // $totalStudents.slice(startId, endId).show();
  //
  //
  // for (var k = startId; k < endId; k++) {
  //   $("#show-index-" + k).fadeIn();
  //   }
  // });




});




// var $inputText = $("input").text();
// console.log($inputText)
//
// console.log($("input").val());
//
// $("button").click( function() {
//   $totalStudents.hide();
//   var $filteredStudents = $(".student-item").filter(":contains(" + $inputText + ")").show(":gt(11):lt(10)");
//   console.log($filteredStudents.length);
// });
