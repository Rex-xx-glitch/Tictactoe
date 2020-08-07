import React from 'react';

export default function Cell({HandleClick, value, id}){
    return (
        <div className="cell col-sm-3" onClick={()=> HandleClick(id)}><p>{value !== null && value}</p></div>
    );
}