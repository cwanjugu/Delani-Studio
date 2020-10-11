// $(document).ready(function() {
//     $("#blanks form").submit(function() {
//       alert('Go to beginning of form submit!');
//       var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

//       blanks.forEach(function(blank) {
//         var userInput = $("input." + blank).val();
//         $("." + blank).text(userInput).val();
//       });

//       $("#story").show();
//       alert('Go to end of form submit!');
//     });
//   });



$(document).ready(function () {
$(".design").click(function (){
$("#designingImg").toggle();
$("#designContent").toggle(4000);
});
  $(".development").click(function (){
  $("#progressImg").toggle();
  $("#progressContent").toggle(4000);
  });

    $(".productManagement").click(function (){
    $("#managementImg").toggle();
    $("#managementContent").toggle(4000);
    });

$("#img1").mouseover(function () {
  $("#proj1").show();
}).mouseout(function () {
  $("#proj1").hide();
});





$("#img2").mouseover(function () {
  $("#proj2").show();
}).mouseout(function () {
  $("#proj2").hide();
});



$("#img3").mouseover(function () {
  $("#proj3").show();
}).mouseout(function () {
  $("#proj3").hide();
});




$("#img4").mouseover(function () {
  $("#proj4").show();
}).mouseout(function () {
  $("#proj4").hide();
});




$("#img5").mouseover(function () {
  $("#proj5").show();
}).mouseout(function () {
  $("#proj5").hide();
});


$("#img6").mouseover(function () {
  $("#proj6").show();
}).mouseout(function () {
  $("#proj6").hide();
});

$("#img7").mouseover(function () {
  $("#proj7").show();
}).mouseout(function () {
  $("#proj7").hide();
});
});

function carol() {
    alert("Hi, we have recevied your message. Thank you for reaching out to us.");
}

