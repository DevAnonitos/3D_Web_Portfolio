import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {

  const [active, setActive] = useState(" ");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav
        className={`${styles.paddingX}
          w-full flex items-center
          py-5 fixed top-0 z-20 bg-primary`
        }
      >
        <div
          className="w-full flex justify-between
          items-center max-w-7xl mx-auto"
        >
          <Link
            to="/"
            className='flex items-center gap-2'
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logo}
              alt="logo"
              className="w-9 h-9 object-contain"
            />
            <p
              className='text-white text-[18px]
              font-bold cursor-pointer flex'
            >
              BaoNg &nbsp;
              <span className="sm:block hidden">
                | Dev.IO
              </span>
            </p>
          </Link>

          {/*======================== Searchbar========================= */}

          <div className="sm:block hidden justify-center items-center">
            <div className="flex justify-center items-center relative mb-3 xl:w-96" data-te-input-wrapper-init>
              <input
                type="search"
                className="justify-center items-center
                  peer block min-h-[auto] h-[50px]
                  w-full rounded-2xl border-2 border-slate-800
                  bg-tertiary brightness-150
                  py-[0.32rem] px-3 leading-[1.6]
                  outline-none transition-all
                  duration-200 ease-linear
                  focus:placeholder:opacity-0
                  data-[te-input-state-active]:placeholder:opacity-100
                  motion-reduce:transition-none
                  dark:text-neutral-200
                  dark:placeholder:text-white
                  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
                id="exampleSearch2"
                placeholder="Search for blog ..."
              />

            </div>
          </div>

          {/* ===========================LinkMap========================= */}
          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                    active === nav.title
                    ? "text-white"
                    : "text-secondary"
                  } hover:text-white text-[18px]
                    font-medium cursor-pointe
                    transition-all duration-200
                    ease-in-out border-2 py-1 px-4
                    border-slate-800
                    shadow-zinc-400 rounded-3xl`
                }
                onClick={() => setActive(nav.title)}
              >
                <a
                  href={`#${nav.id}`}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
          {/* ===================SubMenu============================== */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
              <img
                src={toggle ? close : menu}
                alt='Menu'
                className='w-[28px] h-[28px]
                  object-contain cursor-pointer
                  transition-all duration-200
                  ease-in-out'
                onClick={() => setToggle(!toggle)}
              />

              <div className={`
                  ${!toggle ? 'hidden' : 'flex'}
                  p-6 black-gradient absolute
                  top-20 right-0 mx-4 my-2
                  min-w-[140px] z-10 rounded-xl
                  transition-all duration-300
                  ease-in-out
                `
              }>
                <ul
                  className='list-none flex justify-end
                  items-start flex-col gap-4'
                >
                  {navLinks.map((nav) => (
                    <li
                      key={nav.id}
                      className={`${
                          active === nav.title
                          ? "text-white"
                          : "text-secondary"
                        } hover:text-white text-[18px]
                          font-medium cursor-pointe
                          transition-all duration-200
                          ease-in-out`
                      }
                      onClick={() => setActive(nav.title)}
                    >
                      <a
                        href={`#${nav.id}`}
                      >
                        {nav.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
