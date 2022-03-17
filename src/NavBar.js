import React,{useContext} from "react"
import { AppBar, IconButton, Toolbar, Switch, Typography, withStyles, InputBase } from "@material-ui/core"
import SearchIcon from '@mui/icons-material/Search';
import styles from "./Styless/NavBarStyles";
import { ThemeContext } from "./Context/ThemeContext";
import { LanguageContext } from "./Context/LanguageContext";

const content = {
    english: {
        search: "Search",
        flag: "⛳"
    },
    hindi: {
        search: "शरच",
        flag: "🚩"
    },
    french: {
        search: "Buscar",
        flag: "🎌"
    }
}

function NavBar(props){
    const {isDrakeMood, toggleTheme} = useContext(ThemeContext)
    const {language} = useContext(LanguageContext)
    const {classes} = props
    const {search, flag} = content[language]
    return(
        <div className={classes.root}>
                <AppBar position="static" color={isDrakeMood ? "default" : "primary"}>
                    <Toolbar>
                        <IconButton className={classes.menuButton}  color = "inherit">
                            <span>{flag}</span>
                        </IconButton>
                        <Typography  className={classes.title} variant="h6" color = "inherit">
                            App Title
                        </Typography>
                        <Switch onChange={toggleTheme} />
                        <div className={classes.grow} />
                        <div className = {classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder= {`${search}...`}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput
                                }}
                             />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
    )
}

export default withStyles(styles)(NavBar);


// class NavBar extends Component{
//     static contextType = ThemeContext
//     render(){
//         const {classes} = this.props
//         const {isDrakeMood, toggleTheme} = this.context
//         const {language} = this.props.languageContext
//         const {search, flag} = content[language]
//         return(
//             <div className={classes.root}>
//                 <AppBar position="static" color={isDrakeMood ? "default" : "primary"}>
//                     <Toolbar>
//                         <IconButton className={classes.menuButton}  color = "inherit">
//                             <span>{flag}</span>
//                         </IconButton>
//                         <Typography  className={classes.title} variant="h6" color = "inherit">
//                             App Title
//                         </Typography>
//                         <Switch onChange={toggleTheme} />
//                         <div className={classes.grow} />
//                         <div className = {classes.search}>
//                             <div className={classes.searchIcon}>
//                                 <SearchIcon />
//                             </div>
//                             <InputBase
//                                 placeholder= {`${search}...`}
//                                 classes={{
//                                     root: classes.inputRoot,
//                                     input: classes.inputInput
//                                 }}
//                              />
//                         </div>
//                     </Toolbar>
//                 </AppBar>
//             </div>
//         )
//     }
// }



// export default withLanguageContext(withStyles(styles)(NavBar));

