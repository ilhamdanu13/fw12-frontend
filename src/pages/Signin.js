import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { loginAction } from "../redux/actions/auth";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

const SignInScheme = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const Signin = () => {
  const [errMessage, setErrMessage] = React.useState("");
  const [showAlert, setShowAlert] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [show, setShow] = React.useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  // const loginRequest = async (event) => {
  //   event.preventDefault();
  //   const { value: email } = event.target.email;
  //   const { value: password } = event.target.password;
  //   //   if (email === "admin@mail.com" && password === "1234") {
  //   //     navigate("/homepage");
  //   //   } else {
  //   //     setShowAlert(true);
  //   //   }
  //   //   event.preventDefault();
  //   // };
  //   try {
  //     const form = URLSearchParams({
  //       email,
  //       password,
  //     });

  //     const { data } = await axios.post("http://localhost:8888/auth/login", form);
  //   } catch (e) {
  //     setShowAlert(true);
  //   }
  // };

  const login = async (value) => {
    const cb = () => {
      navigate("/homepage");
    };

    try {
      const result = await dispatch(loginAction({ ...value, cb }));

      if (result.payload.startsWith("Wrong")) {
        setErrMessage(result.payload);
      }
    } catch (err) {
      console.log(err);
    }

    //   const { value: email } = event.target.email;
    //   const { value: password } = event.target.password;
    //   if (email && password) {
    //     const cb = () => {
    //       navigate("/homepage");
    //     };
    //     dispatch(loginAction({ email, password, cb }));
    //   }
    // };
  };
  return (
    <div className="flex">
      <div
        className=" w-[800px] h-[1054px] bg-cover bg-center  bg-[url('../images/background.png')]
      max-[425px]:hidden"
      >
        <div className="bg-[#2B156BCC] opacity-80  w-[800px] h-[1054px]">
          <div className="pt-[390px] pl-[150px]">
            <div className="">
              <img src={require("../assets/images/tickitz 1.png")} alt="logo" />
            </div>
            <div className="text-[48px] text-white pl-[50px]">
              <div> wait, watch, wow!</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="basis-2/5 pt-[100px] pr-20 pl-[83px]
      min-[320px]: max-[425px]:text-[80%] "
      >
        <div className=" text-[48px] mb-3 font-[600px]">Sign In</div>
        <div className=" text-[18px] tracking-[.007em] leading-[22px] mb-3 text-[#AAAAAA] font-[400px]">Sign in with your data that you entered during your registration</div>
        {/* {showAlert && ( */}
        {/* <div className="bg-red-400 border border-red-700 mb-3 py-4 flex justify-center rounded-[12px]">
          <span>Wrong username or password</span>
        </div> */}
        {/* )} */}
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={SignInScheme}
          onSubmit={login}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="flex flex-col mb-3">
                <label>Email</label>
                <Field type="email" name="email" placeholder="Write your email" className="form-input pr-20 pl-5 py-4 border-2 box-border rounded-[12px] mt-3 " />
                {errors.email && touched.email ? <div className=" text-red-500 text-sm">{errors.email}</div> : null}
              </div>
              <div className="flex flex-col mb-12 relative">
                <label>Password</label>
                <Field type={show ? "text" : "password"} name="password" placeholder="Write your password" className="form-input pr-20 pl-5 py-4 border-2 box-border rounded-[12px] mt-3" />
                <label onClick={handleShow} className="absolute right-8 top-14 cursor-pointer">
                  {show ? <BsEyeSlash className="w-[20px] h-[20px]" /> : <BsEye className="w-[20px] h-[20px]" />}
                </label>
                {errors.password && touched.password ? <div className="text-red-500 text-sm ">{errors.password}</div> : null}
              </div>
              <div>
                <button type="submit" className="w-full text-white font-bold box-border border-2 pr-10 pl-10 py-4 text-center bg-[#5F2EEA] rounded-[12px] mb-[32px]">
                  Sign In
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="text-center">
          <div className="text-[#8692A6] mb-[19px]">
            Forgot your password?{" "}
            <Link to="/forgot" className="text-blue-700">
              Reset now
            </Link>
          </div>
          <div className="text-[#8692A6]">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-700">
              Sign up
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Signin;
