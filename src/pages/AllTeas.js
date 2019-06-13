import React from 'react';
import TeaListing from '../components/TeaListing/TeaListing';

const AllTeas = (props) => {
    let array = [];
    for(let i = 0; i < props.teaList.length; i++){
        array.push(
            <TeaListing key={props.teaList[i].id} teaName={ props.teaList[i].name } quantityInStock={props.teaList[i].stock_quantity} />
        )
    }

    return(<ul className="list-group">{array}</ul>);
};
export default AllTeas;