const db = firebase.firestore();
const storage = firebase.storage();

// firebase.auth().createUserWithEmailAndPassword("abc@naver.com", "123456");

$("#register").click(function () {
  let email = $("#email-new").val();
  let password = $("#pw-new").val();

  console.log(email);
  console.log(password);

  firebase
    .auth()
    .createUserWithEmailAndPassword(String(email), String(password))
    .then((result) => {
      console.log(result);
      console.log(result.user);
    })
    .catch((e) => {
      console.log(e);
    });
});
