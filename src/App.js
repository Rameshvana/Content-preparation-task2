import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import HomeComponent from './Components/Home';
import DetailView from './Components/DetailView';
import FooterComponent from './Components/Footer';

function App() {
  return (
    <div className="Aprp">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeComponent></HomeComponent>}/>
          <Route path='/footer' element={<FooterComponent></FooterComponent>}/>
          <Route path='/detailView/:id/' element={<DetailView></DetailView>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
