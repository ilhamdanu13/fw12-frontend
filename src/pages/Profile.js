import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RiImageEditLine } from "react-icons/ri";
import { logout as logoutAction } from "../redux/reducers/auth";
import NavbarUser from "../components/NavbarUser";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import http from "../helpers/http";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import jwtDecode from "jwt-decode";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

const phoneRegEx = /^(^08)(\d{8,10})$/;

const profileScheme = Yup.object().shape({
  email: Yup.string().email("Invalid email"),
  phoneNumber: Yup.string().matches(phoneRegEx, "Invalid phone number"),
});

const passwordScheme = Yup.object().shape({
  password: Yup.string().password().min(8, "Min lenght 8").minLowercase(1, "Min lowercase 1").minUppercase(1, "Min uppercase 1").minSymbols(1, "Min symbol 1").minNumbers(1, "Min number 1"),
  confirmPassword: Yup.string().password().min(8, "Min lenght 8").minLowercase(1, "Min lowercase 1").minUppercase(1, "Min uppercase 1").minSymbols(1, "Min symbol 1").minNumbers(1, "Min number 1"),
});

const ProfilePage = () => {
  const token = useSelector((state) => state?.auth?.token);
  const decode = jwtDecode(token);
  const { id } = decode;
  const [bio, setBio] = React.useState({});
  const [showLeft, setShowLeft] = React.useState(false);
  const [showRight, setShowRight] = React.useState(false);
  const [picture, setPicture] = React.useState(false);
  const [alertSuccessData, setAlertSuccessData] = React.useState(false);
  const [alertSuccessPassword, setAlertSuccessPassword] = React.useState(false);
  const [alertErrorPassword, setAlertErrorPassword] = React.useState(false);
  const [alertSuccessUpload, setAlertSuccessUpload] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    getBio().then((data) => {
      setBio(data?.results);
    });
  }, [id]);

  const getBio = async () => {
    const { data } = await http(token).get("https://fw12-backend-red.vercel.app/profile/" + id);
    return data;
  };

  const updateProfile = async (value) => {
    try {
      const values = {
        firstName: value.firstName,
        lastName: value.lastName,
        phoneNumber: value.phoneNumber,
        email: value.email,
      };
      await http(token).patch(`https://fw12-backend-red.vercel.app/profile/${id}/update/`, values);
      setAlertSuccessData(true);
      setTimeout(() => {
        setAlertSuccessData(false);
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };

  const updatePassword = async (value) => {
    try {
      const values = {
        password: value.password,
        confirmPassword: value.confirmPassword,
      };

      await http(token).patch(`https://fw12-backend-red.vercel.app/profile/${id}/update/`, values);
      setAlertSuccessPassword(true);
      setTimeout(() => {
        setAlertSuccessPassword(false);
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(bio);

  const upload = async (e) => {
    e.preventDefault();
    const file = e.target.picture.files[0];
    console.log(file);
    if (file?.size > 1024 * 1024 * 2) {
      window.alert("File too large");
    } else {
      try {
        const form = new FormData();
        form.append("picture", file);
        const { data } = await http(token).patch(`https://fw12-backend-red.vercel.app/profile/${id}/update/`, form, {
          headers: { "Content-Type": "application/json" },
        });
        setAlertSuccessUpload(true);
        setTimeout(() => {
          navigate(0);

          setPicture(false);
        }, 1500);
      } catch (err) {
        window.alert(err.response);
      }
    }
  };

  const handleShowLeft = () => {
    setShowLeft(!showLeft);
  };

  const handleShowRight = () => {
    setShowRight(!showRight);
  };

  const handlerLogout = () => {
    setTimeout(() => {
      dispatch(logoutAction());
      navigate("/signin");
    }, 2000);
  };
  return (
    <div>
      <NavbarUser />
      <div className="lg:flex bg-[#F5F6F8] px-3 lg:px-[79px]">
        <div className="pt-5 lg:pt-[56px]">
          <div className="border-1 bg-white rounded-[24px]">
            <div className="lg:p-[40px] mb-3 lg:mb-0">
              <div className="pl-[40px] lg:pl-0 pt-[40px] lg:pt-0 text-[#4E4B66] text-[16px]">INFO</div>
              <div className="pt-[32px] flex justify-center items-center">
                {bio?.picture ? (
                  <img className="w-[136px] h-[136px] rounded-[50%] mb-3 shadow-lg" src={"https://res.cloudinary.com/fw12/image/upload/v1674621799/" + bio.picture} alt="Profile" />
                ) : (
                  <img className="w-[136px] h-[136px] rounded-[50%] mb-3 shadow-lg" src={"https://res.cloudinary.com/fw12/image/upload/v1674616077/Cluezzy/User_phom73.png"} alt="Profile" />
                )}
              </div>

              {/* The button to open modal */}
              <label htmlFor="my-modal-3" className="flex justify-center items-center mb-[30px]">
                <RiImageEditLine className="w-[20px] h-[20px]" />
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  {alertSuccessUpload ? (
                    <div className="alert alert-success shadow-lg mb-5">
                      <div>
                        <svg onClick={() => setAlertSuccessUpload(false)} xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Upload succeed</span>
                      </div>
                    </div>
                  ) : (
                    false
                  )}
                  <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">
                    ✕
                  </label>
                  <form onSubmit={upload} className="flex flex-col">
                    <input type="file" name="picture" className="mb-[20px]" />
                    <button type="submit" className="bg-[#f1554c] w-1/3 py-[10xp] rounded-[12px] text-white font-Mulish">
                      Save
                    </button>
                  </form>
                </div>
              </div>
              <div className="text-[#14142B] text-[20px] text-center">{bio.firstName + " " + bio.lastName}</div>
              <div className="text-[14px] text-[#4E4B66] text-center  tracking-[.75px] leading-[24px]">Moviegoers</div>
            </div>
            <hr className="mb-[20px]" />
            <div className="flex justify-center pb-[25px]">
              <button onClick={handlerLogout} className="border-1 bg-[#f1554c] rounded-[16px] text-white  px-[70px] py-[8px] text-[16px]">
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className=" lg:pl-[32px]">
          <div className="pt-3 lg:pt-[56px]">
            <div className="border-1 bg-white rounded-[16px] lg:w-[900px]">
              <div className="py-[25px] flex">
                <Link className="text-[18px] tracking-[.75] leading-[34px] text-[#14142B] mr-[56px] pl-3 lg:pl-[48px]">Account Settings</Link>
                <Link to="/order history" className="text-[18px] tracking-[.75] leading-[34px] text-[#AAAAAA]">
                  Order History
                </Link>
              </div>
              <div className="pl-8 lg:pl-[45px]">
                <hr className="w-[80px] lg:w-[140px] pl-3 lg:pl-[25px] border-2 border-[#f1554c] rounded-[4px]" />
              </div>
            </div>
          </div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
            }}
            onSubmit={updateProfile}
            validationSchema={profileScheme}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="pt-5 lg:pt-[56px]">
                  <div className="border-1 bg-white rounded-[16px] lg:w-[900px] mb-3">
                    <div className="px-3 lg:px-[32px] pt-3 lg:pt-[40px] mb-3 lg:mb-[49px]">
                      <div className="mb-[16px] text-[#14142B] text-[16px]">Details Information</div>
                      <hr />
                    </div>
                    <div className="text-[#4E4B66] text-[16px]">
                      <div className="lg:flex pl-3 lg:pl-[32px] pr-3 lg:pr-0 mb-3 lg:mb-[32px]">
                        <div className=" lg:mr-[24px] mb-3 lg:mb-0">
                          <div className="mb-[12px] text-[#4E4B66]">First Name</div>
                          <Field name="firstName" className="border-2 pl-3 lg:pl-[24px] w-full lg:pr-[160px] py-[10px] rounded-[16px] focus:outline-none" placeholder={bio.firstName} />
                        </div>
                        <div className="">
                          <div className="mb-[12px] text-[#4E4B66]">Last Name</div>
                          <Field name="lastName" className="border-2 pl-3 lg:pl-[24px] w-full lg:pr-[160px] rounded-[16px] py-[10px] focus:outline-none" placeholder={bio.lastName} />
                        </div>
                      </div>
                      <div className="lg:flex pl-3 lg:pl-[32px] pr-3 lg:mr-0 pb-5 lg:pb-[63px]">
                        <div className=" lg:mr-[24px] mb-3 lg:mb-0">
                          <div className="mb-[12px] text-[#4E4B66]">E-mail</div>
                          <Field name="email" className="border-2 pl-3 lg:pl-[24px] w-full lg:pr-[160px] py-[10px] rounded-[16px] focus:outline-none" placeholder={bio.email} />
                          {errors.email && touched.email ? <div className="text-red-500 text-sm ">{errors.email}</div> : null}
                        </div>
                        <div className="">
                          <div className="mb-[12px] text-[#4E4B66]">Phone Number</div>
                          <Field name="phoneNumber" className="border-2 pl-3 lg:pl-[24px] w-full lg:pr-[160px] rounded-[16px] py-[10px] focus:outline-none" placeholder={bio.phoneNumber} />
                          {errors.phoneNumber && touched.phoneNumber ? <div className="text-red-500 text-sm ">{errors.phoneNumber}</div> : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  {alertSuccessData ? (
                    <div className="alert alert-success shadow-lg mb-3 lg:w-1/3">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Update data succeed</span>
                      </div>
                    </div>
                  ) : (
                    false
                  )}
                  <div className="lg:pt-[17px] mb-[22px]">
                    <button type="submit" className="w-full lg:w-1/3 border-1 rounded-[16px] bg-[#f1554c] py-[10px]  text-white ">
                      Update changes
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
          <Formik
            initialValues={{
              password: "",
              confirmPassword: "",
            }}
            onSubmit={updatePassword}
            validationSchema={passwordScheme}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="border-1 bg-white rounded-[16px] lg:w-[900px] mb-3">
                  <div className="px-3 lg:px-[32px] pt-3 lg:pt-[40px] mb-3 lg:mb-[49px]">
                    <div className="mb-[16px] text-[#14142B] text-[16px]">Account and Privacy</div>
                    <hr />
                  </div>
                  <div className="text-[#4E4B66] text-[16px] pb-5 lg:pb-[64px] ">
                    <div className="lg:flex pl-3 lg:pl-[32px] pr-3 lg:pr-0 lg:mb-[32px]">
                      <div className=" lg:mr-[24px] relative mb-3 lg:mb-0">
                        <div className="mb-[12px] text-[#4E4B66]">New Password</div>
                        <Field name="password" className="border-2 pl-3 lg:pl-[24px] w-full lg:pr-[195px] py-[10px] rounded-[16px] focus:outline-none" placeholder="Write your password" type={showLeft ? "text" : "password"} />
                        <label onClick={handleShowLeft} className="absolute right-6 top-12 cursor-pointer">
                          {showLeft ? <BsEyeSlash className="w-[20px] h-[20px]" /> : <BsEye className="w-[20px] h-[20px]" />}
                        </label>
                        {errors.password && touched.password ? <div className="text-red-500 text-sm ">{errors.password}</div> : null}
                      </div>
                      <div className="relative">
                        <div className="mb-[12px] text-[#4E4B66]">Confirm Password</div>
                        <Field name="confirmPassword" className="border-2 pl-3 lg:pl-[24px] w-full lg:pr-[195px] rounded-[16px] py-[10px] focus:outline-none" placeholder="Confirm your password" type={showRight ? "text" : "password"} />
                        <label onClick={handleShowRight} className="absolute right-6 top-12 cursor-pointer">
                          {showRight ? <BsEyeSlash className="w-[20px] h-[20px]" /> : <BsEye className="w-[20px] h-[20px]" />}
                        </label>
                        {errors.confirmPassword && touched.confirmPassword ? <div className="text-red-500 text-sm ">{errors.confirmPassword}</div> : null}
                      </div>
                    </div>
                  </div>
                </div>
                {alertSuccessPassword ? (
                  <div className="alert alert-success shadow-lg mb-3 lg:w-1/3">
                    <div>
                      <svg onClick={() => setAlertSuccessPassword(false)} xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Change password succeed</span>
                    </div>
                  </div>
                ) : (
                  false
                )}
                {alertErrorPassword ? (
                  <div className="alert alert-error shadow-lg">
                    <div>
                      <svg onClick={() => setAlertErrorPassword(false)} xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Error! Task failed successfully.</span>
                    </div>
                  </div>
                ) : (
                  false
                )}
                <div className="lg:pt-[17px] lg:mb-[36px] pb-3 lg:pb-0">
                  <button type="submit" className="w-full lg:w-1/3 border-1 rounded-[16px] bg-[#f1554c] py-[10px] text-white ">
                    Update changes
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default ProfilePage;
