import Link from 'next/link'
const ListLink = ({ props }) => {
    return (
        <>
            <li>
                <Link href="/">
                    <a>{props.link}</a>
                </Link>
            </li>
        </>
    )
}

export default ListLink