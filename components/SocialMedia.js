const socialLinks = ["facebook", 'twitter', 'behance', 'pinterest']
import ListItem from './ListItem';
const SocialMedia = () => {
    return (
        <>
            <ul className="list social-media">
                {socialLinks.map((socialLink, index) =>
                    <ListItem key={index.toString()} class="social-media__item">
                        <a href={`tel:${socialLink}`}>{socialLink}</a>
                    </ListItem>
                )}

            </ul>

        </>
    )
}
export default SocialMedia