import React,{ useContext } from "react"
import { ThemeContext } from "./Context/ThemeContext";



function PageContent(props){
   const {isDrakeMood} = useContext(ThemeContext)
        const styles = {
            backgroundColor: isDrakeMood ? "black" : "white",
            width: "100vw",
            height: "100vh"
        }
        return <div style = {styles}>{props.children} </div>
        
}

export default PageContent;


// class PageContent extends Component{
//     static contextType = ThemeContext
//     render(){
//         const {isDrakeMood} = this.context
//         const styles = {
//             backgroundColor: isDrakeMood ? "black" : "white",
//             width: "100vw",
//             height: "100vh"
//         }
//         return(
//         <div style = {styles}>{this.props.children}</div>
//         )
//     }
// }

// export default PageContent;