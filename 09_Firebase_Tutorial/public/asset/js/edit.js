const db = firebase.firestore();
const storage = firebase.storage();

let queryString = new URLSearchParams(window.location.search);

// ----------product data in edit page ----------

db.collection("product")
  .doc(queryString.get("id"))
  .get()
  .then((result) => {
    console.log(result.data().이름);
    $("#title").val(result.data().제목);
    $("#content").val(result.data().내용);
    $("#price").val(result.data().가격);

    console.log("1" + result.data().uid);
    console.log(firebase.auth().onAuthStateChanged(user.uid));

    // ---------- disable edit ----------
    if (result.data().uid != firebase.auth().onAuthStateChanged(user.uid)) {
      $("#send").css("display", "none");
    }
  });

//   ---------- edit btn event ----------
$("#send").click(function () {
  db.collection("product")
    .doc(queryString.get("id"))
    .update({
      제목: $("#title").val(),
      내용: $("#content").val(),
      가격: $("#price").val(),
    })
    .then(() => {
      console.log("변경완료");
    });
});
