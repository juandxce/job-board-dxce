import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-4 gap-4 bg-white p-8">
      <div className="col-span-full md:col-span-2">
        <h3 className="font-bold text-lg">About us</h3>
        <p>
          We are a team of nurses, doctors, technologists and executives
          dedicated to help nurses find jobs that they love.
        </p>
        <p>
          All copyrights reserved &copy; {new Date().getFullYear()} - Health
          Explore.
        </p>
      </div>
      <div className="col-span-full md:col-span-1">
        <h3 className="font-bold text-lg">Sitemap</h3>
        <p className="hover:underline cursor-pointer">Nurses</p>
        <p className="hover:underline cursor-pointer">Employers</p>
        <p className="hover:underline cursor-pointer">Social Networking</p>
        <p className="hover:underline cursor-pointer">Jobs</p>
      </div>
      <div className="col-span-full md:col-span-1">
        <h3 className="font-bold text-lg">Privacy</h3>
        <p className="hover:underline cursor-pointer">Terms of use</p>
        <p className="hover:underline cursor-pointer">Privacy policy</p>
        <p className="hover:underline cursor-pointer">Cookie policy</p>
      </div>
    </div>
  );
}

export default Footer;
