
function Cards({ cards }) {

  return (
    <div class="cards">
      {cards.map((card, i) =>
        <div class="card" key={i}>
          <img src={card.image} alt="image" title={card.title} />
          <div class="text_section">
            <h4 class="title" >{card.title}</h4>
            <div class="author_container">
              <a href={card.authorLink} target="_blank">{card.authorName}</a>
              <span>| {card.date}</span>
            </div>
            <article>{card.description}</article>
          </div>
        </div>
      )}

    </div>
  )
}

export default Cards;
