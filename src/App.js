
import './App.css';
// import Home from './Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import PdfFile from './PdfFile';
import Home from './Home';
import Video from './Video';
import Image from './Image';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/pdffile' element={<PdfFile />}/>
        <Route path='/video' element={<Video />}/>
        <Route path='/image' element={<Image />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
