import { useParams } from "react-router-dom";

function User(){
    const {id}=useParams();

   return(
       <div>
           <h1>User ID: {id}</h1>
           <p>This is the user profile page.</p>
       </div>
   )
}
export default User;