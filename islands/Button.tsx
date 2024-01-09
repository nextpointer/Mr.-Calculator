
interface Prop{
    value:string,
    width:string,
    label:string
}


export const Button=(props:Prop)=>{
    const {value,width,label}=props;

    return (
        <button class="btn" value={value} style={{width:width}}>{props.label}</button>
    );
}