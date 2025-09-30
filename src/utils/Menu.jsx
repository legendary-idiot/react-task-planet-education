import React from "react";

const Menu = () => {
  return (
    <nav className="flex justify-center my-16 px-6">
      <ul className="menu menu-horizontal border border-[#E018E0] uppercase text-base">
        <li>
          <a className="text-white">Courses</a>
        </li>
        <li>
          <a className="text-white">Campuses</a>
        </li>
        <li>
          <a className="text-white">Partner Institutions</a>
        </li>
        <li>
          <a className="text-white">Student Testimonials</a>
        </li>
        <li>
          <a className="text-white">Stories</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
