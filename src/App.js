import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </BrowserRouter>
    </div>
  );
}

export default App;
