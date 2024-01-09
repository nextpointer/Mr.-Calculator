import { signal } from "@preact/signals";

interface Prop{
    width:string,
    readOnly:boolean
}

export const Form=(props:Prop)=>{
    const {width,readOnly}=props;
    const formStyle={
        width:width
    }

    
    return (
        <textarea type="text" class="form-style" style={formStyle} readOnly={readOnly} />
    );
}