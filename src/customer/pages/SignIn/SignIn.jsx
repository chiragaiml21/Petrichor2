import React from 'react';
import { useNavigate } from 'react-router-dom';
// import signIn function from wherever it is defined

function SignIn() {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    // Logic for Google sign-in (e.g., call a signIn function)
    signIn('google');
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Logic for form submission, like authentication
  };

  return (
    <div className="flex justify-center items-center">
      <div className="sm:w-2/3 lg:w-4/12 py-28">
        <h1 className="text-center text-4xl font-bold mb-6">Login</h1>
        <form onSubmit={handleFormSubmit} className="px-8 py-10 w-full">
          <div className="mb-4">
            <input
              className="w-full border p-4"
              id="email"
              placeholder="example@example.com"
              type="email"
              required
            />
          </div>
          <div className="mb-6">
            <input
              className="w-full border p-4"
              id="password"
              placeholder="••••••••"
              type="password"
              required
            />
          </div>
          <div className="flex items-center justify-between py-4">
            <button 
              onClick={handleGoogleSignIn}
              type="button" 
              className="text-white w-1/2 bg-[#b29a76] hover:bg-[#b29a76]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium text-sm px-8 sm:px-5 py-2.5 text-center inline-flex items-center justify-between mb-2"
            >
              <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
              <div className="sm:block hidden">Sign in with Google</div>
              <div className="sm:hidden">Google</div>
            </button>

            <button 
              type="submit" 
              className="text-white bg-[#b29a76] hover:bg-[#b29a76]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mb-2"
            >
              Login
            </button>
          </div>
          <button 
            type="button" 
            onClick={() => navigate('/register')} 
            className="text-center my-4 text-[#744f16] hover:text-[#b29a76]/90 w-full"
          >
            ~Create account~
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
