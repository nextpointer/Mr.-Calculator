import { signal } from "@preact/signals";
import { storeValue } from "./AllMethods.ts";


interface Prop{
    width:string,
    readOnly:boolean
    value:string,
    type:string,
    placeholder:string
    height:string
}



export const Form=(props:Prop)=>{
    const {width,readOnly,value,type,placeholder,height}=props;
    const formStyle={
        width:width,
        height:height
    }

    const typeStoring=(e:Event)=>{
        const target=e.currentTarget as HTMLTextAreaElement;
        storeValue(type,target.value)
        
        // storeValue(type,target.value)
    }
    
    return (
        
        <textarea type="text" class="form-style" style={formStyle} readOnly={readOnly} value={value} placeholder={placeholder} onInput={typeStoring}/>
    );
}