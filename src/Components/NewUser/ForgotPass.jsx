import { useLocation } from "react-router-dom";
import { auth } from "./../../Firebase/firebase.init";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";

const ForgotPass = () => {
  const [emailError, setEmailError] = useState("");
  const location = useLocation();
  const emailFromState = location.state?.email || "";

  const handleResetPass = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    setEmailError("");
    sendPasswordResetEmail(auth, email)
      .then(() => {
        e.target.reset();
        alert("Password reset email sent. Check your email");
      })
      .catch((error) => {
        setEmailError("Please provide a valid Email address",error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Forgot Password
        </h2>

        {/* Form */}
        <form onSubmit={handleResetPass} className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              defaultValue={emailFromState}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {emailError && <p className="text-red-600">{emailError}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600 transition-all"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPass;