import ColoredCardComponent from "./ColoredCard";

export default function ColoredCradsComponent() {
    let cards = [
        {
            image: {
                src: "1.png",
                desc: "Some icon"
            },
            title: "Exchange smartly",
            content: "Hold and convert money in 35 currencies at best rate and with no hidden fees",
            class: "bg-brown"
        },
        {
            image: {
                src: "2.png",
                desc: "Some icon"
            },
            title: "Get Cashback",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi adipisci hic quia veritatis aut voluptas nobis incidunt. Dolores aliquam vero, explicabo eligendi ipsam autem possimus veritatis necessitatibus, ea ex earum.",
            class: "bg-cyan"
        },
        {
            image: {
                src: "3.png",
                desc: "Some icon"
            },
            title: "Travel smart with 0% fees",
            content: "Consectetur, adipisicing elit. Explicabo, qui velit ullam doloribus quis blanditiis ex ea architecto culpa sint repellat quibusdam nulla, voluptate dolorem esse assumenda earum quidem aperiam!",
            class: "bg-yellow"
        },
        {
            image: {
                src: "4.png",
                desc: "Some icon"
            },
            title: "Open a free account in minutes",
            content: "Dolor sit amet consectetur adipisicing elit. Cupiditate atque natus rationemaiores, perspiciatis provident? Voluptates porro alias cupiditate eveniet ad.",
            class: "bg-red"
        },
        {
            image: {
                src: "5.png",
                desc: "Some icon"
            },
            title: "Transfer money in real-time globaly",
            content: "Switzerland",
            class: "bg-pink"
        },
        {
            image: {
                src: "6.png",
                desc: "Some icon"
            },
            title: "Store money in AAA safety and remove bank credit risk",
            content: "Hold and convert money in 35 currencies at best rate and with no hidden fees",
            class: "bg-green"
        },
        {
            image: {
                src: "7.png",
                desc: "Some icon"
            },
            title: "Pay in and out using local and internationalpayment routes",
            content: "Hold and convert money in 35 currencies at best rate and with no hidden fees",
            class: "bg-purple"
        },
    ];
    return (<div className="colored-cards container">
    <div id="control-left" className="colored-cards-control">
        &lt;
    </div>
    <div className="colored-cards-body">
        <div className="cards-wrapper">
           { cards.map((card, index) => <ColoredCardComponent key={index} card={card}/>)}
        </div>
    </div>
    <div id="control-right" className="colored-cards-control">
        &gt;
    </div>
</div>);
} 