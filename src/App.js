import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Widgets from './components/Widgets/Widgets';
import Login from './components/Login/Login';
import { login, logout, selectUser } from './features/userSlice';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser); // now we have the user here
  const dispatch = useDispatch();

  // do this otherwise on refresh the user is not kept logged in if previously logged in
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      // userAuth now saved all those details on login/register so we don't need to reff them as userAuth.user.email/userAuth.user.uid similarly how the state was defined in the LOGIN.JS login action dispatch payload obj
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  });

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
