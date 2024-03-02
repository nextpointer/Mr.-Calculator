import { signal } from "@preact/signals";
import { storeValue } from "./AllMethods.ts";


interface Prop{
    width:string,
    readOnly:boolean
    value:string,
    type:string
}



export const Form=(props:Prop)=>{
    const {width,readOnly,value,type}=props;
    const formStyle={
        width:width
    }

    const typeStoring=(e:Event)=>{
        const target=e.currentTarget as HTMLTextAreaElement;
        storeValue(type,target.value)
        
        // storeValue(type,target.value)
    }
    
    return (
        
        <textarea type="text" class="form-style" style={formStyle} readOnly={readOnly} value={value} onInput={typeStoring}/>
    );
}