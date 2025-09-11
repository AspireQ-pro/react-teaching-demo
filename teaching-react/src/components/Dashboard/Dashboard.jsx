import { Toolbar, Typography,Box,AppBar,Grid,Paper } from "@mui/material";

function Dashboard() {
  return (
       <Box sx={{flexGrow:1,p:3}}>
        <AppBar >
            <Toolbar>
                <Typography variant="h6" component="div" sx={{color:"white",flexGrow:1}}>Dashboard</Typography>
            </Toolbar>
        </AppBar>
         
         <Grid container spacing={2} sx={{mt:2}}>
            <Grid item xs={12} sm={6} md={4}>
                <Paper sx={{p:2}}>Box 1</Paper>
            </Grid>
             <Grid item xs={12} sm={6} md={4}>
                <Paper sx={{p:2}}>Box 2</Paper>
            </Grid>
             <Grid item xs={12} sm={6} md={4}>
                <Paper sx={{p:2}}>Box 3</Paper>
            </Grid>
             <Grid item xs={12} sm={6} md={4}>
                <Paper sx={{p:2}}>Box 4</Paper>
            </Grid>
        </Grid>

       </Box>
  )
}
export default Dashboard;