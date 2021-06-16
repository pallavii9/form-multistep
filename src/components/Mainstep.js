import React from "react";

import { Steps, Step } from "react-step-builder";
import Step1 from "./Step1";
import Step2 from "./Step2";
import FinalStep from "./FinalStep";
import { Button, Col, Row } from "antd";

const Navigation = (props) => {
  console.log({ props });
  return (
    <Row align="center">
      <Col>
        <Button type="primary" onClick={props.prev} style={{ marginRight: 10 }}>
          Previous
        </Button>
      </Col>
      <Col>
        <Button type="primary" onClick={props.next}>
          Next
        </Button>
      </Col>
    </Row>
  );
};

function Mainstep() {
  const config = {
    navigation: {
      component: Navigation, // a React component with special props provided automatically
      location: "after" // or before
    }
  };

  return (
    <div className="App">
     
      <Steps config={config}>
        <Step component={Step1} />
        <Step component={Step2} />
        <Step component={FinalStep} />
      </Steps>
    </div>
  );
}

export default Mainstep;
