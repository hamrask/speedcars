
function validateForm() {
  var x = document.forms["contact_form"]["email"].value;
  if (x == "") {
    alert("Email must be filled out");
    return false;
  }
}
