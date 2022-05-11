const db = firebase.firestore();
const storage = firebase.storage();

let userUid = JSON.parse(localStorage.getItem("user")).uid;
let chatUid = null;
let setChatUid = null;

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

      $(".list-group-item").click(function (e) {
        // event bubbling
        e.stopImmediatePropagation();

        chatUid = $(this).children(".text-small").text();
        $(".list-group-item").removeClass("active");
        $(this).addClass("active");

        //   ---------- load chat data  ----------

        //load html
        db.collection("chatroom")
          .doc(chatUid)
          .collection("messages")
          .orderBy("date")
          .onSnapshot((result) => {
            // delete html
            $(".chat-content").html("");

            result.forEach((chatdata) => {
              if (chatdata.data().uid == userUid) {
                let chatTemplate = `<li><span class="chat-box mine">${
                  chatdata.data().content
                }</span></li>`;
                $(".chat-content").append(chatTemplate);
              } else {
                let chatTemplate = `<li><span class="chat-box">${
                  chatdata.data().content
                }</span></li>`;
                $(".chat-content").append(chatTemplate);
              }
            });
          });
      });
    });
  });

//   ---------- set chat data  ----------

$("#send").click(function () {
  let data = {
    content: $("#chat-input").val(),
    date: new Date(),
    uid: userUid,
  };

  db.collection("chatroom").doc(chatUid).collection("messages").add(data);
});

// db.collection("chatroom")
//   .doc(chatUid)
//   .collection("messages")
//   .get()
//   .then((result) => {
//     result.forEach((a) => {
//       let chatTemplate = `<li><span class="chat-box">${
//         a.data().content
//       }</span></li>`;
//       return $(".chat-content").append(chatTemplate);
//     });
//   });
