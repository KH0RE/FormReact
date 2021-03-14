import React from 'react';
import { Grid, form, TextField, FormControlLabel,  Link, Button, Checkbox, CardContent   } from "@material-ui/core";
function Login() {

  return (
    <div>
        <CardContent>
        <Grid container >
            
        <Grid item xs={12} sm={1}>
             
        </Grid>
        <Grid item xs={12} sm={10}>
        <form  noValidate>
   <Grid container spacing={2}>
     <Grid item xs={12} sm={6}>
       <TextField
         autoComplete="fname"
         name="firstName"
         variant="outlined"
         required
         fullWidth
         id="firstName"
         label="First Name"
         autoFocus
       />
     </Grid>
     <Grid item xs={12} sm={6}>
       <TextField
         variant="outlined"
         required
         fullWidth
         id="lastName"
         label="Last Name"
         name="lastName"
         autoComplete="lname"
       />
     </Grid>
     <Grid item xs={12}>
       <TextField
         variant="outlined"
         required
         fullWidth
         id="email"
         label="Email Address"
         name="email"
         autoComplete="email"
       />
     </Grid>
     <Grid item xs={12}>
       <TextField
         variant="outlined"
         required
         fullWidth
         name="password"
         label="Password"
         type="password"
         id="password"
         autoComplete="current-password"
       />
     </Grid>
     <Grid item xs={12}>
       <FormControlLabel
         control={<Checkbox value="allowExtraEmails" color="primary" />}
         label="I want to receive inspiration, marketing promotions and updates via email."
       />
     </Grid>
   </Grid>
   <Button
     type="submit"
     fullWidth
     variant="contained"
     color="primary"
     
   >
     Sign Up
   </Button>
   <Grid container justify="flex-end">
     <Grid item>
       <Link href="#" variant="body2">
         Already have an account? Sign in
       </Link>
     </Grid>
   </Grid>
 </form>
        </Grid>
        <Grid item xs={12} sm={1}>
            
        </Grid>
     
 </Grid>
        </CardContent>
        
    </div>
  );
}

export default Login;