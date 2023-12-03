import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const FaqComp = () => {
    return <div className="faq" id="faq">
        <Container>
            <Row className="mb-5">
                <Col>
                    <h2 className="text-center fw-bold" data-aos="fade-up">Pertanyaan Mengenai Staycation</h2>
                    <p className="text-center" data-aos="fade-up" data-aos-delay="200">Silahkan tanyakan dibawah ini</p>
                </Col>
            </Row>
            <Row className="row-cols-lg-2 row-cols-1 g-4">
                <Col data-aos="fade-up" data-aos-delay="400">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Bagaimana Cara Ordernya</Accordion.Header>
                            <Accordion.Body>
                            Untuk memesan, Anda dapat mengunjungi situs web kami 'Staycation.com' 
                            dan pilih hotel atau layanan yang diinginkan.
                            </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </Col>

                <Col data-aos="fade-up" data-aos-delay="500">
                <Accordion>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Apakah Sudah Terverifikasi dengan baik</Accordion.Header>
                            <Accordion.Body>
                            Semua layanan hotel yang tersedia di Staycation sudah terverifikasi dengan baik
                            </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </Col>

                <Col data-aos="fade-up" data-aos-delay="600">
                <Accordion>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Apakah ada penawaran khusus atau paket promo yang dapat saya manfaatkan</Accordion.Header>
                            <Accordion.Body>
                            Ya, Kami menyediakan penawaran khusus. Untuk mengetahui penawaran terbaru, Anda dapat mengunjungi bagian "Penawaran Khusus" atau "Promo" pada situs web kami. 
                            Di sana, Anda akan menemukan daftar penawaran eksklusif, paket menginap, diskon, atau fasilitas tambahan yang mungkin sesuai dengan kebutuhan Anda. 
                            Periode promo dan syarat serta ketentuan dapat berubah, jadi pastikan untuk memeriksa halaman penawaran kami agar tetap mendapatkan informasi terbaru tentang penawaran spesial.
                            </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </Col>

                <Col data-aos="fade-up" data-aos-delay="700">
                <Accordion>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Adakah kebijakan keamanan dan privasi yang harus saya ketahui sebelum melakukan pemesanan</Accordion.Header>
                            <Accordion.Body>
                            Tentu, kami sangat mengutamakan keamanan dan privasi Anda. Sebelum melakukan pemesanan, kami ingin memastikan bahwa Anda memahami kebijakan kami terkait keamanan dan privasi. 
                            Informasi pribadi yang Anda berikan saat pemesanan akan dijaga dengan sangat hati-hati dan tidak akan digunakan untuk tujuan selain yang terkait dengan reservasi Anda.
                            </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </Col>

                <Col data-aos="fade-up" data-aos-delay="800">
                <Accordion>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Bagaimana saya dapat mengakses informasi transportasi dan lokasi hotel dari situs ini</Accordion.Header>
                            <Accordion.Body>
                            Untuk mengakses informasi mengenai transportasi, anda dapat mencari lokasi hotel yang anda pilih kemudian cari di internet.
                            </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </Col>

                <Col data-aos="fade-up" data-aos-delay="900">
                <Accordion>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Apakah di Staycation memiliki kebijakan pengembalian uang jika ada perubahan rencana </Accordion.Header>
                            <Accordion.Body>
                            Kebijakan pengembalian uang atau kredit dapat bervariasi tergantung pada kebijakan spesifik dari masing-masing hotel atau penyedia layanan staycation. 
                            Untuk mendapatkan informasi yang akurat mengenai kebijakan pembatalan dan pengembalian uang, segera menghubungi layanan pelanggan hotel.
                            </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </Col>

                <Col data-aos="fade-up" data-aos-delay="1000">
                <Accordion>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>Apa saja fasilitas yang tersedia, dan bagaimana saya dapat mengetahuinya</Accordion.Header>
                            <Accordion.Body>
                            Untuk mengetahui fasilitas yang tersedia, Anda dapat mengakses situs web hotel kami. Pada halaman utama, Anda akan menemukan bagian "Fasilitas" atau "Layanan," 
                            di mana kami menyajikan informasi lengkap tentang semua yang ditawarkan hotel. Selain itu, di dalam deskripsi setiap tipe kamar, 
                            Anda akan menemukan detail lebih lanjut mengenai fasilitas yang termasuk. 
                            Jika Anda memiliki pertanyaan lebih lanjut atau ingin mendapatkan klarifikasi mengenai fasilitas tertentu, 
                            Anda dapat menghubungi layanan pelanggan kami melalui nomor telepon yang tertera di situs web atau menggunakan fitur obrolan langsung. 
                            Kami berusaha memberikan informasi yang komprehensif dan transparan untuk memastikan Anda dapat membuat keputusan yang tepat sesuai dengan kebutuhan dan preferensi Anda.
                            </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </Col>

                <Col data-aos="fade-up" data-aos-delay="1100">
                <Accordion>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>Bagaimana saya bisa mengetahui lebih lanjut tentang area sekitar hotel</Accordion.Header>
                            <Accordion.Body>
                            Anda bisa mengetahui lebih lanjut tentang area sekitar hotel dengan:
                            - Memeriksa peta di situs web hotel.
                            - Menghubungi resepsionis atau layanan pelanggan hotel.
                            - Mengeksplorasi aplikasi peta online seperti Google Maps.
                            - Menjelajahi situs web pariwisata kota atau daerah tersebut.
                            </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </Col>

            </Row>
        </Container>
    </div>;
};

export default FaqComp;