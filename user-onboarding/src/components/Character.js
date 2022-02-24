import React from 'react';

function Character ({details}) {



    return(
        <div>
            <h2>{details.first_name}</h2>
            <p>{details.email}</p>
            <p>{details.password}</p>
        </div>
    )
}

export default Character;