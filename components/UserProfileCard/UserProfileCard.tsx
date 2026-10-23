import type { User, UserProfileCardProps } from "../../types";

export function UserProfileCard(props: any){
    return(
        <div>
            {props.id}
            {props.name}
            {props.email}
            {props.role}
            {props.avatarUrl}

        </div>
    )
}