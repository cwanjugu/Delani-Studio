$(document).ready(function() {
    $("#blanks form").submit(function() {
      alert('Go to beginning of form submit!');
      var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

      blanks.forEach(function(blank) {
        var userInput = $("input." + blank).val();
        $("." + blank).text(userInput).val();
      });

      $("#story").show();
      alert('Go to end of form submit!');
    });
  });



function carol() {
    alert("Hi, we have recevied your message. Thank you for reaching out to us.");
}
