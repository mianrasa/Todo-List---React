import { Component } from "react";
import { UserContext } from "../App";


class Footer extends Component{
  render(){

    let date = new Date()

    return(
      <footer>
        <UserContext.Consumer>
          {
            ({user}) => {
              return (
                <h1> {user.name} - {date.getFullYear()} </h1>
              )
            }
          }
        </UserContext.Consumer>
      </footer>
    )
  }
}

export default Footer;