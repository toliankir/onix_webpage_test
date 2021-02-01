export default function ColoredCardComponent({card}) {
    return (<div className={getClasses(card.class)}>
    <img src={getImageLink(card.image.src)} alt={card.image.desc} />
    <p className="content-large">{card.title}</p>
    <p className="content-small">{card.content}</p>                
</div>);
}

function getClasses(className) {
    return ["card", className].join(" ");
}

function getImageLink(imageSrc) {
    return `./img/icon/${imageSrc}`;
}