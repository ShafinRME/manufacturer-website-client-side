import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='text-2xl text-center p-28'>
            <h2 className='text-center text-5xl font-bold text-info mb-10'>My Portfolio</h2>
            <h2>Name: Md Shafin Ahmed</h2> <br />
            <h3>Email: shafin.rmedu@gmail.com</h3> <br />
            <p>Here is the list of techs which I hava as a web-developer</p> <br />
            <ul>
                <li>React Expert</li>
                <li>Bootstrap Expert</li>
                <li>HTML5 Expert</li>
                <li>JavaScript Expert</li>
                <li>MongoDB Expert</li>
                <li>Node Js Expert</li>
                <li>Tailwind Expert</li>

            </ul> <br />
            <p>Here is the Link of my three website which i deveoped</p> <br />
            <a className='text-2xl text-primary font-bold' href="https://assignment-8-lucky-1.netlify.app/">Phone Bazar</a> <br />
            <a className='text-2xl text-primary font-bold' href="https://food-mania-assignment-9.netlify.app/home">Food Mania</a> <br />
            <a className='text-2xl text-primary font-bold' href="https://einstein-school-cbbd2.web.app/">Einstein School</a>
        </div>
    );
};

export default MyPortfolio;