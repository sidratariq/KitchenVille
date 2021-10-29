import React from 'react';
import { Link } from 'react-router-dom';

const RecipieListItem = ({ id, description, note}) => (
  <Link className="list-item" to={`/edit/${id}`}>
  <div>
    <h3 className="list-item__title">{description}</h3>
    <span className="list-item__sub-title"> <p>{note}</p></span>
  </div>
</Link>
);

export default RecipieListItem;
