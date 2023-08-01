import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar";
import Header from "../Components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className=" rounded-lg dark:border-gray-700 mt-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
