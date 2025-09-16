import { Routes, Route } from 'react-router-dom'
 import Layout from './components/Layout.jsx'
 import Home from './pages/Home.jsx'
 import Overview from './pages/about/Overview.jsx'
 import VisionMission from './pages/about/VisionMission.jsx'
 import POsPEOsPSOs from './pages/about/POsPEOsPSOs.jsx'
 import COsCOPOMapping from './pages/about/COsCOPOMapping.jsx'
 import Program from './pages/Program.jsx'
 import Faculty from './pages/people/Faculty.jsx'
 import Supporting from './pages/people/Supporting.jsx'
 import Visiting from './pages/people/Visiting.jsx'
 import Alumni from './pages/people/Alumni.jsx'
 import Student from './pages/Student.jsx'
 import Research from './pages/Research.jsx'
 import Activities from './pages/Activities.jsx'
 import Achievements from './pages/Achievements.jsx'
 import Infrastructure from './pages/Infrastructure.jsx'
 import NotFound from './pages/NotFound.jsx'
 export default function App() {
 return (
 <Routes>
 <Route element={<Layout />}>
 <Route index element={<Home />} />
 <Route path="about">
 <Route path="overview" element={<Overview />} />
 <Route path="vision-mission" element={<VisionMission />} />
 <Route path="pos-peos-psos" element={<POsPEOsPSOs />} />
 <Route path="cos-copo-mapping" element={<COsCOPOMapping />} />
 </Route>
 <Route path="program" element={<Program />} />
 <Route path="people">
 <Route path="faculty" element={<Faculty />} />
 <Route path="supporting" element={<Supporting />} />
 <Route path="visiting" element={<Visiting />} />
 <Route path="alumni" element={<Alumni />} />
 </Route>
 <Route path="student" element={<Student />} />
 <Route path="research" element={<Research />} />
 <Route path="activities" element={<Activities />} />
 <Route path="achievements" element={<Achievements />} />
 <Route path="infrastructure" element={<Infrastructure />} />
 <Route path="*" element={<NotFound />} />
 </Route>
 </Routes>
 )
 }