import { useContext } from "react";
import { UserContext } from "../App";

function Header(props){

  let {user : {name}} = useContext(UserContext)

  return(
    <header>
      <h1> Todo List </h1>
      <p style={{
        backgroundColor:"black",
        width: "40px",
        height: "40px",
        // textAlign: "center",
        borderRadius: "50%",
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
      }}> {name.slice(0,1)} </p>
    </header>
  )
}
export default Header;