import React from 'react';
import { Row, Col, Statistic, Layout } from 'antd';

function MyReport() {
    return (
        <Layout className='p-16' style={{ background: '#fff' }}>
            <Row gutter={16}>
                <Col span={6}>
                    <Statistic title="Patient Name" value="John Doe" />
                </Col>
                <Col span={6}>
                    <Statistic title="Age" value={25} suffix="years" />
                </Col>
                <Col span={6}>
                    <Statistic title="Gender" value="Male" />
                </Col>
                <Col span={6}>
                    <Statistic title="Appointment Date" value="2023-03-15" />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title="Blood Pressure" value="120/80" />
                </Col>
                <Col span={12}>
                    <Statistic title="Heart Rate" value={80} suffix="bpm" />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title="Temperature" value={98.6} suffix="°F" />
                </Col>
                <Col span={12}>
                    <Statistic title="Weight" value={160} suffix="lbs" />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Statistic title="Notes" value="Patient is in good health" />
                </Col>
            </Row>
        </Layout>
    );
}

export default MyReport;
