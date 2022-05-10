const db = firebase.firestore();
const storage = firebase.storage();

let queryString = new URLSearchParams(window.location.search);
console.log(queryString.get("id"));

db.collection("product")
  .doc(queryString.get("id"))
  .get()
  .then((result) => {
    $("#detail_img").css({
      "background-image": `url(${result.data().이미지})`,
    });
    $("#detail_name").html(result.data().이름);
    $("#detail_id").html(result.data().제목);
    $("#detail_date").html(result.data().날짜);
    $("#detail_price").html(result.data().가격);

    // ---------- hide edit Btn ----------
    console.log("1" + result.data().uid);

    firebase.auth().onAuthStateChanged((user) => {
      if (result.data().uid != user.uid) {
        $("#edit").css("display", "none");
      }
    });
  });

//  ----------- Go to edit Page ----------
$("#edit").click(function () {
  window.location.href = `/edit.html?id=${queryString.get("id")}`;
});
