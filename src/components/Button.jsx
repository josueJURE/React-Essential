function Button({children}) {
    function clickHandler() {
        console.log("I've been clicked")
    }
    return(
      <>
      <li><button onClick={clickHandler}>{children}</button></li> 
      </>
    )
  }


  export default Button