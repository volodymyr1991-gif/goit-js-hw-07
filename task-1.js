const ulRef = document.querySelectorAll(".item");

ulRef.forEach((ele) => {
  const title = ele.firstElementChild.textContent;
  const element = ele.lastElementChild.children.length;
  console.log("Категорія:", `${title}`);

  console.log("Кількість елементів:", `${element}`);
});
