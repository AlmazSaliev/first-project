import {Navigate, Route, Routes} from 'react-router-dom'
import ProjectDetail from '../components/ProjectDetail'
import ProjectInnerPage from '../components/ProjectInnerPage'
import Projects from '../components/Projects'
import Registration from '../components/Registration'
import HeaderLayout from '../layout/HeaderLayout'

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route path="/" element={<Navigate to="signup" replace />} />
        <Route path="signup" element={<Registration />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ProjectDetail />} />
        <Route path="projects/:id/:id" element={<ProjectInnerPage />} />
      </Route>
    </Routes>
  )
}
export default AllRoute
