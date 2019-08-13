$(function() {
  // init the validator
  // validator files are included in the download package
  // otherwise download from http://1000hz.github.io/bootstrap-validator

  $("#santeform").validator();

  // when the form is submitted
  $("#santeform").on("submit", function(e) {
    $("#santeform").validator("update");

    // if the validator does not prevent form submit
    if (!e.isDefaultPrevented()) {
      var url = "processsante.php";

      // POST values in the background the the script URL
      $.ajax({
        type: "POST",
        url: url,
        data: $(this).serialize(),
        success: function(data) {
          // data = JSON object that contact.php returns

          // we recieve the type of the message: success x danger and apply it to the
          var messageAlert = "alert-" + data.type;
          var messageText = data.message;

          // let's compose Bootstrap alert box HTML
          var alertBox =
            '<div class="alert ' +
            messageAlert +
            ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
            messageText +
            "</div>";

          // If we have messageAlert and messageText
          if (messageAlert && messageText) {
            // inject the alert to .messages div in our form
            $("#santeform")
              .find(".messages")
              .html(alertBox);
            self.scrollTo(0, 0);
            $("#santeform")[0].reset();
          }
        }
      });
      return false;
    }
  });
});
