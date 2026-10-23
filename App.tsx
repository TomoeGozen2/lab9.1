import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";
import type { AlertBoxProps, AlertType } from "./types";
import { AlertTypes } from "./components/AlertBox/AlertBox";
import { User } from "./types";
import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay";

export default function App(){
    //Put the user interface stuff in hrere
     return(
        <div>

            <AlertTypes  />
            <UserProfileCard />
            <ProductDisplay />
        </div>
    )


    }
   
