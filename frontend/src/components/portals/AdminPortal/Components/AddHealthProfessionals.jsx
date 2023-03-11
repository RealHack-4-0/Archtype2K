import React from 'react';
import { Form, Input, Select, Button, Layout } from 'antd';

const { Option } = Select;

function AddHealthProfessionals() {

    const onFinish = (values) => {
        console.log('Received values:', values);
        // Add logic to submit form data
    };

    return (
        <Layout className='p-16' style={{ background: '#fff' }}>
            <Form
                name="addUser"
                onFinish={onFinish}
                layout="vertical"
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter a name',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            message: 'Please enter a valid email address',
                        },
                        {
                            required: true,
                            message: 'Please enter an email address',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter a password',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    dependencies={['password']}
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords do not match'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Contact Number"
                    name="contactNumber"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter a contact number',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Role"
                    name="role"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a role',
                        },
                    ]}
                >
                    <Select>
                        <Option value="doctor">Doctor</Option>
                        <Option value="healthcare professional">Healthcare Professional</Option>
                    </Select>
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

export default AddHealthProfessionals;
