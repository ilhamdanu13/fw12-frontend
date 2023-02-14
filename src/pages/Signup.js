/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import { GiTicket } from 'react-icons/gi';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { registerAction } from '../redux/actions/auth';

YupPassword(Yup);

const phoneRegEx = /^(^08)(\d{8,10})$/;

const SignUpScheme = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().password().min(8, 'Min lenght 8').minLowercase(1, 'Min lowercase 1')
    .minUppercase(1, 'Min uppercase 1')
    .minSymbols(1, 'Min symbol 1')
    .minNumbers(1, 'Min number 1')
    .required('Required'),
  phoneNumber: Yup.string().matches(phoneRegEx, 'Invalid phone number').required('Required'),
});

function Signup() {
  const [errMessage, setErrMessage] = React.useState('');
  const [alertError, setAlertError] = React.useState(false);
  const [alertSuccess, setAlertSuccess] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [show, setShow] = React.useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  // Register
  const register = async (value) => {
    const cb = () => {
      setAlertError(false);
      setAlertSuccess(true);
      setTimeout(() => {
        navigate('/Signin');
      }, 3000);
    };

    try {
      const results = await dispatch(
        registerAction({
          ...value,
          cb,
        }),
      );

      if (results.payload.startsWith('Email')) {
        setAlertError(true);
        setErrMessage(results.payload);
        return;
      }
      if (results.payload.startsWith('Phone')) {
        setAlertError(true);
        setErrMessage(results.payload);
        return;
      }
      cb();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="lg:flex">
      <div className="hidden lg:block w-[800px] h-[1054px] bg-cover bg-center  bg-[url('../images/background.png')] ">
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
      <div className="basis-2/5 pt-12 lg:pt-[100px] px-3 lg:pr-20 lg:pl-[83px] ">
        <div className="relative block lg:hidden">
          <span className="text-[50px] text-[#ef91a1] font-Rubik lg:ext-[100px]">Cluezzy</span>
          <GiTicket className="text-[#ef91a1] text-[25px] absolute left-52 lg:right-6 top-5 lg:text-[50px]" />
        </div>
        <div className=" text-[48px] mb-3 font-[600px]">Sign Up</div>
        <div className="text-[18px] tracking-[.007em] leading-[22px] mb-12 text-[#AAAAAA] font-[400px]">Fill your additional details</div>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            password: '',
          }}
          validationSchema={SignUpScheme}
          onSubmit={register}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="flex flex-col mb-3">
                <label htmlFor="firstName" className="">First Name</label>
                <Field type="text" id="firstName" name="firstName" placeholder="Write your first name" className="form-input w-full pl-5 py-4 border-2 box-border rounded-[12px] mt-2 focus:outline-none" />
                {errors.firstName && touched.firstName ? <div className=" text-red-500 text-sm">{errors.firstName}</div> : null}
              </div>
              <div className="flex flex-col mb-3">
                <label className="">Last Name</label>
                <Field type="text" name="lastName" placeholder="Write your last name" className="form-input pr-20 pl-5 py-4 border-2 box-border rounded-[12px] mt-3 focus:outline-none" />
                {errors.lastName && touched.lastName ? <div className=" text-red-500 text-sm">{errors.lastName}</div> : null}
              </div>
              <div className="flex flex-col mb-3">
                <label>Phone Number</label>
                <Field type="phoneNumber" name="phoneNumber" placeholder="Write your phone number" className="form-input pr-20 pl-5 py-4 border-2 box-border rounded-[12px] mt-3 focus:outline-none" />
                {errors.phoneNumber && touched.phoneNumber ? <div className=" text-red-500 text-sm">{errors.phoneNumber}</div> : null}
              </div>
              <div className="flex flex-col mb-3">
                <label>Email</label>
                <Field type="email" name="email" placeholder="Write your email" className="form-input pr-20 pl-5 py-4 border-2 box-border rounded-[12px] mt-3 focus:outline-none" />
                {errors.email && touched.email ? <div className=" text-red-500 text-sm">{errors.email}</div> : null}
              </div>
              <div className="flex flex-col mb-5 relative">
                <label>Password</label>
                <Field type={show ? 'text' : 'password'} name="password" placeholder="Write your password" className="form-input pr-20 pl-5 py-4 border-2 box-border rounded-[12px] mt-3 focus:outline-none" />
                <label onClick={handleShow} onKeyDown={handleShow} className="absolute right-8 top-14 cursor-pointer">
                  {show ? <BsEyeSlash className="w-[20px] h-[20px]" /> : <BsEye className="w-[20px] h-[20px]" />}
                </label>
                {errors.password && touched.password ? <div className="text-red-500 text-sm ">{errors.password}</div> : null}
              </div>
              <div className="mb-3">
                {alertError ? (
                  <div className="alert alert-error shadow-lg mt-3">
                    <div>
                      <svg onClick={() => setAlertError(false)} xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{errMessage}</span>
                    </div>
                  </div>
                ) : (
                  false
                )}
                {alertSuccess ? (
                  <div className="alert alert-success shadow-lg mt-3">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Register Successfully</span>
                    </div>
                  </div>
                ) : (
                  false
                )}
              </div>
              <button type="submit" className="w-full box-border  pr-10 pl-10 py-4 text-center bg-[#f1554c] rounded-[12px] mb-[32px] text-white font-bold">
                Sign Up
              </button>
            </Form>
          )}
        </Formik>

        <div className="text-center">
          <div className="text-[#8692A6] mb-[19px]">
            Already have account ?
            {' '}
            <Link to="/signin" className="text-blue-500 font-bold">
              Sign In
            </Link>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
}

export default Signup;
