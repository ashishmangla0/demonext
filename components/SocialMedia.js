const socialLinks = [
    {
        "title":"facebook",
        "link":'link1'
    },
    {
        "title":"twitter",
        "link":'link2'
    },
    {
        "title":"behance",
        "link":'link3'
    },
    {
        "title":"pinterest",
        "link":'link4'
    }
]
import ListItem from './ListItem';
const SocialMedia = (props) => {
    return (
        <>
            <ul className={`${props.class}`}>
                {socialLinks.map((socialLink, index) =>
                    <ListItem key={socialLink.title} class={props.itemClass}>
                        <a href={`${socialLink.link}`}>
                            <span className={`icon icon-${socialLink.title}`}></span>
                        </a>
                    </ListItem>
                )}

            </ul>

        </>
    )
}
export default SocialMedia