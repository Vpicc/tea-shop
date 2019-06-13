import React from 'react';
import TeaListing from '../components/TeaListing/TeaListing';

const AllTeas = (props) => (
    <ul className="list-group">
        {props.teaList.map((item,index) => (<TeaListing key={item.id} teaName={ item.name } quantityInStock={item.stock_quantity} />))}
    </ul>
);
export default AllTeas;