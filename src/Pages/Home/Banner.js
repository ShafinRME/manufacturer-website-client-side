import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <div class="h-96 carousel carousel-vertical rounded-box">
                    <div class="carousel-item h-full">
                        <img src="https://i.ibb.co/8mhfWg9/Wheelbarow.webp" />
                    </div>
                    <div class="carousel-item h-full">
                        <img src="https://i.ibb.co/WvL2nKP/Wrench.webp" />
                    </div>
                    <div class="carousel-item h-full">
                        <img src="https://i.ibb.co/TRvm468/Tape-Measure.webp" />
                    </div>
                    <div class="carousel-item h-full">
                        <img src="https://i.ibb.co/7r4XMQm/Leatherman-Rev-Fanned.webp" />
                    </div>
                    <div class="carousel-item h-full">
                        <img src="https://i.ibb.co/prTqn80/Screwdriver.webp" />
                    </div>
                    <div class="carousel-item h-full">
                        <img src="https://i.ibb.co/ThFnVzG/Flashlight.webp" />
                    </div>
                    <div class="carousel-item h-full">
                        <img src="https://i.ibb.co/hCy9yGT/Saw.webp" />
                    </div>
                </div>
                <div>
                    <h1 class="text-5xl font-bold">Grab Your Tools Now</h1>
                    <p class="py-6">Here you can get your daily using necessary Tools for your home.Just visit our Website and get your best Tools.</p>
                    <button class="btn btn-primary">Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;