/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input } from "antd";
import { TMedicalProblem, TSpecializations } from "../department/interface";

function ProblemsForm(setAllProblems: any) {
  const onFinishproblems = (values: any) => {
    console.log(values);
  };
  const onFinishFailed = () => {};

  return (
    <Form.Item<TSpecializations>
      label="Problems"
      name="problems"
      // wrapperCol={{ offset: 8, span: 16 }}
    >
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
    </Form.Item>
  );
}

export default ProblemsForm;
