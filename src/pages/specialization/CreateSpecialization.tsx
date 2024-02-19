/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Form, Input, Select } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useAllDepartmentsQuery,
  useCreateSpecializationMutation,
} from "../../redux/features/departments/departmentApi";
import toastError from "../../utils/toastError/toastError";
import {
  TDepartment,
  TMedicalProblem,
  TSpecializations,
} from "../department/interface";
import ProblemsForm from "./ProblemsForm";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:");
  console.log("Failed:", errorInfo);
};

const CreateSpecializationn: React.FC = () => {
  const [departmentId, setDepartmentId] = useState("");

  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [CreateSpecialization, { isError, error }] =
    useCreateSpecializationMutation();

  const {
    data: departments,
    isLoading,
    isSuccess,
  } = useAllDepartmentsQuery(undefined);

  toastError(isError, error);

  const onFinish = async (values: any) => {
    const sepcialization: TSpecializations = {
      specializationName: values.specializationName.trim(),
      specializationDetails: values.specializationDetails.trim(),
      department: departmentId,
      problems: [
        {
          problemName: values.problemName.trim(),
          problemHints: values.problemHints.trim(),
          symptoms: values.symptoms.split(","),
          supportsFromHospital: values.supportsFromHospital.split(","),
          treatments: values.treatments.split(","),
        },
      ] as TMedicalProblem[],
    };

    console.log(sepcialization);

    const result: any = await CreateSpecialization(sepcialization);

    if (!result.error) {
      form.resetFields();
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-12 ">
      <div>
        <h1 className="mb-4 md:ml-40">Create Specialization</h1>
      </div>
      <div className="max-w-[350px] md:mx-w-[600px] md:min-w-[600px]">
        <Form
          name="specialization"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 36 }}
          // style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="p-4"
        >
          <Card title="Specialization Details">
            {/* // !   Specialization Name */}
            <Form.Item<TSpecializations>
              label="Specialization Name"
              name="specializationName"
              rules={[
                {
                  required: true,
                  message: "Please input specialization name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            {/* //  ! Details */}
            <Form.Item<TSpecializations>
              label="Details"
              name="specializationDetails"
              rules={[
                { required: true, message: "Please input department details!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item<TSpecializations>
              label="Department"
              name="department"
              // wrapperCol={{ offset: 0, span: 12 }}
              rules={[
                { required: true, message: "Please input medical license!" },
              ]}
            >
              {/* <Input /> */}
              {!isLoading && isSuccess && (
                <Select
                  style={{ width: 120 }}
                  onChange={(value) => setDepartmentId(value)}
                  options={departments.map((department: TDepartment) => ({
                    label: department.departmentName,
                    value: department._id,
                  }))}
                />
              )}
            </Form.Item>
          </Card>
          {/* // ! Problems */}
          <ProblemsForm />

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

export default CreateSpecializationn;
