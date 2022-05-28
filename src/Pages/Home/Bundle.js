import React from 'react';
import './Bundle.css';

const Bundle = () => {
    return (
        <div className='bundle container '>
            <h2 className='bundle-header'>Bundle</h2>
            <div class="indicator">
                <span class="indicator-item badge badge-info badge-writing">Hottest</span>
                <div class="grid w-32 h-32 bg-base-300 place-items-center bundle-element">
                    <div className='tool-container'>
                        <div className='grid grid-cols-2 gap-3'>
                            <img src="https://i.ibb.co/prTqn80/Screwdriver.webp" alt="" />
                            <img src="https://i.ibb.co/prTqn80/Screwdriver.webp" alt="" />
                            <img src="https://i.ibb.co/prTqn80/Screwdriver.webp" alt="" />
                            <img src="https://i.ibb.co/prTqn80/Screwdriver.webp" alt="" />
                        </div>
                        <div className='mt-5'>
                            <h2 className='mb-4'>Screwdriver Set</h2>
                            <p>Screwdrivers can be used for anything from tightening cabinet hardware to installing light switches to opening paint cans. This 10-piece set includes five Phillips and five slotted screwdrivers in common sizes.</p>
                            <h5 className='text-primary mt-2 mb-4'>Price: $60</h5>
                            <button className='btn inventory-button text-white'>Purchase</button>
                        </div>

                    </div>
                </div>
            </div>
            <div class="indicator">
                <span class="indicator-item badge badge-primary badge-writing">Hotter</span>
                <div class="grid w-32 h-32 bg-base-300 place-items-center bundle-element">
                    <div className='tool-container'>
                        <div className='grid grid-cols-2 gap-3'>
                            <img src="https://i.ibb.co/prTqn80/Screwdriver.webp" alt="" />
                            <img src="https://i.ibb.co/prTqn80/Screwdriver.webp" alt="" />
                            <img className='ml-16' src="https://i.ibb.co/prTqn80/Screwdriver.webp" alt="" />
                        </div>
                        <div className='mt-5'>
                            <h2 className='mb-4'>Screwdriver Set</h2>
                            <p>Screwdrivers can be used for anything from tightening cabinet hardware to installing light switches to opening paint cans. This 10-piece set includes five Phillips and five slotted screwdrivers in common sizes.</p>
                            <h5 className='text-primary mt-2 mb-4'>Price: $50</h5>
                            <button className='btn inventory-button text-white'>Purchase</button>
                        </div>

                    </div>
                </div>
            </div>
            <div class="indicator">
                <span class="indicator-item badge badge-primary badge-writing">Hot</span>
                <div class="grid w-32 h-32 bg-base-300 place-items-center bundle-element">
                    <div className='tool-container'>
                        <div className='grid grid-cols-2 gap-3'>
                            <img src="https://i.ibb.co/prTqn80/Screwdriver.webp" alt="" />
                            <img src="https://i.ibb.co/prTqn80/Screwdriver.webp" alt="" />
                        </div>
                        <div className='mt-5'>
                            <h2 className='mb-4'>Screwdriver Set</h2>
                            <p>Screwdrivers can be used for anything from tightening cabinet hardware to installing light switches to opening paint cans. This 10-piece set includes five Phillips and five slotted screwdrivers in common sizes.</p>
                            <h5 className='text-primary mt-2 mb-4'>Price: $35</h5>
                            <button className='btn inventory-button text-white'>Purchase</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bundle;