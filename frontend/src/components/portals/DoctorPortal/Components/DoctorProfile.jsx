import React, { useState } from 'react';
import { Form, Input, Modal, Button, Layout } from 'antd';

function DoctorProfile() {
    const [changePasswordModalVisible, setChangePasswordModalVisible] = useState(false);
    const [form] = Form.useForm();

    const handleOpenChangePasswordModal = () => {
        setChangePasswordModalVisible(true);
    };

    const handleCloseChangePasswordModal = () => {
        setChangePasswordModalVisible(false);
    };

    const handleFinishChangePassword = (values) => {
        // TODO: Handle change password logic here
        console.log(values);
        handleCloseChangePasswordModal();
    };

    return (
        <Layout className='p-16' style={{ background: '#fff' }}>
            <h1>Doctor Profile</h1>
            <p>Name: John Doe</p>
            <p>Email: johndoe@example.com</p>
            <p>Specialty: Cardiology</p>
            <Button onClick={handleOpenChangePasswordModal}>Change Password</Button>
            <Modal
                title="Change Password"
                visible={changePasswordModalVisible}
                onCancel={handleCloseChangePasswordModal}
                footer={null}
            >
                <Form form={form} onFinish={handleFinishChangePassword}>
                    <Form.Item
                        label="Old Password"
                        name="oldPassword"
                        rules={[{ required: true, message: 'Please enter your old password' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="New Password"
                        name="newPassword"
                        rules={[{ required: true, message: 'Please enter your new password' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </Layout>
    );
}

export default DoctorProfile;
