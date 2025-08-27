// how to create a component / function
import {Avatar, Card, CardContent,Typography} from "@mui/material";
import Teja from './Tejas_lava.png';
function ProfileCard(props){

    return(
      <Card>
        <Avatar alt="Tejas" src={Teja}/>
        <CardContent>
          <Typography variant="h5">{props.name}</Typography>
          <Typography variant="h6">{props.role}</Typography>

        </CardContent>
      </Card>

    );

}

export default ProfileCard;


