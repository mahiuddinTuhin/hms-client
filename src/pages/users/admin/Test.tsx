/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Typography,
} from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCreateDepartmentMutation } from "../../../redux/features/departments/departmentApi";
import toastError from "../../../utils/toastError/toastError";

// const onFinishFailed = (errorInfo: any) => {
//   console.log("Failed:");
//   console.log("Failed:", errorInfo);
// };

const CreateAdmin: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [CreateDepartment, { isError, error }] = useCreateDepartmentMutation();

  toastError(isError, error);

  // isError && toast.error(error);
  const onFinish = async (values: any) => {
    console.log(values);
    // const result: any = await CreateDepartment(values);

    // if () {
    //   // console.log(!result.error);
    //   form.resetFields();
    //   navigate("/");
    // }
  };
  return (
    <div className="flex flex-col items-center justify-center mt-12 ">
      <div>
        <h1 className="mb-4 md:ml-40">Create Admin Account</h1>
      </div>
      <div className="max-w-[350px] md:mx-w-[600px] md:min-w-[600px]">
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Full name" />
          </Form.Item>

          <Divider orientation="center" orientationMargin="0">
            <Typography.Title level={4}>User Info</Typography.Title>
          </Divider>

          <Row gutter={12}>
            <Col md={12} xs={24}>
              <Form.Item
                name={["user", "phone_no"]}
                label="Phone No."
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input type="number" />
              </Form.Item>
            </Col>
            <Col md={12} xs={24}>
              <Form.Item name={["user", "email"]} label="Email">
                <Input type="email" />
              </Form.Item>
            </Col>
          </Row>

          <Divider orientation="center" orientationMargin={20}>
            <Typography.Title level={5}>Office Address</Typography.Title>
          </Divider>

          <Row gutter={10}>
            <Col lg={6} md={12} xs={24}>
              <Form.Item
                name={["office", 0, "address", 0, "state"]}
                label="State"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col lg={6} md={12} xs={24}>
              <Form.Item
                name={["office", 0, "address", 0, "district"]}
                label="District"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col lg={6} md={12} xs={24}>
              <Form.Item
                name={["office", 0, "address", 0, "city"]}
                label="City"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col lg={6} md={12} xs={24}>
              <Form.Item
                name={["office", 0, "address", 0, "tole"]}
                label="Tole"
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Divider orientation="center" orientationMargin={20}>
            <Typography.Title level={5}>Office Contact</Typography.Title>
          </Divider>
          <Form.List
            name={["office", 0, "contact"]}
            initialValue={[
              {
                phone_no: "",
                is_primary: false,
              },
            ]}
          >
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Row gutter={10} key={key} align="middle">
                    <Col md={14} xs={18}>
                      <Form.Item
                        {...restField}
                        name={[name, "phone_no"]}
                        rules={[
                          { required: true, message: "Phone no is required." },
                        ]}
                        label="Phone No"
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={4}>
                      <Form.Item
                        {...restField}
                        name={[name, "is_primary"]}
                        valuePropName="checked"
                        label="Is primary?"
                      >
                        <Checkbox />
                      </Form.Item>
                    </Col>
                    <Col xs={2}>
                      <Typography.Title
                        level={2}
                        size={30}
                        onClick={() => remove(name)}
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        X
                      </Typography.Title>
                    </Col>
                  </Row>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    icon="+"
                    block
                    size="large"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Add another contact
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CreateAdmin;
