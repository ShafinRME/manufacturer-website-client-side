import React, { useEffect, useState } from 'react';
import Tool from './Tool';
import './Tools.css';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div id='inventories' className='container '>
            <h2 className='text-center p-5 mt-3 mb-3 inventories-header'>Our Inventories</h2>
            <div className="inventories-container">
                {
                    // Doing slicing in api data from server
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    >

                    </Tool>)
                }
            </div>

        </div>
    );
};

export default Tools;