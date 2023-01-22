import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { forgotPassword as forgotAction } from "../redux/actions/auth";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

const resetScheme = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const Forgot = () => {
  const [errMessage, setErrMessage] = React.useState("");
  const [showAlert, setShowAlert] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const forgot = async (value) => {
    const cb = () => {
      navigate("/reset");
    };

    try {
      const result = await dispatch(forgotAction({ ...value, cb }));
      if (result.payload.startsWith("Req")) {
        setErrMessage(result.payload);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex">
      <div
        className=" w-[800px] h-[1054px] bg-cover bg-center bg-[url('../images/background.png')]
      max-[425px]:hidden"
      >
        <div className="bg-[#2B156BCC] opacity-80  w-[800px] h-[1054px]">
          <div className="pl-[117px] pt-[80px]">
            <div className="mb-[101px]">
              <img src={require("../assets/images/logoatas.png")} alt="logoforgot" />
            </div>
            <div className="mb-[77px]">
              <div className="text-[48px] text-white">Let's reset your password</div>
              <div className="text-[24px] text-[#FFFFFFB2]">To be able to use your account again, please</div>
              <div className="text-[24px] text-[#FFFFFFB2]">complete the following steps.</div>
            </div>
            <div className="flex mb-[46px]">
              <div className="text-[24px] text-[#29034180] font-bold border-2 rounded-[50%] bg-white mr-[42px] p-[7px]">1</div>
              <div className="text-[24px] text-[#FFFFFF] font-bold">Fill your complete email</div>
            </div>
            <div className="flex mb-[46px]">
              <div className="text-[24px] text-[#FFFFFF] border-2 rounded-[50%] mr-[42px] p-[7px]">2</div>
              <div className="text-[24px] text-[#FFFFFF]">Check your email</div>
            </div>
            <div className="flex mb-[46px] ">
              <div className="text-[24px] text-[#FFFFFF] border-2 rounded-[50%] mr-[42px] p-[7px]">3</div>
              <div className="text-[24px] text-[#FFFFFF]">Enter your new password</div>
            </div>
            <div className="flex ">
              <div className="text-[24px] text-[#FFFFFF] border-2 rounded-[50%] mr-[42px] p-[7px]">4</div>
              <div className="text-[24px] text-[#FFFFFF] ">Done</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="basis-2/5 pt-[176px] pr-20 pl-[83px]
      min-[320px]: w-[320px] pt-[30px] max-[425px]:text-[70%] pt-[30px] w-[425px]"
      >
        <div className=" text-[26px] mb-3 font-[600px]">Fill your complete email</div>
        <div className=" text-[18px] tracking-[.007em] leading-[22px] mb-12 text-[#AAAAAA] font-[400px]">we'll send a link to your email shortly</div>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={resetScheme}
          onSubmit={forgot}
        >
          {({ errors, touched }) => (
            <Form>
              <label>Email</label>
              <div className="mb-5">
                <Field className="form-input w-full pl-5 py-4 border-2 box-border rounded-[12px] mt-3" type="email" name="email" placeholder="Write your email" />
                {errors.email && touched.email ? <div className=" text-red-500 text-sm">{errors.email}</div> : null}
              </div>
              <div>
                <button type="submit" className="w-full box-border border-2 pr-10 pl-10 py-4 text-center bg-[#5F2EEA] rounded-[12px] mb-[32px] text-white font-bold">
                  Send
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div></div>
      </div>
    </div>
  );
};

export default Forgot;
