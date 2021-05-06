import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useAuth } from '../../firebase/AuthContext';
import LogoBicloo from '../../assets/img/logo-bicloo.png';
import './signup/SignPage.css';

const SignIn = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for further instructions');
    } catch {
      setError('Failed to reset');
    }

    setLoading(false);
  }
  return (
    <>
      <main>
        <section className="signContainer w-full">
          <div className="absolute top-0 w-full h-full bg-gray-900" />
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <img src={LogoBicloo} alt="logo" />
                    <div className="text-center mb-3">
                      <h6 className="text-gray-600 text-xl font-bold">
                        Password Reset
                      </h6>
                      {error && (
                        <div
                          className="bg-red-600 border-l-4 border-gray-900 text-orange-700 p-4"
                          role="alert"
                        >
                          {error}
                        </div>
                      )}
                      {message && (
                        <div
                          className="bg-green-300 border-l-4 border-gray-900 text-orange-700 p-4"
                          role="alert"
                        >
                          {message}
                        </div>
                      )}
                    </div>
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form action="#" method="GET" onSubmit={handleSubmit}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                          <input
                            ref={emailRef}
                            type="email"
                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Email"
                            style={{ transition: 'all .15s ease' }}
                          />
                        </label>
                      </div>
                      <div className="text-center mt-6">
                        <button
                          disabled={loading}
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="submit"
                          style={{ transition: 'all .15s ease' }}
                        >
                          Reset Password
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex flex-wrap mt-6 relative">
                  <div className="w-1/2">
                    <Link to="/signIn" className="text-gray-300">
                      <small>Sign In</small>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignIn;
