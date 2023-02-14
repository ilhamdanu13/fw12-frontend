/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GiTicket } from 'react-icons/gi';
import { RxDividerVertical } from 'react-icons/rx';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { forgotPassword as forgotAction } from '../redux/actions/auth';

YupPassword(Yup);

const resetScheme = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

function Forgot() {
  const [alertEmail, setAlertEmail] = React.useState(false);
  const [alertRequested, setAlertRequested] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const forgot = async (value) => {
    const cb = () => {
      setAlertEmail(false);
      setAlertRequested(true);
      setTimeout(() => {
        navigate('/reset', { state: value });
      }, 3000);
    };

    try {
      const result = await dispatch(forgotAction({ ...value, cb }));
      if (result.payload.startsWith('Reset')) {
        cb();
      } else {
        setAlertEmail(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex">
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
              <div className="text-[48px] text-white">Lets reset your password</div>
              <div className="text-[24px] text-[#FFFFFFB2]">To be able to use your account again, please</div>
              <div className="text-[24px] text-[#FFFFFFB2]">complete the following steps.</div>
            </div>
            <div className="flex">
              <div className="mr-[42px] pt-[7px] pl-[7px] pr-[7px]">
                <div className="w-[40px] h-[40px] border-2 rounded-[50%] bg-[#ef91a1] flex justify-center items-center text-[24px] text-white border-[#ef91a1]">1</div>
              </div>
              <div className="text-[24px] text-[#FFFFFF] font-bold pt-2">Fill your complete email</div>
            </div>
            <div className="">
              <RxDividerVertical className="text-[#ef91a1] text-[50px]" />
            </div>
            <div className="flex ">
              <div className="mr-[42px] pl-[7px] pr-[7px]">
                <div className="w-[40px] h-[40px] border-2 rounded-[50%] bg-white flex justify-center items-center text-[24px] text-[#ef91a1] border-[#ef91a1]">2</div>
              </div>
              <div className="text-[24px] text-[#FFFFFF] ">Check your email</div>
            </div>
            <div className="">
              <RxDividerVertical className="text-[#ef91a1] text-[50px]" />
            </div>
            <div className="flex ">
              <div className="mr-[42px] pl-[7px] pr-[7px]">
                <div className="w-[40px] h-[40px] border-2 rounded-[50%] bg-white flex justify-center items-center text-[24px] text-[#ef91a1] border-[#ef91a1]">3</div>
              </div>
              <div className="text-[24px] text-[#FFFFFF] ">Enter your new password</div>
            </div>
            <div className="">
              <RxDividerVertical className="text-[#ef91a1] text-[50px]" />
            </div>

            <div className="flex ">
              <div className="mr-[42px] pl-[7px] pr-[7px]">
                <div className="w-[40px] h-[40px] border-2 rounded-[50%] bg-white flex justify-center items-center text-[24px] text-[#ef91a1] border-[#ef91a1]">4</div>
              </div>
              <div className="text-[24px] text-[#FFFFFF] ">Done</div>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-full lg:basis-2/5 pt-12 lg:pt-[176px] pr-3 lg:pr-20 pl-3 lg:pl-[83px]">
        <div className="relative block lg:hidden">
          <span className="text-[50px] text-[#ef91a1] font-Rubik lg:ext-[100px]">Cluezzy</span>
          <GiTicket className="text-[#ef91a1] text-[25px] absolute left-52 top-5" />
        </div>
        <div className=" text-[26px] mb-3 font-[600px]">Fill your complete email</div>
        <div className=" text-[18px] tracking-[.007em] leading-[22px] mb-12 text-[#AAAAAA] font-[400px]">we will send a link to your email shortly</div>
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={resetScheme}
          onSubmit={forgot}
        >
          {({ errors, touched }) => (
            <Form>
              <label>Email</label>
              <div className="mb-5">
                <Field className="form-input w-full pl-5 py-4 border-2 box-border rounded-[12px] mt-3 focus:outline-none" type="email" name="email" placeholder="Write your email" />
                {errors.email && touched.email ? <div className=" text-red-500 text-sm">{errors.email}</div> : null}
              </div>
              {alertRequested ? (
                <div className="alert alert-success shadow-lg mb-5">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Request sent, please check your email</span>
                  </div>
                </div>
              ) : (
                false
              )}
              {alertEmail ? (
                <div className="alert alert-warning shadow-lg mb-5">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>User not found</span>
                  </div>
                </div>
              ) : (
                false
              )}
              <div>
                <button type="submit" className="w-full box-border pr-10 pl-10 py-4 text-center bg-[#f1554c] rounded-[12px] mb-[32px] text-white font-bold">
                  Send
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div />
      </div>
    </div>
  );
}

export default Forgot;
