import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MemberList from './MemberList';
import MemberDetail from './MemberDetail';

function App() {
  return (
    <Router basename="/kguc-album-first">
      <Routes>
        <Route path="/" element={<MemberList />} />
        <Route path="/member/:id" element={<MemberDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
