import React from 'react';

const generateItems = numItems =>{
    const items = [];

    for(let i = 0; i < numItems; i++)
    {
        items.push(
            <div className="item" key={`item_${i}`}>
                Item {i+1}
            </div>
        )
    }

    return items;
}

export default function MainContent(props)
{
    return( <main>
                <h1>Test Grid</h1>
                <div className="container">
                    {generateItems(6)}
                </div>
            </main>);   
}