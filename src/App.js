import './App.css';
import React from 'react';
import Profile from '../src/profile/Profile'

function App() {
  const alertMyInput = props => alert(`${props}`);
  return (
    <div className="App">
      < Profile fullName = "React-JS"
      bio = "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."
      profession = "JavaScript library for creating user interfaces."
      alertMyInput={alertMyInput}>
      <img src="https://www.valuecoders.com/blog/wp-content/uploads/2018/06/1_i_Vj3gs7QO9fjcxELK2c2g.png" alt="react-logo" /></ Profile>
    </div>
  );
}
export default App;