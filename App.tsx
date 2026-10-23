import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";
import type { AlertBoxProps, AlertType } from "./types";
import { AlertBox } from "./components/AlertBox/AlertBox";


import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay";

export default function App() {
    //Put the user interface stuff in hrere
    return (
        <div>

            <AlertBox
                type="success"
                message="Your profile has been updated successfully!"
                onClose={() => alert('Alert closed')}
            >
                <p className="text-sm">You can now continue using the application.</p>
            </AlertBox>
            <ProductDisplay />
        </div>
    )


}

