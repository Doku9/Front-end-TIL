const db = firebase.firestore();
const storage = firebase.storage();

// ----------  Authentication ----------
// firebase.auth().createUserWithEmailAndPassword("abc@naver.com", "123456");

$("#register").click(function () {
  let email = $("#email-new").val();
  let password = $("#pw-new").val();
  let name = $("#name-new").val();

  console.log(email);
  console.log(password);

  firebase
    .auth()
    .createUserWithEmailAndPassword(String(email), String(password))
    .then((result) => {
      console.log(result);
      console.log(result.user);
      result.user.updateProfile({
        displayName: name,
      });
    })
    .catch((e) => {
      console.log(e);
    });
});

// ---------- login ----------
$("#login").click(function () {
  let email = $("#user-email").val();
  let password = $("#user-pw").val();

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(result.user);
    });
});

// ---------- logout ----------
$("#logout").click(function () {
  firebase.auth().signOut();
});
