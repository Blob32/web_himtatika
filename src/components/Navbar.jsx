import React, { useState, useEffect } from "react"
import { MenuIcon, XIcon } from "./icons"
import logoHimatika from "../assets/brand/hima.webp"

const Navbar = ({ navLinks, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled || isMenuOpen
          ? "bg-white/30 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-3"> {/*bg biru sementara sebagai pematok*/}
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className="text-2xl font-title font-bold text-brand-red"
          >
            <img 
            src={logoHimatika}
            alt="Logo Hima"
            className="w-12"
            />
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <div
               className={`fixed top-0 left-0 right-0 flex flex-row justify-around px-3 mx-[32%] rounded-b-[20px] duration-150 ease-out ${
                isScrolled || isMenuOpen
                  ? " bg-white/0 backdrop-blur-none py-5"
                  : " bg-white/30 backdrop-blur-sm py-3 shadow-md"
              }`}
              >
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium text-brand-dark hover:text-brand-red transition-colors ${
                    activeSection === link.href.substring(1)
                      ? "text-brand-red border-b-2 border-brand-red"
                      : ""
                  }`}
                >
                  {link.name}
                </a>
              ))}
              
            </div>
            <a
              href="https://www.instagram.com/himatikauinsgd"
              target="_blank"
              className="bg-brand-red hover:bg-red-800 text-white px-5 py-2 rounded-full transition"
            >
              Follow Us
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-dark bg-white/30 backdrop-blur-sm p-3 shadow-md rounded-[20px]"
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }  pb-4`}
      >
        <div className="flex flex-col items-center space-y-4 pt-4">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`font-medium text-brand-dark hover:text-brand-red transition-colors ${
                activeSection === link.href.substring(1) ? "text-brand-red" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://www.instagram.com/himatikauinsgd"
            target="_blank"
            onClick={() => setIsMenuOpen(false)}
            className="bg-brand-red hover:bg-red-800 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Follow Us
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
