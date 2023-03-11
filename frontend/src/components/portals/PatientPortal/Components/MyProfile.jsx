import React from 'react';
import { Layout, Row, Col, Avatar, Card, Typography } from 'antd';

const { Title } = Typography;

function MyProfile() {
    return (
        <Layout className='p-16' style={{ background: '#fff' }}>
            <Row gutter={[24, 24]} align="middle">
                <Col span={4}>
                    <Avatar size={96} src="https://i.pravatar.cc/150?img=1" />
                </Col>
                <Col span={20}>
                    <Title level={2}>John Doe</Title>
                    <Title level={4}>25 years old, Male</Title>
                    <Title level={5}>Appointment Date: 2023-03-15</Title>
                </Col>
            </Row>
            <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
                <Col span={12}>
                    <Card title="Contact Information">
                        <p>123 Main St.</p>
                        <p>Anytown, USA 12345</p>
                        <p>Email: john.doe@gmail.com</p>
                        <p>Phone: 123-456-7890</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Medical Information">
                        <p>Blood Pressure: 120/80</p>
                        <p>Heart Rate: 80 bpm</p>
                        <p>Temperature: 98.6°F</p>
                        <p>Weight: 160 lbs</p>
                    </Card>
                </Col>
            </Row>
            <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
                <Col span={24}>
                    <Card title="Notes">
                        <p>Patient is in good health.</p>
                    </Card>
                </Col>
            </Row>
        </Layout>
    );
}

export default MyProfile;
