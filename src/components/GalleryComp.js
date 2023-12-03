import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Gallery1 from "../assets/img/gallery/gallery-1.jpg"
import Gallery2 from "../assets/img/gallery/gallery-2.jpg"
import Gallery3 from "../assets/img/gallery/gallery-3.jpg"
import Gallery4 from "../assets/img/gallery/gallery-4.jpg"
import Gallery5 from "../assets/img/gallery/gallery-5.jpg"
import Gallery6 from "../assets/img/gallery/gallery-6.jpg"
import Gallery7 from "../assets/img/gallery/gallery-7.jpg"
import Gallery8 from "../assets/img/gallery/gallery-8.jpg"
import Gallery9 from "../assets/img/gallery/gallery-9.jpg"


const GalleryComp = () => {
    return <div className="gallery min-vh-100 d-flex align-items-center" id="gallery">
        <Container>
            <Row className="row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4">
                <Col><img src={Gallery1} alt="unsplash.com" className="w-100" data-aos="fade-up" /></Col>
                <Col><img src={Gallery2} alt="unsplash.com" className="w-100" data-aos="fade-up" data-aos-delay="200"/></Col>
                <Col><img src={Gallery3} alt="unsplash.com" className="w-100" data-aos="fade-up" data-aos-delay="400"/></Col>
                <Col><img src={Gallery4} alt="unsplash.com" className="w-100" data-aos="fade-up" data-aos-delay="600"/></Col>
                <Col><img src={Gallery5} alt="unsplash.com" className="w-100" data-aos="fade-up" data-aos-delay="800"/></Col>
                <Col><img src={Gallery6} alt="unsplash.com" className="w-100" data-aos="fade-up" data-aos-delay="1000"/></Col>
                <Col><img src={Gallery7} alt="unsplash.com" className="w-100" data-aos="fade-up" data-aos-delay="1200"/></Col>
                <Col><img src={Gallery8} alt="unsplash.com" className="w-100" data-aos="fade-up" data-aos-delay="1400"/></Col>
                <Col><img src={Gallery9} alt="unsplash.com" className="w-100" data-aos="fade-up" data-aos-delay="1600"/></Col>
            </Row>
        </Container>
    </div>;
};

export default GalleryComp;