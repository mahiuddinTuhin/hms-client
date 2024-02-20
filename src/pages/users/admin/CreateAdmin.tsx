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
} from "antd";
import React, { useState } from "react";
import { MdAddAPhoto, MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useCreateAdminMutation } from "../../../redux/features/auth/authApi";
import toastError from "../../../utils/toastError/toastError";
import { TAdmin } from "../../department/interface";

// const onFinishFailed = (errorInfo: any) => {
//   console.log("Failed:");
//   console.log("Failed:", errorInfo);
// };

const CreateAdmin: React.FC = () => {
  const [date, setDate] = useState([] as any[]);
  console.log(date);
  const [form] = Form.useForm();
  const formData = new FormData();
  const navigate = useNavigate();
  const [createAdmin, { isError, error }] = useCreateAdminMutation();

  toastError(isError, error);
  console.log(error);

  // isError && toast.error(error);
  const onFinish = async (values: any) => {
    console.log(values);
    const { profilePicture, ...data } = values;

    formData.append("data", JSON.stringify(data));

    console.log(formData);

    const result: any = await createAdmin(formData);

    if (!result?.error) {
      console.log(result);
      form.resetFields();
      navigate("/");
    }
  };

  // const props: UploadProps = {
  //   // action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  //   listType: "picture",

  //   beforeUpload(file) {
  //     return new Promise((resolve) => {
  //       const reader = new FileReader();
  //       reader.readAsDataURL(file);
  //       reader.onload = () => {
  //         const img = document.createElement("img");
  //         img.src = reader.result as string;
  //         img.onload = () => {
  //           const canvas = document.createElement("canvas");
  //           canvas.width = img.naturalWidth;
  //           canvas.height = img.naturalHeight;
  //           const ctx = canvas.getContext("2d")!;
  //           ctx.drawImage(img, 0, 0);
  //           ctx.fillStyle = "red";
  //           ctx.textBaseline = "middle";
  //           ctx.font = "33px Arial";
  //           ctx.fillText("Ant Design", 20, 20);
  //           canvas.toBlob((result) => resolve(result as any));
  //         };
  //       };
  //     });
  //   },
  // };

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
              <Form.Item label="Upload" valuePropName="profilePicture">
                <Upload
                  action="/upload.do"
                  maxCount={1}
                  listType="picture-card"
                >
                  <button
                    style={{ border: 0, background: "none" }}
                    type="button"
                  >
                    <MdAddAPhoto />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </button>
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
