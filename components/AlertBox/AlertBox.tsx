import type { AlertType, AlertBoxProps } from "../../types";



export function AlertBox(props:any){
    
    return(
        <div>
            
            {props.type}
            {props.message}
            
            {props.children}
            
        </div>
    )
}