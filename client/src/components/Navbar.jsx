import { NavLink, Link } from 'react-router-dom'
 import { useState, useEffect,useRef } from 'react'
 import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
 const nav = [
 { label: 'Home', to: '/' },
 {
 label: 'About',
 children: [
 { label: 'Overview', to: '/about/overview' },
 { label: 'Vision & Mission', to: '/about/vision-mission' },
 { label: "POs/PEOs/PSOs", to: '/about/pos-peos-psos' },
 { label: 'COs & CO-PO Mapping', to: '/about/cos-copo-mapping' }
 ]
 },
 { label: 'Program', to: '/program' },
 {
 label: 'People',
 children: [
 { label: 'Faculty', to: '/people/faculty' },
 { label: 'Supporting Staff', to: '/people/supporting' },
 { label: 'Visiting', to: '/people/visiting' },
 { label: 'Alumni', to: '/people/alumni' }
 ]
 },
 { label: 'Student', to: '/student' },
 { label: 'Research', to: '/research' },
 { label: 'Activities', to: '/activities' },
 { label: 'Achievements', to: '/achievements' },
 { label: 'Infrastructure', to: '/infrastructure' },
//  { label: 'Contact', to: '/contact' }
 ]
 export default function Navbar() {
 const [open, setOpen] = useState(false)
 const [openMenu, setOpenMenu] = useState(null)
 const linkBase = 'px-3 py-2'
  const drawerRef = useRef(null);
  const toggleRef = useRef(null);


 useEffect(() => {
  document.body.style.overflowX = open ? "hidden" : "hidden";
  return () => {
    document.body.style.overflowX = "hidden";
  };
}, [open]);

 useEffect(() => {
    const handleClick = (e) => {
      // if open AND click is outside drawer & toggle button → close
      if (
        open &&
        drawerRef.current &&
        !drawerRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [open]);


 return (
 <header className="z-50 bg-white/90 backdrop-blur">
<div className="flex justify-between [@media(min-width:680px)]:px-20 [@media(min-width:900px)]:px-40
                items-center bg-[#565656] text-white px-4 py-2 flex-wrap">
  {/* University Name */}
  <a
    href="https://www.iul.ac.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-xl font-serif hover:text-gray-300 text-left [@media(max-width:480px)]:text-[16px] 
               [@media(max-width:430px)]:flex [@media(max-width:430px)]:flex-col"
  >
    <span className="mr-2">Integral</span>
    <span className="[@media(max-width:430px)]:mt-1">University</span>
  </a>

  {/* Contact */}
  <div
    className="flex items-center font-sans gap-6 text-[13px] [@media(max-width:480px)]:text-[11px]
               [@media(max-width:430px)]:flex-col [@media(max-width:430px)]:items-end [@media(max-width:430px)]:gap-2"
  >
    <Link
      to="/"
      className="flex items-center gap-2 hover:text-gray-300 text-brand-500"
    >
      <FaPhoneAlt /> +91 9335177775
    </Link>
    <a
      href="https://www.iul.ac.in/ca/Contact.aspx"
      className="flex items-center gap-2 hover:text-gray-300 text-brand-500"
    >
      <FaEnvelope /> info@iul.ac.in
    </a>
  </div>
</div>


 
 <div className='bg-[#4f65be] pt-2 pb-3'>
    <h1 className='font-semibold text-2xl sm:text-2xl md:text-4xl lg:text-5xl text-white text-center font-sans'>
    Department of Computer Application</h1>
 </div>
 <div className='flex justify-between'>
   <div className='mt-2 ml-4 hidden max-[950px]:block'>
       <img src="https://www.iul.ac.in/img/logo_circle.PNG" height={50} width={50} alt="" />
       </div>
   <div ref={toggleRef} className='bg-gray-200 p-3 hidden max-[950px]:block cursor-pointer'>
       <button className="text-xl p-2 cursor-pointer" onClick={() => setOpen(o => !o)} aria-label="Toggle Menu">
           ☰ 
       </button>
   </div>
 </div>

 {/* Desktop */}
 <nav className="max-[950px]:hidden flex items-center justify-center gap-2 mt-4">
 {nav.map((item, idx) => (
 item.children ? (
 <div key={idx} className="relative group">
 <button className={`${linkBase} flex items-center cursor-pointer text-[14px] font-sans uppercase gap-1 text-[#333] hover:text-[#4f65be] relative pb-8 pt-3 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#4f65be] after:w-0 hover:after:w-full after:transition-all`}>
  {item.label} ▾
</button>

 <div className="hidden group-hover:block absolute left-0 top-full min-w-[200px] bg-white">
 {item.children.map((sub, sidx) => (
 <NavLink key={sidx} to={sub.to} className={({isActive}) =>
 `${linkBase} block hover:bg-[#4f65be] text-[14px] text-[#333] hover:text-white ${isActive ? 'text-[#4f65be]' : ''}`}>{sub.label}</NavLink>
 ))}
 </div>
 </div>
 ) : (
 <NavLink key={idx} to={item.to} className={({isActive}) => `${linkBase} 'text-[#333] hover:text-[#4f65be] text-[14px] uppercase relative pb-8 pt-3 font-sans after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#4f65be] after:w-0 hover:after:w-full after:transition-all' ${isActive ? 'text-[#4f65be] after:w-full' : ''}`}>{item.label}</NavLink>
 )
 ))}
 </nav>


{/* Mobile Drawer */}
<div ref={drawerRef}
  className={`fixed right-0 h-full w-60 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 
  ${open ? "translate-x-0" : "translate-x-full"} 
  max-[950px]:block hidden`}
>
  <div className="text-[14px] bg-white">
    {nav.map((item, idx) => (
      <div key={idx} className="border-b border-gray-200 uppercase hover:bg-indigo-100">
        {item.children ? (
          <div className="group">
            {/* Parent Link */}
            <div className="px-5 py-4 font-medium text-gray-700 cursor-pointer uppercase group-hover:text-[#4f65be]">
              {item.label}
            </div>
            {/* Submenu (appears on hover) */}
            <div className="hidden group-hover:block bg-[#4f65be]">
              {item.children.map((sub, sidx) => (
                <NavLink
                  key={sidx}
                  to={sub.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-5 py-3 text-[12px] text-white hover:bg-[#4558a3] ${
                      isActive ? "text-[#4f65be]" : "text-gray-600"
                    }`
                  }
                >
                  {sub.label}
                </NavLink>
              ))}
            </div>
          </div>
        ) : (
          <NavLink
            to={item.to}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `block px-5 py-4 font-medium ${
                isActive ? "text-[#4f65be]" : "text-gray-700"
              } hover:text-[#4f65be]`
            }
          >
            {item.label}
          </NavLink>
        )}
      </div>
    ))}
  </div>
</div>

 </header>
 )}