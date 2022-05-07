const db = firebase.firestore();
const storage = firebase.storage();

let queryString = new URLSearchParams(window.location.search);
console.log(queryString.get("id"));

db.collection("product")
  .doc(queryString.get("id"))
  .get()
  .then((result) => {
    let templateDetail = `
    <div
    class="detail-pic my-4"
    style="background-image: url('${result.data().이미지}')"
  ></div>
  <div>
    <h5>올린사람 : 모름</h5>
    <hr />
    <h5 class="title">${result.data().제목}</h5>
    <p class="date">${Date(result.data().날짜)}</p>
    <p class="price">${result.data().가격}원</p>
  </div>`;

    $(".container").append(templateDetail);
  });
