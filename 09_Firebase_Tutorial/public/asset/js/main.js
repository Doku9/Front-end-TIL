const db = firebase.firestore();

db.collection("product")
  .get()
  .then((snapshoot) => {
    snapshoot.forEach((i) => {
      let template = `
      <div class="product">
      <div class="thumbnail"></div>
      <div class="flex-gorw-1 p-4">
        <h5 class="title">
        ${i.data().제목}
        </h5>
        <h5>
        제목
        </h5>
        <p class="data">${i.data().날짜}</p>
        <p class="price">
        ${i.data().가격}원
        </p>
        <p class="float-end">♥ 1</p>
      </div>
    </div>`;

      $(".container").append(template);
    });
  });
