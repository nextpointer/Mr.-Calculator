import { Header } from "../components/header.tsx";
import { Footer } from "../components/footer.tsx";
import { Form } from "../islands/Forms.tsx";
import { Button } from "../islands/Button.tsx";
import { resultArea,textArea1,textArea2,precision } from "./AllMethods.ts";

export function Calculator() {
    return (
      <>
      <div className={"merge-header-calculator"}>
        <Header />
        <div id="container">
          <div class="input-section">
            <div className="fill-ip-section">
              <Form width="80%" readOnly={false} value={textArea1.value} type='t1' height="16vh" placeholder="operand1"/>
              <Form width="80%" readOnly={false} value={textArea2.value} type='t2' height="16vh" placeholder="operand2"/>
            </div>
            <div className="operation-section">
            <Form width="100%" readOnly={false} value={precision.value} type='t3' height="8vh" placeholder="precision"/>
                <Button value="+" width="90px" label="x+y"/>
                <Button value="-" width="90px" label="x-y"/>
                <Button value="*" width="90px" label="x*y"/> 
                <Button value="/" width="90px" label="x/y"/>
                <Button value="%" width="90px" label="x%y"/>
                <Button value="^" width="90px" label="x^y"/>
                       
            </div>
          </div>
          <div className="output-section">
          <Form width="80%" readOnly={true} value={resultArea.value} type='' placeholder="result" height="16vh"/>
          <Button value="clear" width="90px" label="Clear"/>
          </div>
        </div>
        </div>
        <Footer></Footer>
      </>
    );
  }