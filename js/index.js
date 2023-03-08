import { listdataPortfolio } from "./data.js";

const row = document.getElementById('portfolio-section');


listdataPortfolio.forEach(element => {
  const column = document.createElement('div');
  column.setAttribute('class', "col-md-4 portfolio");

  const card = document.createElement("div");
  card.setAttribute('class', "shadow-lg p-5 text-light");
  card.setAttribute("data-aos", "flip-left");
  card.setAttribute("data-aos-delay", '100');

  const cardBody = document.createElement('div');
  cardBody.setAttribute('class', "card-body");
  const paragraph = document.createElement('h4');
  paragraph.setAttribute('class', 'card-text caption');
  const img = document.createElement('img');
  img.setAttribute('class', "portfolio card-img-top");

  column.appendChild(card);
  row.appendChild(column);

  console.log(element.image);

  img.src = element.image;
  paragraph.innerText = element.title
  cardBody.appendChild(paragraph);
  card.append(cardBody, img);
});

