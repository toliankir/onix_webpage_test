export default function LinksMenuComponent() {
    const linksArr = [
        {
            link: "./",
            title: "Catalogus"
        },
        {
            link: "./",
            title: "Maps"
        },
        {
            link: "./",
            title: "Contacts"
        },
        {
            link: "./",
            title: "About app"
        },
        {
            link: "./",
            title: "Wallet"
        }
    ];
    return (<div>
        <a href={"./"} className="top-menu-title">
            <i className="fas fa-briefcase"></i>
            MAPS.ME
        </a>
        {linksArr.map(({link, title}, index) => <a href={link} key={index} className="top-menu-dark">{title}</a>)}
    </div>);
}