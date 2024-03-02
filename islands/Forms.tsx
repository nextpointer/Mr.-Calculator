import { signal } from "@preact/signals";
import { takeValue1 } from "./AllMethods.tsx";


interface Prop{
    width:string,
    readOnly:boolean
    value:number,
    onClick:(e:Event)=>void
}



export const Form=(props:Prop)=>{
    const {width,readOnly,value,onClick}=props;
    const formStyle={
        width:width
    }

    console.log(onClick);
    
    return (
        
        <textarea type="text" class="form-style" style={formStyle} readOnly={readOnly} value={value} onInput={onClick}/>
    );
}