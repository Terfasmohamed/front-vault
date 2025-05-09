import { useState } from 'react';


const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = 'Username / Email is required!';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required!';
    }
    else if (formData.password.length <= 8) {
      newErrors.password = 'Password must be more than 8 characters!';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setSubmitted(false);
    if (validateForm()) {
      setSubmitted(true);
     
      window.location.href = '/Account';
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[url(../../public/crypto.jpg)] bg-cover bg-center p-4">
      {/* Left side with illustration */}
      <div className="flex w-full max-w-4xl items-center justify-between gap-8">

        {/* Right side with form */}
        <div className="w-full md:w-1/2 max-w-md">
          {/* Logo - visible only on mobile */}
          <div className="mb-8 md:hidden">
            <div className="h-12 w-12 rounded-full bg-blue-600"></div>
          </div>

          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-semibold text-white">Log In</h1>
            <p className="text-white">Welcome Back.</p>
            <p className="text-white">Please Enter Your Details.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-white">Email or Username</label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="mt-1 w-full rounded-md border border-gray-300 p-3 text-sm focus:border-blue-500 focus:outline-none"
                placeholder="Exemple@Exemple.com / usrname"
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-500">{errors.username}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-white">Password</label>
              <div className="relative">
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="mt-1 w-full rounded-md border border-gray-300 p-3 text-sm focus:border-blue-500 focus:outline-none"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
              </div>
              <div className="mt-1 text-right">
                <a href="#" className="text-xs text-white hover:text-gray-400">
                  I forgot my password
                </a>
              </div>
            </div>
          
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 py-3 text-white hover:bg-blue-700 focus:outline-none"
            >
              Login
            </button>
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;