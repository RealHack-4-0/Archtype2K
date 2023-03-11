import React from 'react';
import { Form, Input, DatePicker, TimePicker, Select, Button, Layout } from 'antd';

const { Option } = Select;

function MakeAppointmentForm() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
        // You can submit the appointment data to a server here
    };

    return (
        <Layout className='p-16' style={{ background: '#fff' }}>
            <Form form={form} onFinish={onFinish}>
                <Form.Item name="patientName" label="Patient Name" rules={[{ required: true }]}>
                    <Input placeholder="Enter patient name" />
                </Form.Item>
                <Form.Item name="doctor" label="Doctor" rules={[{ required: true }]}>
                    <Select placeholder="Select a doctor">
                        <Option value="Dr. Smith">Dr. Smith</Option>
                        <Option value="Dr. Johnson">Dr. Johnson</Option>
                        <Option value="Dr. Kim">Dr. Kim</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="appointmentDate" label="Appointment Date" rules={[{ required: true }]}>
                    <DatePicker placeholder="Select appointment date" />
                </Form.Item>
                <Form.Item name="appointmentTime" label="Appointment Time" rules={[{ required: true }]}>
                    <TimePicker placeholder="Select appointment time" format="HH:mm" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" ghost={true} htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Layout>
    );
}

export default MakeAppointmentForm;
