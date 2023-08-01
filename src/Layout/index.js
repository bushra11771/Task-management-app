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
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
