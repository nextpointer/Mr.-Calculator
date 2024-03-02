import { signal } from "@preact/signals";
import { Header } from "../components/header.tsx";
import { Form } from "../islands/Forms.tsx";
import { Button } from "../islands/Button.tsx";
import { takeValue1 } from "../islands/AllMethods.tsx";



export default function Home() {
  return (
    <>
      <Header />
      <div id="container">
        <div class="input-section">
          <div className="fill-ip-section">
            <Form width="80%" readOnly={false} value={50} onClick={takeValue1} />
            <Form width="80%" readOnly={false} value={30} onClick={takeValue1}/>
          </div>
          <div className="operation-section">
              <Button value="+" width="90px" label="x+y"/>
              <Button value="-" width="90px" label="x-y"/>
              <Button value="*" width="90px" label="x*y"/> 
              <Button value="/" width="90px" label="x/y"/>
              <Button value="%" width="90px" label="x%y"/>
              <Button value="^" width="90px" label="x^y"/>
              <Button value="=" width="100%" label="CALCULATE"/>            
          </div>
        </div>
        <div className="output-section">
        <Form width="60%" readOnly={true} value={0} onClick={takeValue1}/>
        </div>
      </div>
    </>
  );
}
