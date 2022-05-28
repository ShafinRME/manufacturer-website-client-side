import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Tool from './Tool';
import './Tools.css';

const Tools = () => {

    const { data: tools, isLoading } = useQuery('tools', () => fetch('http://localhost:5000/tools')
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='container '>
            <h2 className='text-center p-5 mt-3 mb-3 toolss-header'>Our Tools</h2>
            <div className="inventories-container">
                {
                    // Doing slicing in api data from server
                    tools?.map(tool => <Tool
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