import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { toast } from "react-toastify";
import ROUTES from '../../Rountes';
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
  });

  const handleSubmit = async (values) => {
    try {
      const { data } = await axios.get("http://localhost:3001/users");
      const user = data.find(
        (user) => user.email === values.email && user.password === values.password
      );

      if (user) {
        localStorage.setItem("authToken", "loggedIn");
        localStorage.setItem("userID", user.id);
        navigate(ROUTES.PROFILE);
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={`login-container ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="imgAndLogIn">
        <i className={`fas fa-bars ${isMenuOpen ? 'open' : 'close'}`} onClick={toggleMenu}></i>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/026/727/211/small_2x/people-sad-in-the-night-sky-illustration-free-photo.jpg"
          alt="Login Illustration"
        />
        <div className="login-box">
          <h1>Login</h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <Field type="email" name="email" placeholder="Email" />
                {touched.email && errors.email && <p className="error">{errors.email}</p>}
                <Field type="password" name="password" placeholder="Password" />
                {touched.password && errors.password && <p className="error">{errors.password}</p>}
                <button type="submit">Login</button>
              </Form>
            )}
          </Formik>
          <p>
            Don't have an account?{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => navigate(ROUTES.REGISTER)}
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
