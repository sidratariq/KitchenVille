import React from 'react';
import { Link } from 'react-router-dom';

const RecipieListItem = ({ id, description, amount, createdAt }) => (
  <Link className="list-item" to={`/edit/${id}`}>
  <div>
    <h3 className="list-item__title">{description}</h3>
    <span className="list-item__sub-title"> <p>{amount} - {createdAt}</p></span>
  </div>
  {/* <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3> */}
</Link>
);

export default RecipieListItem;
