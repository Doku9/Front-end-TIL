const db = firebase.firestore();
db.collection("product")
  .get()
  .then((snapshoot) => {
    snapshoot.forEach((i) => {
      console.log(i.data());
      let template = `<div class="product">
      <div class="thumbnail"></div>
      <div class="flex-gorw-1 p-4">
        <h5 class="title">
        ${i.data().상품명}
        </h5>
        <p class="data">2020년 1월 8일</p>
        <p class="price">
        ${i.data().가격}원
        </p>
        <p class="float-end">♥ 0</p>
      </div>
    </div>`;
      $(".container").append(template);
    });
  });
