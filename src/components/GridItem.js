import React, { Component } from 'react';

const GridItem = ({ info }) => (
  <div className="card">
    <div className="head">
      <h2>
        <a href><img src={info.user.avatar_url} alt="" /></a>
      </h2>
      <a href>
        <p>{info.user_name}</p>
      </a>
    </div>
    <div className="body">
      <img src={info.content_type_primary == 'image' ? `${info.thumbUrl}` : 'https://a.dilcdn.com/bl/wp-content/uploads/sites/8/2014/03/image5.jpg'} alt={info.name} />
    </div>
    <div className="foot">
      <div className="claim">
        <strong>Claim link: </strong><a href={info.certificateUrls.pdf}>&#x1f517;</a>
        <p><strong>Name: </strong>{info.name == '' ? 'null' : `${info.name}`}</p>
        <p><strong>Description: </strong>{info.description == '' ? 'null' : `${info.description}`}</p>
      </div>
    </div>
  </div>
);

export default GridItem;
