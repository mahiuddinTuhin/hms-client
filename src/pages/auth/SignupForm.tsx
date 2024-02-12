/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input } from "antd";
import { FC } from "react";
import { FcPrivacy } from "react-icons/fc";
import { HiPhone } from "react-icons/hi";
import { MdAlternateEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useCreatePatientMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks/hooks";

const SignupForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [createPatient, { isError, error: err }] = useCreatePatientMutation();

  const handleSubmit = async ({ email, password, phone }: any) => {
    const toastId = toast.warning("creating account..", { duration: 2000 });

    try {
      // console.log(values);
      const res = await createPatient({ email, password, phone }).unwrap();

      isError && console.log("err");

      toast.success("created account", { id: toastId, duration: 2000 });

      // navigate(`/${user?.role}/dashboard`);
    } catch (error: any) {
      error?.data &&
        toast.error(`${error.data!.errors[0].message}`, {
          id: toastId,
          duration: 2000,
        });
    }
  };

  return (
    <>
      <Form
        // labelCol={{ span: 4 }}
        wrapperCol={{ span: 24 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
        onFinish={handleSubmit}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input prefix={<MdAlternateEmail />} placeholder="email" allowClear />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[{ required: true, message: "Please input your phone!" }]}
        >
          <Input prefix={<HiPhone />} placeholder="phone" allowClear />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            addonBefore={<FcPrivacy />}
            placeholder="password"
            allowClear
          />
        </Form.Item>

        <div className="my-6">
          <Button
            htmlType="submit"
            type="text"
            className="w-full rounded-md bg-black px-3 h-10 text-white focus:bg-gray-600 focus:outline-none"
          >
            Signup
          </Button>
        </div>
      </Form>
    </>
  );
};

export default SignupForm;
