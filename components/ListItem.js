const ListItem = (props) =>{
    return(
        <>
       <li className={props.class ?props.class : null}>
           {props.children}
       </li>
        </>
    )
}

export default ListItem