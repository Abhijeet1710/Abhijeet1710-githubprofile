import React, {useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card'
const url = "https://api.github.com/users/";

function App() {

  const [hasResult, setResult] = useState(false);
  const [data, setData] = useState({});


  const getInfo = async ()  =>{
    const userName = document.getElementById('input').value;
    if(userName !== ""){
      const response = await fetch(`${url}${userName}`);
      setData(await response.json());
      setResult(true);
    }
    
  }

  if(hasResult) {
    return (
      <Card info ={data} />
    );
  }else {
    return (

    <div className="face">

          <div className="main">
            <div className="input-group">
                <input type="text" aria-label="First name" className="form-control" id="input" />
            </div>
            <button className="btn btn-search mt-4" onClick={ () => getInfo() }> Search User by Github UserName</button>
         </div>

         <p className="footer">abhijeetkhamkar30@gmail.com</p>

    </div>


  );
  }

  


}

export default App;
