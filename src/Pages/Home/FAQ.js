import React from 'react';
import './FAQ.css';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div id="faq" className='mb-5 mt-5 container'>
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
                            <Accordion.Header>What is about Warranty and Gauranty of a Tools ? </Accordion.Header>
                            <Accordion.Body>
                                It will vary from tools to tools.Because each tools is different from another tools.For your trusting issue there we are including some Warnenty and Gauranty list of tools.
                                <ol>
                                    <li>Wheelbarow - 2 years Warranty</li>
                                    <li>Pliers - 3 years Warranty</li>
                                    <li>Hammer - 3 years Gauranty</li>
                                    <li>Screwdriver - 1 years Warranty</li>
                                    <li>ToolBox - 4 years Guarnty</li>
                                </ol>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Why you should buy tools from us ?</Accordion.Header>
                            <Accordion.Body>
                                You must buy necessary tools from us because since 2000 we are selling our tools to buyers.Since 2000 we have no objection from customers or dealers.Every customers and dealers give us good reviews.You can see these reviews from our reviews section.Just explore our tools universe and get your best tools.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="faq-pic">
                    <img src="https://i.ibb.co/b50GdBY/FAQ-1.png" alt="" />

                </div>
            </div>
        </div>
    );
};

export default FAQ;