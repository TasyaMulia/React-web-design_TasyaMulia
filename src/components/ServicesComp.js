import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ServicesComp = () => {
    return <div className="services min-vh-100 d-flex align-items-center" id="services">
        <Container>
            <Row className="mb-3">
                <Col>
                    <h1 className="text-center fw-bold" data-aos="fade-up">Services</h1>
                    <p className="text-center" data-aos="fade-up" data-aos-delay="200">Nikmati pengalaman menginap terbaik dengan beragam pilihan</p>
                </Col>
            </Row>
            <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
                <Col className="text-center py-5 px-3" data-aos="fade-up" data-aos-delay="400">
                    <i class="fa-solid fa-coins fs-2 mb-4"></i>
                    <h5 className="fw-bold">Harga Terjangkau</h5>
                    <p>Memberikan nilai lebih kepada pelanggan tanpa mengorbankan kualitas</p>
                </Col>

                <Col className="text-center py-5 px-3" data-aos="fade-up" data-aos-delay="600">
                    <i class="fa-solid fa-thumbs-up fs-2 mb-4"></i>
                    <h5 className="fw-bold">Fasilitas Terbaik</h5>
                    <p>Kemewahan Berkualitas Tinggi Prioritas Kami</p>
                </Col>

                <Col className="text-center py-5 px-3" data-aos="fade-up" data-aos-delay="800">
                    <i class="fa-solid fa-shield-halved fs-2 mb-4"></i>
                    <h5 className="fw-bold">Terserifikasi</h5>
                    <p>Menciptakan lingkungan online yang lebih aman dan terpercaya</p>
                </Col>

            </Row>
        </Container>
    </div>
};

export default ServicesComp;