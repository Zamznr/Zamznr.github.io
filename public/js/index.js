import { listdataPortfolio } from "./data.js";

const row = document.getElementById('portfolio-section');


listdataPortfolio.forEach(element => {
  const column = document.createElement('div');
  column.setAttribute('class', "col-lg-4 portfolio");

  const card = document.createElement("div");
  card.setAttribute('class', "shadow-lg p-5 text-light");
  card.setAttribute("data-aos", "flip-left");
  card.setAttribute("data-aos-delay", '100');

  const cardBody = document.createElement('div');
  cardBody.setAttribute('class', "card-body");
  const title = document.createElement('h4');
  const description = document.createElement('p');
  title.setAttribute('class', 'card-text caption');
  description.setAttribute('class', 'card-text caption');
  const img = document.createElement('img');
  img.setAttribute('class', "card-img-top img-galery");

  column.appendChild(card);
  row.appendChild(column);

  img.src = element.image;
  title.innerText = element.title
  description.innerText = element.description
  cardBody.append(title, description);
  card.append(img, cardBody);
});

