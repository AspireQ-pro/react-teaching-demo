import { Card, Typography,Box,Avatar, CardContent, Grid, Button } from "@mui/material"
import Wagh from "../assets/akshay_wagh.jpg";

function IdentityCard(){
    return(
       <Card sx={{color:"white",maxWidth:"345px",margin:"auto",borderRadius:"20px",bgcolor:"lightblue",textAlign:"center",padding:"10px"}}>
           <Box>
               <Typography sx={{color:"black",bgcolor:"white",borderRadius:"20px",padding:"5px",margin:"10px"}}>Akshay Wagh</Typography>
           </Box>
           <Avatar alt="Akshay Wagh" src={Wagh} sx={{width:"100px", height:"100px",mx:"auto",mt:"10px",border:"2px solid white"}}/>
           <CardContent>
               <Typography variant="body2"sx={{color:"black"}}>Hi, my name is Akshay Wagh! mu post Haral (Risod)</Typography>
           </CardContent>
           <Grid container sx={{display:"flex", justifyContent:"space-around"}}>
            <Grid item>
                <Typography variant="body2" sx={{color:"black"}}>108 </Typography>
                <Typography variant="body2" sx={{color:"black"}}>Posts</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body2" sx={{color:"black"}}>457 </Typography>
                <Typography variant="body2" sx={{color:"black"}}>followers</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body2" sx={{color:"black"}}>229 </Typography>
                <Typography variant="body2" sx={{color:"black"}}>following</Typography>
            </Grid>
           </Grid>

           <Box>
            <Button variant="contained" sx={{backgroundColor:"blue", margin:"10px"}}>Follow</Button>
            <Button variant="contained" sx={{backgroundColor:"red", margin:"10px"}}>Message</Button>
           </Box>
       </Card>
    )
}

export default IdentityCard