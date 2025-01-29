"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";

const TopBar = ({ toggleMenu }: { toggleMenu: () => void }) => (
  <div className="w-full bg-blue-600 text-white py-4 px-6 text-xl font-semibold shadow-md flex items-center justify-between">
    <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
      <FiMenu className="w-6 h-6 text-white" />
    </button>
    <span>Resume Dashboard</span>
  </div>
);

const SideMenu = ({ isOpen }: { isOpen: boolean }) => (
  <motion.div
    initial={{ x: -250 }}
    animate={{ x: isOpen ? 0 : -250 }}
    transition={{ duration: 0.3 }}
    className={`fixed top-0 left-0 h-screen bg-gray-800 text-white p-4 w-64 shadow-lg z-50 ${isOpen ? "block" : "hidden"}`}
  >
    <ul className="space-y-4">
      <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Dashboard</li>
      <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Profile</li>
      <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Settings</li>
    </ul>
  </motion.div>
);

type LayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('ismenuOpen', isMenuOpen)
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex h-screen relative">
      <SideMenu isOpen={isMenuOpen} />
      <div className="flex-1 flex flex-col">
        <TopBar toggleMenu={toggleMenu} />
        <div className="p-8 bg-gray-100 min-h-screen">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
