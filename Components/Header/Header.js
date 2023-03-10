import Link from "next/link";

const Header = () => {
  return (
    <div className="navbar w-[1358px] m-0 mx-auto h-[43px] ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          MARKALL
        </Link>
        {/* <a className="btn btn-ghost normal-case text-xl">MARKALL</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/Services/Services">Service</Link>
            {/* <a>Service</a> */}
          </li>

          <li>
            <Link href="/Pricing/Pricing">Pricing</Link>
            {/* <a>Pricing</a> */}
          </li>
          <li>
            <Link href="/About/About">About Us</Link>
            {/* <a>About Us</a> */}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-success">Get started</a>
      </div>
    </div>
  );
};

export default Header;
