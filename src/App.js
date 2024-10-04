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
  'Dentist',
  'Youth Leader',
  'Minister',
  'Entrepreneur',
  'Banker',
  'Businesswoman',
  'Businessman',
  'Business Manager',
  'Usher',
  'Evangelism Committee',
  'Christian Education Committee',
  'Womens Fellowship',
  'Mens Fellowship',
  'F&S Committee',
  'Worship and Fshp Committee',
  'Property Committee',
  'Lawyer',
  'Teacher',
  'Daniel House',
  'Esther House',
  'Matthew House',
  'Ruth House'
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
