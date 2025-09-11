import { Grid,Paper } from "@mui/material";

function ResponsiveGrid(){
    return(
        <Grid container spacing={2}>
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
    )
}
export default ResponsiveGrid;