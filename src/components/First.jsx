import React, { useRef, useState, useEffect } from 'react';
import { FaInstagram, FaGithub } from 'react-icons/fa6';
import { BiLogoGmail } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
gsap.registerPlugin(Flip);
import sanjay from '../assets/sanjay.jpg';

const First = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    gsap.set(menuRef.current, {
      opacity: 0,
      scale: 0.8,
      y: -20,
      rotateX: -90,
      transformOrigin: 'top center',
      display: 'none',
    });
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, scale: 0.8, y: -20, rotateX: -90, display: 'flex' },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotateX: 0,
          duration: 0.5,
          ease: 'power3.out',
        },
      );
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        scale: 0.8,
        y: -20,
        rotateX: -90,
        duration: 0.4,
        onComplete: () => gsap.set(menuRef.current, { display: 'none' }),
      });
    }
  };

  return (
    <div className="flex justify-center w-full min-h-screen bg-slate-900">
      <div className="flex flex-col items-center w-full max-w-md gap-6 mt-20 text-center text-white">
        <img
          className="rounded-full shadow-lg w-28 h-28"
          src={sanjay}
          alt="Nirmal Sir"
        />

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Sanjay</h1>
          <h2 className="text-lg text-gray-300">
            Full-stack Developer | Transforming ideas into Web Realities
          </h2>
          <h2 className="text-sm text-gray-400">DM Me to Get Started</h2>
        </div>

        <div className="flex gap-5 text-2xl">
          <a href="#" className="duration-300 hover:scale-125">
            <FaInstagram />
          </a>
          <a href="#" className="duration-300 hover:scale-125">
            <FaGithub />
          </a>
          <a
            href="mailto:test@example.com"
            className="duration-300 hover:scale-125"
          >
            <BiLogoGmail />
          </a>
        </div>

        <div className="w-[90%] h-14 bg-black flex items-center justify-between px-5 rounded-lg shadow-md relative">
          <h1 className="text-xl text-center">My Portfolio</h1>
          <BsThreeDotsVertical
            onClick={toggleMenu}
            className="text-3xl cursor-pointer hover:text-gray-400"
          />

        
          <div
            ref={menuRef}
            className="bg-gray-700 absolute gap-1 p-4 h-fit flex flex-col w-[40%] rounded-md shadow-lg right-0 top-14"
          >
            <div className="p-2 rounded cursor-pointer hover:bg-gray-600">
              Home
            </div>
            <div className="p-2 rounded cursor-pointer hover:bg-gray-600">
              About
            </div>
            <div className="p-2 rounded cursor-pointer hover:bg-gray-600">
              Projects
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
