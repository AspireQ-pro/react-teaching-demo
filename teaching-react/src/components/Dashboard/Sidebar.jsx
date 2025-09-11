import { List, ListItem, ListItemText, Toolbar, Drawer } from "@mui/material";


const drawerWidth=200;
function Sidebar(){
    return(
       <Drawer variant="permanent"
       sx={{
        width:drawerWidth,
        flexShrink:0,
        [`& .MuiDrawer-paper`]:{width:drawerWidth,boxSizing:'border-box'},
       }}
       >
         <Toolbar/>
         <List>
            {["Home","Analytics","Settings"].map((text)=>(
                <ListItem button key={text}>
                    <ListItemText primary={text}/>
                </ListItem>
                ))}
         </List>
       </Drawer>
    )
}
export default Sidebar;