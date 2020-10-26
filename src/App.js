import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import UserInfo from './components/UserInfo';
import { UserContext } from './contexts/UserContext'
import ChangeUser from './components/ChangeUser';

function App() {
  const [me, setMe] = useState({
    username: "hassanmian",
    firstName: "Hassan",
    lastName: "Mian"
  })

  function handleChangeUser() {
    setMe({
      username: "johndoe",
      firstName: "John",
      lastName: "Doe"
    })
  }

  return (
    <UserContext.Provider value={{ me, setMe }} >
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            Navigation left
          </div>
          <div className="col-md-4">
            <UserInfo/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            Side Navigation
          </div>
          <div className="col-md-8">
            Main Content
            <ChangeUser />
          </div>
        </div>
      </div>
    </div>
    </UserContext.Provider>
  );
}

export default App;
