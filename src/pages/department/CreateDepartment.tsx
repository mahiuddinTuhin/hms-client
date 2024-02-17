/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input } from "antd";
import React from "react";
import { Navigate } from "react-router-dom";
import { useCreateDepartmentMutation } from "../../redux/features/departments/departmentApi";
import toastError from "../../utils/toastError/toastError";
import { TDepartment } from "./interface";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:");
  console.log("Failed:", errorInfo);
};

const CreateDepartment: React.FC = () => {
  const [form] = Form.useForm();
  const [CreateDepartment, { isError, error }] = useCreateDepartmentMutation();

  toastError(isError, error);

  // isError && toast.error(error);
  const onFinish = async (values: any) => {
    const result = await CreateDepartment(values);

    if (result) {
      form.resetFields();
      <Navigate to="/" />;
    }
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 12 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="p-4  "
    >
      <Form.Item<TDepartment>
        label="Department Name"
        name="departmentName"
        rules={[{ required: true, message: "Please input department name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<TDepartment>
        label="Details"
        name="departmentDetails"
        rules={[
          { required: true, message: "Please input department details!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<TDepartment>
        label="Contact"
        name="contact"
        // wrapperCol={{ offset: 8, span: 16 }}
        rules={[
          { required: true, message: "Please input contact information!" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item<TDepartment>
        label="Medical License"
        name="medicalLicense"
        // wrapperCol={{ offset: 8, span: 16 }}
        rules={[{ required: true, message: "Please input medical license!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 16 }} className="mt-12">
        <Button type="default" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateDepartment;
