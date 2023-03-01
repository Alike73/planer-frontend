
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import Loader from './Loader';
import Main from './Main';
import ScrollToTopAndBottom from './ScrollToTopAndBottom';
import Welcome from './Welcome';

function App() {

  const {isLoading} = useAuth0();
  if(isLoading) return <Loader />;

  return (
    <div className="App">
      <Welcome />
      <Main />
      <ScrollToTopAndBottom />
    </div>
  );
}

export default App;
