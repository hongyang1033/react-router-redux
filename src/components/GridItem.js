import React, { Component } from 'react';

const GridItem = ({ info }) => (
  <div className="card">
    <div className="card__header">
      <div className="profile">
        <img className="profile__image" src={info.user.avatar_url} alt="profile" />
        <p className="profile__name">
          {info.user_name}
        </p>
      </div>
    </div>
    <div className="card__content">
      <img src={info.content_type_primary == 'image' ? `${info.thumbUrl}` : 'https://a.dilcdn.com/bl/wp-content/uploads/sites/8/2014/03/image5.jpg'} alt={info.name} alt="content" className="card__content__image" />
    </div>
    <div className="card__footer">
      <div className="metadata">
        <p className="metadata__name">
          <strong>Name: </strong>{info.name == '' ? 'null' : `${info.name}`}
        </p>
        <p className="metadata__description">
          <strong>Description: </strong>{info.description == '' ? 'null' : `${info.description}`}
        </p>
        <strong>Claim link: </strong><a href={info.certificateUrls.pdf} target="_blank">&#x1f517;</a>
      </div>
    </div>
  </div>
);

export default GridItem;
