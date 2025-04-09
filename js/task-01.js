let categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

console.log(categories[0].firstElementChild);

for (let category of categories) {
  console.log(`Category: ${category.firstElementChild.innerText}`);
  console.log(
    `Elements: ${category.firstElementChild.nextElementSibling.children.length}`
  );
}
