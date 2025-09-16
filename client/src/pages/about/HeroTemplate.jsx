import { NavLink } from "react-router-dom"; 
import { motion } from "framer-motion";

const HeroTemplate = ({ stats = { programs: 0, teachers: 0, research: 0 } }) => {

  return (
   <>
    {/* Stats Section with NavLink */}
               <div className="relative z-10 justify-center hidden min-[768px]:flex w-full -mt-44 gap-6 bottom-10">
                 
                 {/* Programs */}
                 <NavLink to="/program">
                   <div className="bg-white shadow-lg hover:shadow-4xl rounded-[6px] p-4 h-36 w-74 flex cursor-pointer group 
                                  max-[990px]:w-55 max-[990px]:h-34 transition-all duration-300">
                     <div className="w-1/2 flex items-center justify-center">
                       <motion.h2
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         className="text-7xl max-[990px]:text-6xl font-semibold text-[#4f65be] group-hover:text-black
                          transition-colors duration-300"
                       >
                         {stats.programs}
                       </motion.h2>
                     </div>
                     <div className="w-1/2 flex flex-col justify-center text-left">
                       <p className="text-[#4f65be] uppercase font-semibold">Programs</p>
                       <p className="text-sm text-gray-500">
                         We currently offer professional courses.
                       </p>
                     </div>
                   </div>
                 </NavLink>
         
                 {/* Teachers */}
                 <NavLink to="/people/faculty">
                   <div className="bg-white shadow-lg hover:shadow-4xl rounded-[6px] p-4 h-36 w-74 flex cursor-pointer group 
                                   max-[990px]:w-55 max-[990px]:h-34 transition-all duration-300">
                     <div className="w-1/2 flex items-center justify-center">
                       <motion.h2
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         className="text-7xl max-[990px]:text-6xl font-semibold text-[#4f65be] group-hover:text-black
                          transition-colors duration-300"
                       >
                         {stats.teachers}
                       </motion.h2>
                     </div>
                     <div className="w-1/2 flex flex-col justify-center text-left">
                       <p className="text-[#4f65be] uppercase font-semibold">Teachers</p>
                       <p className="text-sm text-gray-500">
                         We have professional teachers teaching.
                       </p>
                     </div>
                   </div>
                 </NavLink>
         
                 {/* Research */}
                 <NavLink to="/research">
                   <div className="bg-white shadow-lg hover:shadow-4xl rounded-[6px] p-4 h-36 w-74 flex cursor-pointer group 
                                  max-[990px]:w-55 max-[990px]:h-34 transition-all duration-300">
                     <div className="w-1/2 flex items-center justify-center">
                       <motion.h2
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         className="text-7xl max-[990px]:text-6xl font-semibold text-[#4f65be] group-hover:text-black
                          transition-colors duration-300"
                       >
                         {stats.research}
                       </motion.h2>
                     </div>
                     <div className="w-1/2 flex flex-col justify-center text-left">
                       <p className="text-[#4f65be] uppercase font-semibold">Research</p>
                       <p className="text-sm text-gray-500">
                         Currently research students in department.
                       </p>
                     </div>
                   </div>
                 </NavLink>
               </div>
   </>
  )
}

export default HeroTemplate
