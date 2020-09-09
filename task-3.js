const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const creatImages = (images) => {
  const li = document.createElement("li");
  li.classList.add("gallery__item");
  const img = document.createElement("img");
  img.classList.add("gallery-img");
  img.setAttribute("src", images.url);
  img.setAttribute("alt", images.alt);
  li.appendChild(img);
  return li;
};

const container = images.map((image) => creatImages(image));
console.log(container);
const containerGallery = document.querySelector("#gallery");
containerGallery.append(...container);
