import React from 'react';
import { Row, Col, Layout } from 'antd';
import './DoctorHome.css';

function DoctorHome() {
    return (
        <Layout className='p-16' style={{ background: '#fff' }}>
            <div style={{ height: '50vh' }}>
                <Row gutter={[16, 16]} style={{ height: '50%' }} className='pb-10'>
                    <Col span={8}>
                        <div className='box'>
                            Box 1
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className='box'>
                            Box 2
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className='box'>
                            Box 3
                        </div>
                    </Col>
                </Row>
                <Row gutter={[16, 16]} style={{ height: '50%' }} className='pb-10'>
                    <Col span={12}>
                        <div className='box'>
                            Box 4
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className='box'>
                            Box 5
                        </div>
                    </Col>
                </Row>
            </div>
        </Layout>
    );
}

export default DoctorHome;
