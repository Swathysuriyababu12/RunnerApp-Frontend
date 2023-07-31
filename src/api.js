import axios from "axios";
import Cookies from "js-cookie";
const API = axios.create({ baseURL: "http://localhost:4000" });
const cookieValue = Cookies.get("Profile");
const authToken = cookieValue ? JSON.parse(cookieValue) : null;

export const LoginAPI = async (loginData) => {
  try {
    const response = await API.post("login", loginData);
    return response.data;
  } catch (error) {
    console.error(error);
    return "Server Busy";
  }
};

export const SignUPAPI = async (loginData) => {
  try {
    const response = await API.post("/signin/verify", loginData);
    return response.data;
  } catch (error) {
    console.error(error);
    return "Server Busy";
  }
};


export const ForgetPasswordApi = async (email) => {
  try {
    const response = await API.post("/forgetpassword", { email });
    if (response.data === true) {
      const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
      Cookies.set("forget_password", JSON.stringify(email), {
        expires: expiryDate,
      });
    }
    return response.data;
  } catch (error) {
    console.error(error);
    return "Server Busy";
  }
};

export const NewPasswordApi = async (otp, newPassword, confirmPassword) => {
  try {
    const cookieValue = Cookies.get("forget_password");
    const email = cookieValue ? JSON.parse(cookieValue) : null;
    if (email === null) {
      return "login";
    } else {
      const payLoad = {
        email,
        otp,
        newPassword,
        confirmPassword,
      };
      const response = await API.post("/forgetpassword/new", payLoad);
      return response.data;
    }
  } catch (error) {
    console.error(error);
    return "Server Busy";
  }
};

