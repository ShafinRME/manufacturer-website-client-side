import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        // Banner is added by using react bootstrap carousel
        <Carousel id='banner' fade className='mb-4 h-auto'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/mRwWRMR/8-Pliers.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Set of Pliers</h3>
                    <p>Use them to straighten bent power cord plugs, replace old shower heads, slice wiring, and get a good grip on just about anything. This well-made kit from Channellock includes tongue-and-groove, diagonal-cutting, long-nose, and slip-joint pliers.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/gtdMxqY/6-Wrench.png"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Adjustable Wrench</h3>
                    <p>You'll need an adjustable wrench to tighten plumbing fixtures, assemble swing sets, and more. This four-piece set includes wrenches with six-, eight-, 10, and 12-inch handles. Opt for the longer handle when you need extra leverage to free a stuck nut; go for the shorter handle when space is tight.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/1XdcMPM/4-Wheelbarow.png"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Wheelbarrow</h3>
                    <p>Come fall or spring, you'll appreciate its help hauling yard debris. The five-cubic-foot poly tub on this wheelbarrow can carry compost, soil, mulch, and more with ease.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/LhqqL22/3-Leatherman-Rev-Fanned.png"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Multitool</h3>
                    <p>Strapped to your hip or tossed into your glove box, a good multitool keeps knives, pliers, screwdrivers, and other tools close at hand. This pocket-sized model includes 14 tools and comes with a nylon carrying pouch.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/fH2BWpC/2-Tape-Measure.png"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Tape Measure</h3>
                    <p> Keep a tape measure on hand to measure anything from the wall area for a paint project to the lumber thickness at a home improvement store. At 25 feet long, this tape measure from Craftsman can measure distances both long and short.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;