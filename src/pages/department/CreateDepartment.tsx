/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCreateDepartmentMutation } from "../../redux/features/departments/departmentApi";
import toastError from "../../utils/toastError/toastError";
import { TDepartment } from "./interface";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:");
  console.log("Failed:", errorInfo);
};

const CreateDepartment: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [CreateDepartment, { isError, error }] = useCreateDepartmentMutation();

  toastError(isError, error);

  // isError && toast.error(error);
  const onFinish = async (values: any) => {
    const result: any = await CreateDepartment(values);

    if (!result.error) {
      // console.log(!result.error);
      form.resetFields();
      navigate("/");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center mt-12 ">
      <div>
        <h1 className="mb-4 md:ml-40">Create Department</h1>
      </div>
      <div className="max-w-[350px] md:mx-w-[600px] md:min-w-[600px]">
        <Form
          name="basic"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 36 }}
          // style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="p-4"
        >
          <Form.Item<TDepartment>
            label="Department Name"
            name="departmentName"
            rules={[
              { required: true, message: "Please input department name!" },
            ]}
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
            // wrapperCol={{ offset: 0, span: 12 }}
            rules={[
              { required: true, message: "Please input medical license!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item className="mt-12 flex justify-end ">
            <Button
              type="primary"
              className="w-[200px] md:w-[330px]"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CreateDepartment;
