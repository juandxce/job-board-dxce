import React, { useContext } from "react";
import { store } from "../store";

const Navbar = () => {
  const { dispatch, state } = useContext(store);
  const { navMenuIsOpen } = state;
  const handleCloseMenu = () => {
    dispatch({ type: "SET_NAV_MENU_OPEN", payload: false });
  };
  const handleOpenMenu = () => {
    dispatch({ type: "SET_NAV_MENU_OPEN", payload: true });
  };

  return (
    <div className="relative bg-white ">
      <div>
        <div className="flex justify-between items-center py-6 px-4 md:justify-start md:space-x-6">
          <div className="flex">
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={handleOpenMenu}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-start lg:w-0 lg:flex-1 text-blue-500 font-semibold">
            <a href="/">
              <span>HEALTH EXPLORE</span>
            </a>
          </div>
          </div>
          <div className="flex justify-end lg:w-0 lg:flex-1 text-blue-500 font-semibold">
            <a
              href="JO"
              className="md:hidden whitespace-nowrap text-base font-medium p-3 mx-1 lg:mx-3 text-white bg-blue-400 rounded-full	"
            >
              JO
            </a>
          </div>
          <nav className="hidden md:flex space-x-3 lg:space-x-8">
            <a
              href="profile"
              className="text-xs transition duration-200 text-gray-500 hover:text-gray-900"
            >
              PROFILE
            </a>
            <a
              href="jobs"
              className="text-xs transition duration-200 text-gray-500 hover:text-gray-900"
            >
              JOBS
            </a>
            <a
              href="professional-network"
              className="text-xs transition duration-200 text-gray-500 hover:text-gray-900"
            >
              PROFESSIONAL NETWORK
            </a>
            <a
              href="lounge"
              className="text-xs transition duration-200 text-gray-500 hover:text-gray-900"
            >
              LOUNGE
            </a>
            <a
              href="salary"
              className="text-xs transition duration-200 text-gray-500 hover:text-gray-900"
            >
              SALARY
            </a>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="create-job"
              className="transition duration-300 ml-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border hover:bg-gray-50 hover:text-blue-700 rounded-md shadow-sm text-xs text-blue-500 border-2 border-blue-500"
            >
              CREATE JOB
            </a>
            <a
              href="JO"
              className="whitespace-nowrap text-base font-medium p-3 mx-1 lg:mx-3 text-white bg-blue-400 rounded-full	"
            >
              JO
            </a>
            <a
              href="LOGOUT"
              className="text-xs hover:text-gray-600 hover:bg-gray-50 transition duration-300 whitespace-nowrap inline-flex items-center justify-center px-2 py-2 border border-transparent rounded-md shadow-sm font-medium"
            >
              LOGOUT
            </a>
          </div>
        </div>
      </div>
      <div
        className={`${
          !navMenuIsOpen && "hidden"
        } z-10 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div className="flex justify-start lg:w-0 lg:flex-1 text-blue-500 font-semibold">
                <a href="/">
                  <span>HEALTH EXPLORE</span>
                </a>
              </div>
              <div className="-mr-2">
                <button
                  onClick={handleCloseMenu}
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <a
                  href="profile"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    PROFILE
                  </span>
                </a>

                <a
                  href="jobs"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    JOBS
                  </span>
                </a>
                <a
                  href="professional-network"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    PROFESSIONAL NETWORK
                  </span>
                </a>
                <a
                  href="lounge"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    LOUNGE
                  </span>
                </a>
                <a
                  href="salary"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    SALARY
                  </span>
                </a>
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div>
              <a
                href="#"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                LOGOUT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Navbar);
