import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MemberList from './MemberList';
import MemberDetail from './MemberDetail';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
<Router basename={process.env.PUBLIC_URL}>

      <Header />
      <Routes>
        <Route path="/" element={<MemberList />} />
        <Route path="/member/:id" element={<MemberDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
