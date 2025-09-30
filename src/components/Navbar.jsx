import NavLogo from "../../public/assets/Nav_Logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-[#030A2E] shadow-sm px-6 py-4 justify-between">
      <a href="/">
        <img src={NavLogo} className="w-28 h-auto object-cover" />
      </a>

      <div className="dropdown dropdown-end">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost hover:bg-[#061665]/40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>{" "}
            </svg>
          </button>
        </div>
        <ul className="menu menu-sm dropdown-content bg-[#061665]/90 rounded-box mt-3 w-44 shadow z-30">
          <li>
            <a className="text-base">Homepage</a>
          </li>
          <li>
            <a className="text-base">Portfolio</a>
          </li>
          <li>
            <a className="text-base">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
