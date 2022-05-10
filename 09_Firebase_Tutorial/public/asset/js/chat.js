const db = firebase.firestore();
const storage = firebase.storage();

let userUid = JSON.parse(localStorage.getItem("user")).uid;
// ---------- loding MSG ----------
db.collection("chatroom")
  .where("participant", "array-contains", userUid)
  .get()
  .then((result) => {
    result.forEach((a) => {
      let template = `
<li class="list-group-item">
<h6>${a.data().product}</h6>
<h6 class="text-small">${a.id}</h6>
</li>`;

      $(".chat-list").append(template);

      //   ---------- chat title ----------
      let queryString = new URLSearchParams(window.location.search);
      let URLString =
        queryString.get("buyer") + "&" + queryString.get("seller");
      if (a.id == URLString) {
        console.log(a.id);
        $(".chat-title").append(a.data().product);
      }
    });
  });
