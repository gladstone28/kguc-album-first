import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MemberList from './MemberList';
import MemberDetail from './MemberDetail';
import FilteredMembersList from './FilteredMembersList';
import Header from './components/Header';
import Footer from './components/Footer';
import SkillsDropdown from './components/SkillsDropdown';


// List of unique skills for the dropdown
const skills = [
  'Medical Doctor',
  'Engineer',
  'Choir Member',
  'Technical Team',
  'Young Adult Movement',
  'Youth Fellowship',
  'Sunday School Teacher',
  'Pharmacist',
  'Chemical Engineer',
  'Youth Leader',
  'Minister',
  'Entrepreneur',
  'Businesswoman',
  'Businessman',
  'Usher',
  'Womens Fellowship',
  'Mens Fellowship',
  'Lawyer',
  'Teacher'
];


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <SkillsDropdown skills={skills} />
      <Routes>
        <Route path="/" element={<MemberList />} />
        <Route path="/member/:id" element={<MemberDetail />} />
        <Route path="/skills/:skill" element={<FilteredMembersList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
