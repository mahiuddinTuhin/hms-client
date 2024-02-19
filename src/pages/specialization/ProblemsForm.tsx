/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Form, Input } from "antd";
import { TMedicalProblem } from "../department/interface";

function ProblemsForm(setAllProblems: any) {
  const onFinishproblems = (values: any) => {
    console.log(values);
  };
  const onFinishFailed = () => {};

  return (
    <Card style={{ marginTop: 16 }} title="Problem details">
      <Form.Item<TMedicalProblem>
        label="Problem Name"
        name="problemName"
        // wrapperCol={{ offset: 8, span: 16 }}
        rules={[
          {
            required: true,
            message: "Please input name of problem!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item<TMedicalProblem>
        label="Problem Hints"
        name="problemHints"
        // wrapperCol={{ offset: 8, span: 16 }}
        rules={[
          {
            required: true,
            message: "Please input problem hints!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item<TMedicalProblem>
        label="Symptoms"
        name="symptoms"
        // wrapperCol={{ offset: 8, span: 16 }}
        rules={[
          {
            required: true,
            message: "Please input symptoms!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item<TMedicalProblem>
        label="Supports From Hospital"
        name="supportsFromHospital"
        // wrapperCol={{ offset: 8, span: 16 }}
        rules={[
          {
            required: true,
            message: "Please input list of supports From Hospital!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item<TMedicalProblem>
        label="Treatments"
        name="treatments"
        // wrapperCol={{ offset: 8, span: 16 }}
        rules={[
          {
            required: true,
            message: "Please input list of treatments!",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Card>
  );
}

export default ProblemsForm;
