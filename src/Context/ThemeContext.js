import React,{ createContext } from "react";
import useToggle from "../hooks/useToggleState";

export const ThemeContext = createContext();

 export function ThemeProvider(props){
   const [isDrakeMood, toggleTheme] = useToggle(false)

   
        return(
            <ThemeContext.Provider value={{isDrakeMood, toggleTheme}}>
                {props.children}
            </ThemeContext.Provider>
        )
}




// import React,{Component, createContext} from "react";

// export const ThemeContext = createContext();

//  export class ThemeProvider extends Component{
//     constructor(props){
//         super(props);
//         this.state={isDrakeMood : false}
//         this.toggleTheme = this.toggleTheme.bind(this);
//     }
//     toggleTheme(){
//         this.setState({isDrakeMood : !this.state.isDrakeMood})
//     }
//     render(){
//         return(
//             <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>{this.props.children}</ThemeContext.Provider>
//         )
//     }
// }