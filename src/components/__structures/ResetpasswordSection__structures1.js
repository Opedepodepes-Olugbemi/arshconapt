import React from 'react';

export default function ResetpasswordSection__structures1() {
    return (
        <React.Fragment>
            <>
                <div>  <main>    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">      <a href="#" className="flex items-center text-2xl font-semibold text-gray-900">        <img className="w-auto h-8 mr-2" src="https://static.shuffle.dev/uploads/files/3b/3bd7a8feac6edf952a72f7ffe12d973401d1bac7/logo.png" alt="logo" />        ARSHCON    </a>      <div className="w-full p-6 rounded-lg md:mt-0 sm:max-w-md sm:p-8">        <h2 className="text-2xl font-bold sm:text-3xl text-center">Change Password</h2>        <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">          <div>            <label htmlFor="email" className="block mb-2 font-medium text-gray-900">Your email</label>            <input type="email" name="email" id="email" className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" placeholder="name@company.com" required />        </div>          <div>            <label htmlFor="password" className="block mb-2 font-medium text-gray-900">New Password</label>            <input type="password" name="password" id="password" placeholder="••••••••" className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" required />        </div>          <div>            <label htmlFor="confirm-password" className="block mb-2 font-medium text-gray-900">Confirm password</label>            <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" required />        </div>          <div className="flex items-start">            <div className="flex items-center h-5">              <input id="newsletter" aria-describedby="newsletter" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600" required />          </div>            <div className="ml-3 text-sm">              <label htmlFor="newsletter" className="font-light text-gray-500">I accept the <a className="font-medium text-primary-600 hover:underline" href="#">Terms and Conditions</a></label>          </div>        </div>          <button type="submit" className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-600">Reset passwod</button>      </form>    </div>  </div></main></div>


            </>
        </React.Fragment>
    );
}

