import { Carousel } from 'bootstrap'
import React from 'react'

function Home() {
    return (
        <div>

            {/* BANNER SECTION  */}
            {/* <Carousel>
                <Carousel.Item>
                    <div className="banner">
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="banner">
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="banner">
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel> */}
            
            <section className='banner'>
                <div className="color-layer">
                    <div className="container home-banner">
                        <h1 className='f-blue'>Find! The perfect <br /> Products for You</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, ratione iure. <br /> Odit non nihil libero qui esse explicabo error, perferendis asperiores <br /> voluptate incidunt doloribus perspiciatis, neque impedit optio iusto fugit.</p>
                        <button id='btn'>Shop Now</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home