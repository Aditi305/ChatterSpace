// import React, { useState } from "react";
// import {
//   MessageCircle,
//   Menu,
//   X,
//   Info,
//   Mail,
//   Star,
// } from "lucide-react";

// const Navbar = ({ onLoginClick, onSignupClick }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeItem, setActiveItem] = useState("Home");

//   const menuItems = [
//     { name: "About", icon: <Info className="w-4 h-4" /> },
//     { name: "Testimonials", icon: <Star className="w-4 h-4" /> },
//     { name: "Footer", icon: <Mail className="w-4 h-4" /> },
//   ];

//   // Smooth scroll
//   const handleScroll = (sectionId, itemName) => {
//     const section = document.getElementById(sectionId.toLowerCase());
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setActiveItem(itemName);
//       setIsMenuOpen(false);
//     }
//   };

//   return (
//     <nav className="relative">
//       <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 backdrop-blur-lg border-b-4 border-white/10 shadow-2xl">
//         <div className="relative z-10 max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           {/* 🔹 Left: Logo */}
//           <div className="flex items-center space-x-3 group cursor-pointer">
//             <div className="relative">
//               <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl shadow-lg flex items-center justify-center">
//                 <MessageCircle className="w-6 h-6 text-white" />
//               </div>
//             </div>
//             <div className="text-3xl font-black bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
//               ChatterSpace
//             </div>
//           </div>

//           {/* 🔹 Center: Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-2">
//             {menuItems.map((item) => (
//               <div
//                 key={item.name}
//                 onClick={() => handleScroll(item.name, item.name)}
//                 className={`relative px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 group ${
//                   activeItem === item.name
//                     ? "bg-white/10 backdrop-blur-sm shadow-lg"
//                     : "hover:bg-white/5 hover:backdrop-blur-sm"
//                 }`}
//               >
//                 <div className="relative flex items-center space-x-2 text-white">
//                   {item.icon}
//                   <span className="font-semibold">{item.name}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* 🔹 Right: Login / Signup Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <button
//               onClick={onLoginClick}
//               className="px-5 py-2 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition"
//             >
//               Login
//             </button>
//             <button
//               onClick={onSignupClick}
//               className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow hover:opacity-90 transition"
//             >
//               Signup
//             </button>
//           </div>

//           {/* 🔹 Mobile Menu Button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden p-3 rounded-xl bg-white/10 text-white"
//           >
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {/* 🔹 Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b-4 border-white/10 shadow-2xl px-6 py-6 space-y-4">
//           {menuItems.map((item) => (
//             <div
//               key={item.name}
//               onClick={() => handleScroll(item.name, item.name)}
//               className={`flex items-center space-x-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
//                 activeItem === item.name
//                   ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
//                   : "bg-white/5 hover:bg-white/10"
//               }`}
//             >
//               {item.icon}
//               <span className="text-white font-semibold">{item.name}</span>
//             </div>
//           ))}

//           {/* Mobile Login/Signup */}
//           <div className="flex flex-col space-y-3 pt-4 border-t border-white/20">
//             <button
//               onClick={onLoginClick}
//               className="px-5 py-3 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition"
//             >
//               Login
//             </button>
//             <button
//               onClick={onSignupClick}
//               className="px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow hover:opacity-90 transition"
//             >
//               Signup
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


// src/components/Navbar.jsx
import React, { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

// importing useNavigate
import { Link, useNavigate } from 'react-router-dom';
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navigate = useNavigate();
  const handleSignup = ()=>{
    navigate('/authpage');
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">ChatterSpace</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/chat" className="text-white hover:text-purple-300 transition">Home</Link>
            <Link to="/about" className="text-white hover:text-purple-300 transition">About</Link>
            <Link to="/contact" className="text-white hover:text-purple-300 transition">Contact</Link>
            <button
              className="ml-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition" onClick={handleSignup}
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white hover:text-purple-300 transition">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 px-4 pb-4 space-y-2 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20">
            <a href="#" className="block text-white hover:text-purple-300 transition">Home</a>
            <a href="#" className="block text-white hover:text-purple-300 transition">About</a>
            <a href="#" className="block text-white hover:text-purple-300 transition">Contact</a>
            <button
        
              className="block w-full text-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition" onClick={handleSignup}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}