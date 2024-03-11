import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav className="bg-gray-800 p-4 text-white text-center">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link to="/" className="hover:bg-blue-500 px-3 py-2 rounded">
              Home
            </Link>
          </li>
          <li>
            <Link to="/dataset" className="hover:bg-blue-500 px-3 py-2 rounded">
              Dataset
            </Link>
          </li>
          <li>
            <Link to="/bgp_llama" className="hover:bg-blue-500 px-3 py-2 rounded">
              BGP-Llama
            </Link>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
