import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { GiTicket } from "react-icons/gi";
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
  const [alertError, setAlertError] = React.useState(false);
  const [alertSuccess, setAlertSuccess] = React.useState(false);
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
      setTimeout(() => {
        navigate("/homepage");
      }, 3000);
    };

    try {
      const result = await dispatch(loginAction({ ...value, cb }));

      if (result.payload.startsWith("Wrong")) {
        setErrMessage(result.payload);
      }
    } catch (err) {
      setErrMessage(err?.response?.data?.message);
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
        <div className="bg-[#0b2361]   w-[800px] h-[1054px]">
          <div className="pt-[250px] pl-[150px]">
            <div className=" relative">
              <span className="text-[100px] text-[#ef91a1] font-Rubik">Cluezzy</span>
              <GiTicket className="text-[#ef91a1] text-[50px] absolute right-48 top-10" />
            </div>
            <div className="text-[48px] text-[#ef91a1] pl-[30px]">
              <div>ezzy, watch, enjoy!</div>
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
                {alertError ? (
                  <div className="alert alert-error shadow-lg mt-8">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{errMessage}</span>
                    </div>
                  </div>
                ) : (
                  false
                )}
                {alertSuccess ? (
                  <div className="alert alert-success shadow-lg mt-8">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Login succesfully</span>
                    </div>
                  </div>
                ) : (
                  false
                )}
              </div>
              <div>
                <button type="submit" className="w-full text-white font-bold box-border border-2 pr-10 pl-10 py-4 text-center bg-[#f1554c] rounded-[12px] mb-[32px]">
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
      </div>
    </div>
  );
};

export default Signin;
