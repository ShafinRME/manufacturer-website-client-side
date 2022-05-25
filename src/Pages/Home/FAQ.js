import React from 'react';
import './FAQ.css';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div id="faq" className='mb-5 mt-5'>
            <h1 className='faq-title'>FAQ about our Service</h1>

            <div className="container faq-container">
                <div className="faq-ques-ans">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className='accordion-head'>What type of tools we are selling ?</Accordion.Header>
                            <Accordion.Body>
                                We are selling so many types of tools.Here is the list of these tools.
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
                                    <div class="carousel-item h-full">
                                        <img src="https://i.ibb.co/PDMXsx2/Screwdriverr.webp" />
                                    </div>
                                    <div class="carousel-item h-full">
                                        <img src="https://i.ibb.co/xFCFPML/Pliers.webp" />
                                    </div>
                                    <div class="carousel-item h-full">
                                        <img src="https://i.ibb.co/yhCzYcD/Hammer.webp" />
                                    </div>
                                    <div class="carousel-item h-full">
                                        <img src="https://i.ibb.co/XsYSMYT/Organizer.webp" />
                                    </div>
                                    <div class="carousel-item h-full">
                                        <img src="https://i.ibb.co/NWYPSWL/Putty-Knife.webp" />
                                    </div>
                                    <div class="carousel-item h-full">
                                        <img src="https://i.ibb.co/JmVN0bv/Sander.webp" />
                                    </div>
                                    <div class="carousel-item h-full">
                                        <img src="https://i.ibb.co/yXWCsGP/Socket-Set.webp" />
                                    </div>
                                    <div class="carousel-item h-full">
                                        <img src="https://i.ibb.co/rf4PHWS/ToolBox.webp" />
                                    </div>
                                    <div class="carousel-item h-full">
                                        <img src="https://i.ibb.co/Z8qv66L/Utility-Knife.webp" />
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What type of delivary system we used to deliver a product ?</Accordion.Header>
                            <Accordion.Body>
                                Generally we take only 1 day inside any location of Bangladesh.But if it is outside of bangladesh we take more than 3 days to deliver the product.We deliver our product inside bangladesh via courier service and outside bangladesh we deliver our product by curgo service.We think that our delivery service is so good.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What is General Relativity in Science ?</Accordion.Header>
                            <Accordion.Body>
                                General relativity is a theory of gravitation developed by Einstein in the years 1907-1915. The development of general relativity began with the equivalence principle, under which the states of accelerated motion and being at rest in a gravitational field (for example, when standing on the surface of the Earth) are physically identical. The upshot of this is that free fall is inertial motion: an object in free fall is falling because that is how objects move when there is no force being exerted on them, instead of this being due to the force of gravity as is the case in classical mechanics. This is incompatible with classical mechanics and special relativity because in those theories inertially moving objects cannot accelerate with respect to each other, but objects in free fall do so. To resolve this difficulty Einstein first proposed that spacetime is curved. In 1915, he devised the Einstein field equations which relate the curvature of spacetime with the mass, energy, and any momentum within it.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What is Big Bang Theory ?</Accordion.Header>
                            <Accordion.Body>
                                The Big Bang theory is the prevailing cosmological model explaining the existence of the observable universe from the earliest known periods through its subsequent large-scale evolution.The model describes how the universe expanded from an initial state of high density and temperature,and offers a comprehensive explanation for a broad range of observed phenomena, including the abundance of light elements, the cosmic microwave background (CMB) radiation, and large-scale structure.

                                Crucially, the theory is compatible with Hubble-Lemaître law—the observation that the farther away a galaxy is, the faster it is moving away from Earth. Extrapolating this cosmic expansion backwards in time using the known laws of physics, the theory describes an increasingly concentrated cosmos preceded by a singularity in which space and time lose meaning (typically named "the Big Bang singularity").Detailed measurements of the expansion rate of the universe place the Big Bang singularity at around 13.8 billion years ago, which is thus considered the age of the universe.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="faq-pic">
                    <img src="" alt="" />

                </div>
            </div>
        </div>
    );
};

export default FAQ;