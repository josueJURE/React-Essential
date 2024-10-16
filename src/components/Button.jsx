function Button(props) {
  
    return(
      <>
      <li><button onClick={props.onSelect}>{props.children}</button></li> 
      </>
    )
  }


  export default Button