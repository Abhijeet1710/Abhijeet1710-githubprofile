import React from 'react';


function Card({info}) {

  return (
    <div className="main main-card">
        <div className="card" style={{width: '18rem'}}>
        <img src={info.avatar_url} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{info.name}</h5>
        <p className="card-text">{info.bio}</p>
        <a href={info.html_url} className="btn"> {`${info.name}'s`} Github</a>
        </div>
    </div>
  </div>
  );
}

export default Card;
