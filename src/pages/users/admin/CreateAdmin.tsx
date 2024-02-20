/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Typography,
  Upload,
  UploadProps,
} from "antd";
import React, { useState } from "react";
import { MdCancel, MdUpload } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/ui/loader/Loader";
import { useCreateAdminMutation } from "../../../redux/features/auth/authApi";
import toastError from "../../../utils/toastError/toastError";
import { TAdmin } from "../../department/interface";

const defaultUploadFile: any = {
  uid: "-1",
  name: "",
  status: "done",
  url: "",
  // ... other properties
};
const CreateAdmin: React.FC = () => {
  const [imageFile, setImageFile] = useState(defaultUploadFile);
  const [form] = Form.useForm();
  const formData = new FormData();
  const navigate = useNavigate();
  const [createAdmin, { isError, error, isLoading, isSuccess }] =
    useCreateAdminMutation();

  toastError(isError, error);

  // isError && toast.error(error);
  const onFinish = async (values: any) => {
    const { profilePicture, ...data } = values;

    formData.append("data", JSON.stringify(data));
    formData.append("file", imageFile);

    const result: any = await createAdmin(formData);

    if (!isLoading && result?.data && result?.data?.success) {
      form.resetFields();
      navigate("/");
    }
  };

  const props: UploadProps = {
    beforeUpload: (file) => {
      setImageFile(file);

      return false;
    },
  };

  if (isLoading && !isSuccess) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center justify-center mt-12 ">
      <div>
        <h1 className="mb-4 md:ml-40">Create Admin Account</h1>
      </div>
      <div className="max-w-[350px] md:mx-w-[600px] md:min-w-[600px]">
        <Form layout="vertical" onFinish={onFinish}>
          <Divider orientation="center" orientationMargin="0">
            <Typography.Title level={4}>User Name</Typography.Title>
          </Divider>
          <Row gutter={24}>
            {/*  // ! first name  */}
            <Col md={8} xs={24}>
              <Form.Item<TAdmin>
                name={["fullName", "firstName"]}
                label="First name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            {/*  // ! middle name  */}
            <Col md={8} xs={24}>
              <Form.Item<TAdmin>
                name={["fullName", "middleName"]}
                label="Middle name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            {/*  // ! last name  */}
            <Col md={8} xs={24}>
              <Form.Item<TAdmin>
                name={["fullName", "lastName"]}
                label="Last name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Divider orientation="center" orientationMargin={20}>
            <Typography.Title level={5}>User Info</Typography.Title>
          </Divider>

          <Row gutter={8}>
            {/* // ! email */}
            <Col lg={10} md={12} xs={24}>
              <Form.Item<TAdmin>
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input type="email" />
              </Form.Item>
            </Col>
            {/* // ! phone */}
            <Col lg={8} md={12} xs={24}>
              <Form.Item<TAdmin>
                name="phone"
                label="Phone"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            {/* // ! birth date */}

            <Col lg={6} md={12} xs={24}>
              <Form.Item<TAdmin>
                name="dateOfBirth"
                label="Date Of Birth"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <DatePicker
                // onChange={(date) => setDate(date)}
                />
              </Form.Item>
            </Col>
            {/* // ! gender */}
            <Col lg={6} md={12} xs={24}>
              <Form.Item<TAdmin>
                name="gender"
                label="Gender"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select gender"
                  optionFilterProp="gender"
                  options={[
                    {
                      value: "Female",
                      label: "female",
                    },
                    {
                      value: "Male",
                      label: "male",
                    },
                    {
                      value: "Others",
                      label: "others",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            {/* // ! profile image */}

            <Col lg={8} md={12} xs={24}>
              <Form.Item
                name="profilePicture"
                label="profile Picture"
                valuePropName="file"
              >
                <Upload {...props} name="profilePicture" maxCount={1}>
                  <Button icon={<MdUpload />}>Click to upload</Button>
                </Upload>
              </Form.Item>
            </Col>

            {/*  // ! present address  */}
            <Col xs={24}>
              <Form.Item<TAdmin>
                name={["address", "presentAddress"]}
                label="Present Address"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            {/*  // ! Permanent Address */}
            <Col xs={24}>
              <Form.Item<TAdmin>
                name={["address", "permanentAddress"]}
                label="Permanent Address"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Divider orientation="center" orientationMargin={20}>
            <Typography.Title level={5}>Education</Typography.Title>
          </Divider>
          <Form.List
            name="education"
            initialValue={[
              {
                institute: "",
                degree: "",
                year: null,
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
                        name={[name, "institute"]}
                        rules={[
                          {
                            required: true,
                            message: "institute name is required.",
                          },
                        ]}
                        label="Institute"
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={4}>
                      <Form.Item
                        {...restField}
                        name={[name, "degree"]}
                        label="Degree"
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={4}>
                      <Form.Item
                        {...restField}
                        name={[name, "year"]}
                        label="Year"
                      >
                        <DatePicker picker="year" />
                      </Form.Item>
                    </Col>
                    <Col xs={2}>
                      <Typography.Title
                        level={4}
                        onClick={() => remove(name)}
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        <MdCancel className="mt-4" />
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
