import { Avatar, MenuItem, Paper, Typography, withStyles, Select, FormControl, InputLabel, Input, FormControlLabel, Checkbox, Button } from "@material-ui/core"
import { LockOutlined } from "@material-ui/icons"
import React,{ useContext } from "react"
import { LanguageContext } from "./Context/LanguageContext"
import styles from "./Styless/FormStyle"

const words ={
    english: {
        email: "Email",
        signIN: "Sign in",
        password: "Password",
        remember: "Rememeber Me"
    },
    hindi: {
        email: "ईमेल",
        signIN: "साइन इन",
        password: "पासवर्ड",
        remember: "रिमेम्बर मी"
    },
    french: {
        email: "Académie Française ",
        signIN: "Adresse Electronique",
        password: "Mot de Passe",
        remember: "Souviens-toi De Moi"
    }
};

//                      FUNCTION BASE CONSUMING CONTEXT WITH HOOKS


function Form(props){
    
    const {language, changeLanguage} = useContext(LanguageContext)
    const {email, signIN, password, remember} = words[language]
    const {classes} = props
    return(
        <main className={classes.main}>
                    <Paper className={classes.paper}>
                         <Avatar className={classes.avatar}>
                             <LockOutlined />
                         </Avatar>
                         <Typography variant="h5">{signIN}</Typography>
                         <Select value = {language} onChange={changeLanguage}>
                             <MenuItem value="english">English</MenuItem>
                             <MenuItem value="hindi">Hindi</MenuItem>
                             <MenuItem value="french">French</MenuItem>
                         </Select>
                         <form className={classes.form}>
                             <FormControl margin="normal" required fullWidth>
                             <InputLabel htmlFor="email">{email}</InputLabel>
                                 <Input id="email" name="email" autoFocus />
                             </FormControl>
                             <FormControl margin="normal" required fullWidth>
                             <InputLabel htmlFor="password">{password}</InputLabel>
                                 <Input id="password" name="password" autoFocus />
                             </FormControl>
                             <FormControlLabel control={<Checkbox color="primary" />} label= {remember} />
                             <Button variant="contained" type="submit" fullWidth color="primary" className={classes.submit}>{signIN}</Button>
                         </form>

                    </Paper>
                </main>
    )
}
export default withStyles(styles)(Form);

//                      CLASS BASE CONSUMING CONTEXT

// class Form extends Component{
//     static contextType = LanguageContext
//         render(){
//             const {language, changeLanguage} = this.context
//             const {email, signIN, password, remember} = words[language]
//             const {classes} = this.props
//             return(
//                 <main className={classes.main}>
//                     <Paper className={classes.paper}>
//                          <Avatar className={classes.avatar}>
//                              <LockOutlined />
//                          </Avatar>
//                          <Typography variant="h5">{signIN}</Typography>
//                          <Select value = {language} onChange={changeLanguage}>
//                              <MenuItem value="english">English</MenuItem>
//                              <MenuItem value="hindi">Hindi</MenuItem>
//                              <MenuItem value="french">French</MenuItem>
//                          </Select>
//                          <form className={classes.form}>
//                              <FormControl margin="normal" required fullWidth>
//                              <InputLabel htmlFor="email">{email}</InputLabel>
//                                  <Input id="email" name="email" autoFocus />
//                              </FormControl>
//                              <FormControl margin="normal" required fullWidth>
//                              <InputLabel htmlFor="password">{password}</InputLabel>
//                                  <Input id="password" name="password" autoFocus />
//                              </FormControl>
//                              <FormControlLabel control={<Checkbox color="primary" />} label= {remember} />
//                              <Button variant="contained" type="submit" fullWidth color="primary" className={classes.submit}>{signIN}</Button>
//                          </form>

//                     </Paper>
//                 </main>
//             )
            
//         }
// }



// export default withStyles(styles)(Form);