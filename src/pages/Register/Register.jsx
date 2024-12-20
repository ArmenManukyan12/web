import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import ROUTES from "../../Rountes";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const { data } = await axios.get("http://localhost:3001/users");
      const userExists = data.find((user) => user.email === values.email);

      if (userExists) {
        toast.error("Email already exists. Please use a different email.");
        return;
      }

      await axios.post("http://localhost:3001/users", {
        id: Date.now().toString(),
        firstname: values.username,
        lastname: values.lastname,
        email: values.email,
        password: values.password,
      });

      toast.success("Registration successful! You can now log in.");
      resetForm();
      navigate(ROUTES.LOGIN);
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Register</h1>
        <Formik
          initialValues={{ username: "", lastname: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field type="text" name="username" placeholder="First Name" />
            <ErrorMessage name="username" component="p" />
            <Field type="text" name="lastname" placeholder="Last Name" />
            <ErrorMessage name="lastname" component="p" />
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="p" />
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="p" />
            <button type="submit">Register</button>
          </Form>
        </Formik>
        <p>
          Already have an account?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => navigate(ROUTES.LOGIN)}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
