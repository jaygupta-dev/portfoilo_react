// import './App.css'

// import Home from './components/page/Home'

// function App() {
//   return (
// <>
// <Home/>
// </>
//   );
// }

// export default App;

import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './components/page/Home';
import ContactUs from './components/page/ContactUs';
import ProjectDetail from './components/projects/ProjectDetail';
import BlogArticleDetail from './components/blogarticle/BlogArticleDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/ProjectDetail" element={<ProjectDetail />} />
        <Route path="/BlogArticleDetail" element={<BlogArticleDetail />} />
      </Routes>
    </>
  );
}

export default App;
