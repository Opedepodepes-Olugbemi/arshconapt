import React from 'react';

export default function AboutSection__structures7() {
    return (
        <React.Fragment>
            <>
                <div>  <section className="py-20 md:py-24 bg-gray-900 overflow-hidden border-b border-gray-800 w-full">    <div className="relative container px-4 mx-auto">      <div className="relative max-w-3xl mx-auto">        <div className="text-center mb-15">          <h4 className="font-heading text-4xl sm:text-5xl md:text-6xl text-gray-50 font-semibold mb-6 intersect:animate-pulse">Sign up and get for updates</h4>          <p className="text-lg font-semibold text-gray-50 mb-5">By subscribing to our newsletter you stay informed about our products and services.</p>      </div>        <div className="max-w-lg mx-auto">          <form id="contact-form" className="sm:flex mb-2 items-center" action="/" method="post" target="_blank" encType="application/x-www-form-urlencoded">            <input name="email" className="w-full mb-3 sm:mb-0 sm:mr-4 py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg" type="email" placeholder="your email here" />            <button name="email" className="relative group inline-block flex-shrink-0 w-full sm:w-auto py-3 px-5 hover:text-gray-900 text-sm font-semibold text-orange-50 bg-red-600 rounded-md overflow-hidden" type="submit">              <div className="absolute top-0 right-full w-full h-full transform group-hover:translate-x-full group-hover:scale-102 transition duration-500 bg-white" />              <div className="relative flex items-center justify-center">                <input type="submit" name="email" defaultValue="Subscribe" className="mr-4?" />            </div>          </button>        </form>          <span className="block text-xs font-semibold text-gray-200">            <span>We care about your data in our</span>            <a className="inline-block underline text-white" href="/privacy">privacy policy</a>        </span>      </div>    </div>  </div></section></div>


            </>
        </React.Fragment>
    );
}

