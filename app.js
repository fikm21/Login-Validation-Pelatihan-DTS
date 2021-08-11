function validasi() {
  var email_user = "admin@gmail.com";
  var pass_user = "admin";

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email == email_user && password == pass_user) {
    alert("Anda Berhasil Login !");
  } else {
    var elert = document.getElementById("alert").removeAttribute("style");
  }
}
