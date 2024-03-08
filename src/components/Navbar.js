import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white text-center">
      <ul className="flex justify-center space-x-4">
        <li>
          <a href="/" className="hover:bg-blue-500 px-3 py-2 rounded">
            Home
          </a>
        </li>
        <li>
          <a href="/dataset" className="hover:bg-blue-500 px-3 py-2 rounded">
            Dataset
          </a>
        </li>
        <li>
          <a href="/bgp-llama" className="hover:bg-blue-500 px-3 py-2 rounded">
            BGP-Llama
          </a>
        </li>
        {/* Add other navigation links as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
