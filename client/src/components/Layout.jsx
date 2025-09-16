 import { Outlet } from 'react-router-dom'
 import Navbar from './Navbar.jsx'
 import Footer from './Footer.jsx'
 import 'react-toastify/dist/ReactToastify.css'
 
 export default function Layout() {
 return (
 <div className="min-h-screen flex flex-col bg-gray-50">
 <Navbar />
 <main className="flex-1">
 <Outlet />
 </main>
 <Footer />
 </div>
 )
 }