import { signal } from "@preact/signals";
import { Header } from "../components/header.tsx";
import { Form } from "../islands/Forms.tsx";
import { Button } from "../islands/Button.tsx";
import { resultArea,textArea1,textArea2 } from "./AllMethods.ts";

export function Calculator() {
    return (
      <>
        <Header />
        <div id="container">
          <div class="input-section">
            <div className="fill-ip-section">
              <Form width="80%" readOnly={false} value={textArea1.value} type='t1' />
              <Form width="80%" readOnly={false} value={textArea2.value} type='t2' />
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
          <Form width="60%" readOnly={true} value={resultArea.value} type=''/>
          </div>
        </div>
      </>
    );
  }