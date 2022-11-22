import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shered/Footer/Footer';
import Header from '../Pages/Shered/Header/Header';
import LeftSideNav from '../Pages/Shered/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/Shered/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col lg='2' className='d-none d-lg-block'>
                        <LeftSideNav />
                    </Col>
                    <Col lg='6'>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg='4'>
                        <RightSideNav />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Main;