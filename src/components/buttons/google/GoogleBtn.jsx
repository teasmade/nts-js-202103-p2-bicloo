/* eslint-disable no-console */
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import GoogleIcon from '../../../assets/img/google.svg';

const responseGoogle = (response) => {
  console.log(response);
};

export default function GoogleBtn() {
  return (
    <>
      <GoogleLogin
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs relative"
            type="button"
            style={{ transition: 'all .15s ease' }}
          >
            <img alt="..." className="w-5 mr-1" src={GoogleIcon} />
            Google
          </button>
        )}
        clientId="191681210422-cm71o1dtidple9ib9u0nqfb2m6sc5u23.apps.googleusercontent.com"
        buttonText="GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
    </>
  );
}
