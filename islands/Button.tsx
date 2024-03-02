import {operationValue,operation} from './AllMethods.ts'
interface Prop{
    value:string,
    width:string,
    label:string
}


export const Button=(props:Prop)=>{
    const {value,width,label}=props;
    const storeOperation=(e:Event)=>{
        const target=e.currentTarget as HTMLButtonElement;
        operationValue.value=target.value

    }

    const handleClick = (e:Event) => {
        const target = e.currentTarget as HTMLButtonElement;
        
        storeOperation(e); // Call first function 
        operation(e); // Call second function
        
    };

    return (
        <button class="btn" value={value} style={{width:width}} onClick={handleClick} >{props.label}</button>
    );
}