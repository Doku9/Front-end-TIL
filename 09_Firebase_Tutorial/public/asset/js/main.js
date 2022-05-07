const db = firebase.firestore();

db.collection("product")
  .get()
  .then((snapshot) => {
    snapshot.forEach((i) => {
      let template = `
        <div class="product">
        <div class="thumbnail" style="background-image: url('${
          i.data().이미지
        }')">
        </div>
        <div class="flex-gorw-1 p-4">
          <h5 class="title">
          <a href="/detail.html?id=${i.id}">${i.data().제목}</a>
          </h5>
          <p class="data">${Date(i.data().날짜)}</p>
          <p class="price">
          ${i.data().가격}원
          </p>
          <p class="float-end">♥ 1</p>
        </div>
      </div>`;
      $(".container").append(template);
    });
  });
