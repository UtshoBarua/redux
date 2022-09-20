
import './App.css';
import Profile from './component/Profile';
import Login from './component/Login';
import ChangeColour from './component/ChangeColour';

function App() {
  return (
    <div className="App">
  {/* importing the components */}
      <Profile/>
      <Login/>
      <ChangeColour/>
    </div>
  );
}

export default App;
