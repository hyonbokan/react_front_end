import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Navbar = () => {
  const handleDownloadClick = () => {
    window.open('https://huggingface.co/hyonbokan/BGPStream13-10k-cutoff-1024-max-2048', '_blank');
  };

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
        <Button 
          color="primary" 
          variant="contained" 
          onClick={handleDownloadClick}
        >
          Download models
        </Button>
      </ul>
    </nav>
);
};

export default Navbar;