import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { GiTicket } from "react-icons/gi";
import { RxDividerVertical } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { resetPassword as resetAction } from "../redux/actions/auth";
import { Formik, Form, Field, validateYupSchema } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

const forgotScheme = Yup.object().shape({
  password: Yup.string().password().min(8, "Min lenght 8").minLowercase(1, "Min lowercase 1").minUppercase(1, "Min uppercase 1").minSymbols(1, "Min symbol 1").minNumbers(1, "Min number 1").required("Required"),
  confirmPassword: Yup.string().password().min(8, "Min lenght 8").minLowercase(1, "Min lowercase 1").minUppercase(1, "Min uppercase 1").minSymbols(1, "Min symbol 1").minNumbers(1, "Min number 1").required("Required"),
  code: Yup.string().required("Required"),
});

const Reset = () => {
  const state = useLocation();
  const [errMessage, setErrMessage] = React.useState("");
  const [show, setShow] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleShow = () => {
    setShow(!show);
  };

  const reset = async (value) => {
    const code = value.code;
    const email = state;
    const password = value.password;
    const confirmPassword = value.confirmPassword;

    if (password !== confirmPassword) {
      return setErrMessage("Password and confirm password does not match!");
    }

    const cb = () => {
      navigate("/signin");
    };

    try {
      const result = await dispatch(resetAction({ code, email, password, confirmPassword, cb }));
      cb();
      setErrMessage(result.payload);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="lg:flex">
      <div
        className="hidden lg:block w-[800px] h-[1054px] bg-cover bg-center bg-[url('../images/background.png')]
      "
      >
        <div className="bg-[#0b2361]  w-[800px] h-[1054px]">
          <div className="pl-[117px] pt-[80px]">
            <div className=" relative">
              <span className="text-[100px] text-[#ef91a1] font-Rubik">Cluezzy</span>
              <GiTicket className="text-[#ef91a1] text-[50px] absolute right-56 top-10" />
            </div>
            <div className="mb-[77px]">
              <div className="text-[48px] text-white">Let's reset your password</div>
              <div className="text-[24px] text-[#FFFFFFB2]">To be able to use your account again, please</div>
              <div className="text-[24px] text-[#FFFFFFB2]">complete the following steps.</div>
            </div>
            <div className="flex ">
              <div className="mr-[42px] pt-[7px] pl-[7px] pr-[7px]">
                <div className="w-[40px] h-[40px] border-2 rounded-[50%] bg-white flex justify-center items-center text-[24px] text-[#ef91a1] border-[#ef91a1]">1</div>
              </div>
              <div className="text-[24px] text-[#FFFFFF] pt-2">Fill your complete email</div>
            </div>
            <div className="">
              <RxDividerVertical className="text-[#ef91a1] text-[50px]" />
            </div>
            <div className="flex ">
              <div className="mr-[42px]  pl-[7px] pr-[7px]">
                <div className="w-[40px] h-[40px] border-2 rounded-[50%] bg-white flex justify-center items-center text-[24px] text-[#ef91a1] border-[#ef91a1]">2</div>
              </div>
              <div className="text-[24px] text-[#FFFFFF] ">Check your email</div>
            </div>
            <div className="">
              <RxDividerVertical className="text-[#ef91a1] text-[50px]" />
            </div>
            <div className="flex ">
              <div className="mr-[42px] pl-[7px] pr-[7px]">
                <div className="w-[40px] h-[40px] border-2 rounded-[50%] bg-[#ef91a1] flex justify-center items-center text-[24px] text-white border-[#ef91a1]">3</div>
              </div>
              <div className="text-[24px] text-[#FFFFFF]  font-bold">Enter your new password</div>
            </div>
            <div className="">
              <RxDividerVertical className="text-[#ef91a1] text-[50px]" />
            </div>
            <div className="flex mb-[46px]">
              <div className="mr-[42px] pl-[7px] pr-[7px]">
                <div className="w-[40px] h-[40px] border-2 rounded-[50%] bg-white flex justify-center items-center text-[24px] text-[#ef91a1] border-[#ef91a1]">4</div>
              </div>
              <div className="text-[24px] text-[#FFFFFF]">Done</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="basis-full lg:basis-2/5 pt-12 lg:pt-[100px] pr-3 lg:pr-20 pl-3 lg:pl-[83px]
       "
      >
        <div className="relative block lg:hidden">
          <span className="text-[50px] text-[#ef91a1] font-Rubik lg:ext-[100px]">Cluezzy</span>
          <GiTicket className="text-[#ef91a1] text-[25px] absolute left-52 top-5" />
        </div>
        <div className=" text-[26px] mb-3 font-[600px]">Fill your complete password</div>
        <div className=" text-[18px] tracking-[.007em] leading-[22px] mb-12 text-[#AAAAAA] font-[400px]">set your new password</div>
        <Formik
          initialValues={{
            code: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={forgotScheme}
          onSubmit={reset}
        >
          {({ errors, touched }) => (
            <Form className="">
              {errMessage ? (
                <div className="alert alert-error shadow-lg">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{errMessage}</span>
                  </div>
                </div>
              ) : null}
              <div className=" mb-3 text-[16px]">
                <label>Code</label>
                <Field className="form-input w-full pl-5 py-4 border-2 box-border rounded-[12px] mt-3 focus:outline-none" name="code" placeholder="Write your code" />
                {errors.code && touched.code ? <div className="text-red-500 text-sm ">{errors.code}</div> : null}
              </div>{" "}
              {/* <div className=" mb-3">
                <label>Email</label>
                <Field className="form-input w-full pl-5 py-4 border-2 box-border rounded-[12px] mt-3" type="email" name="email" placeholder="Write your email" />
                {errors.email && touched.email ? <div className="text-red-500 text-sm ">{errors.email}</div> : null}
              </div> */}
              <div className=" mb-3 relative text-[16px] flex flex-col">
                <label>Password</label>
                <Field className="form-inpu lg:w-[295px] lg:w-full pl-5 py-4 border-2 box-border rounded-[12px] mt-3 focus:outline-none" type={show ? "text" : "password"} name="password" placeholder="Write your password" />
                <label onClick={handleShow} className="absolute right-8 top-14 cursor-pointer">
                  {show ? <BsEyeSlash className="w-[20px] h-[20px]" /> : <BsEye className="w-[20px] h-[20px]" />}
                </label>
                {errors.password && touched.password ? <div className="text-red-500 text-sm ">{errors.password}</div> : null}
              </div>
              <div className="mb-5 relative text-[16px] flex flex-col">
                <label>Confirm Password</label>
                <Field className="form-input lg:w-[295px] lg:w-full pl-5 py-4 border-2 box-border rounded-[12px] mt-3 focus:outline-none" type={show ? "text" : "password"} name="confirmPassword" placeholder="Write your confirm password" />
                <label onClick={handleShow} className="absolute right-8 top-14 cursor-pointer">
                  {show ? <BsEyeSlash className="w-[20px] h-[20px]" /> : <BsEye className="w-[20px] h-[20px]" />}
                </label>
                {errors.confirmPassword && touched.confirmPassword ? <div className="text-red-500 text-sm ">{errors.confirmPassword}</div> : null}
              </div>
              <div>
                <button type="submit" className=" w-full  py-4 text-center bg-[#f1554c] rounded-[12px] mb-[32px] text-white font-bold">
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Reset;
