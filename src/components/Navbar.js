import React from 'react';
import logo from '../logo/logo.png';
import { Link } from 'react-router-dom';
import { AppBar, Button, Toolbar, Stack } from '@mui/material';

const Navbar = () => {
  const handleDownloadClick = () => {
    window.open('https://huggingface.co/hyonbokan/BGPStream13-10k-cutoff-1024-max-2048', '_blank');
  };

//   return (
//     <nav className="bg-gray-800 p-4 text-white text-center">
//       <ul className="flex justify-center space-x-4">
//         <li>
//           <Link to="/" className="hover:bg-blue-500 px-3 py-2 rounded">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/dataset" className="hover:bg-blue-500 px-3 py-2 rounded">
//             Dataset
//           </Link>
//         </li>
//         <li>
//           <Link to="/bgp_llama" className="hover:bg-blue-500 px-3 py-2 rounded">
//             BGP-Llama
//           </Link>
//         </li>
//         <Button 
//           color="primary" 
//           variant="contained" 
//           onClick={handleDownloadClick}
//         >
//           Download models
//         </Button>
//       </ul>
//     </nav>
// );
// };

  const sx = {
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.2rem',
    color: 'inherit',
    textDecoration: 'none',
  };
  return (
    <AppBar position='static'>
      <Toolbar>
        <Link to="/">
        <img src={logo} alt='Logo' style={{ height: 50 }} />
        </Link>
        <Stack direction='row' spacing={2}>
          <Button color='inherit' sx={ sx }>
            <Link to="/dataset">
              Dataset
            </Link>
          </Button>
          <Button color='inherit' sx={ sx }>
            <Link to="/bgp_llama">
              BGP-LLaMA
            </Link>
          </Button>
          <Button 
            color="primary" 
            variant="contained"
            sx={ sx }
            onClick={handleDownloadClick}
            >
            DOWNLOAD THE MODEL
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
};

export default Navbar;