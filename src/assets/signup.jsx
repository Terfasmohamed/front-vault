import React from "react";
import { useState } from "react";

const SignupPage = () => {

const [formData, setFormData] = useState({
  username: "",
  password: "",
  confirmPassword: "",
});
const [errors, setErrors] = useState({});
const [submitted, setSubmitted] = useState(false);
const validateForm = () => {
  const newErrors = {};
  if (!formData.username) {
    newErrors.username = "Username is required!";
  }
  if (!formData.password) {
    newErrors.password = "Password is required!";
  } else if (formData.password.length <= 8) {
    newErrors.password = "Password must be more than 8 characters!";
  }
  if (!formData.confirmPassword) {
    newErrors.confirmPassword = "Confirm Password is required!";
  } else if (formData.confirmPassword !== formData.password) {
    newErrors.confirmPassword = "Passwords do not match!";
  }
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;

}


const handleSubmit = (e) => {
  e.preventDefault();
  setSubmitted(false);
  if (validateForm()) {
    setSubmitted(true);
    window.location.href = "/Account";
  }
}
return(
    <>
<div className="flex min-h-screen w-full items-center justify-center bg-[url(../../public/crypto.jpg)] bg-cover bg-center p-4">
      {/* Left side with illustration */}
      <div className="flex w-full max-w-4xl items-center justify-between gap-44">
       

        {/* Right side with form */}
        <div className="w-full md:w-1/2 max-w-md">
          {/* Logo - visible only on mobile */}
          <div className="mb-8 md:hidden">
            <div className="h-12 w-12 rounded-full bg-blue-600"></div>
          </div>

          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-semibold text-white">Sign Up</h1>
            <p className="text-white">Create an account.</p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Username</label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className={`block w-full p-2 border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-md`}
              />
              {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className={`block w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md`}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-white">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className={`block w-full p-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md`}
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"   
            >
              Sign Up
            </button>
          </form>
            <div className="mt-4 text-center">
                <p className="text-sm text-white">
                Already have an account?{" "}
                <a href="/login" className="text-blue-600 hover:underline">
                    Log In
                </a>
                </p>
            </div>
        </div>
        </div>
        </div>
    </>
);

}
export default SignupPage;