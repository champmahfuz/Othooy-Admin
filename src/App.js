import { useLocation } from 'react-router-dom';
import './App.css';
import { useLayoutEffect } from 'react';
import Routers from './components/Routers/Routers';

function App() {

  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  }

  return (
    <div className="App">
      <Wrapper>
        <Routers />
      </Wrapper>
    </div>

  );
}

export default App;
