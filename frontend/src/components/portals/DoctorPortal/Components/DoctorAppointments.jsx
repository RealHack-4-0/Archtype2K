import React, { useState } from 'react';
import { Table, Tag, Space, DatePicker, Layout, Button, Modal } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

let data = [
    {
        key: '1',
        doctorName: 'Dr. Smith',
        appointmentDate: '2022-05-15',
        appointmentTime: '10:00',
        status: 'Pending',
    },
    {
        key: '2',
        doctorName: 'Dr. Johnson',
        appointmentDate: '2022-05-16',
        appointmentTime: '14:30',
        status: 'Pending',
    },
    {
        key: '3',
        doctorName: 'Dr. Kim',
        appointmentDate: '2022-05-17',
        appointmentTime: '16:00',
        status: 'Pending',
    },
];

function DoctorAppointments() {
    const [filteredData, setFilteredData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState(null);

    const columns = [
        {
            title: 'Doctor Name',
            dataIndex: 'doctorName',
            key: 'doctorName',
        },
        {
            title: 'Appointment Date',
            dataIndex: 'appointmentDate',
            key: 'appointmentDate',
            render: (text) => moment(text).format('YYYY-MM-DD'),
        },
        {
            title: 'Appointment Time',
            dataIndex: 'appointmentTime',
            key: 'appointmentTime',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => {
                let color;
                switch (status) {
                    case 'Approved':
                        color = 'green';
                        break;
                    case 'Rejected':
                        color = 'red';
                        break;
                    default:
                        color = 'orange';
                        break;
                }
                return <Tag color={color}>{status.toUpperCase()}</Tag>;
            },
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button type="primary" htmlType="submit" style={{ background: '#4096ff' }} onClick={() => handleApprove(record)}>Approve</Button>
                    <Button type="danger" htmlType="submit" style={{ background: '#ff4d4f' }} onClick={() => handleReject(record)}>Reject</Button>
                </Space>
            ),
        },
    ];

    const handleFilter = (dateRange) => {
        const [startDate, endDate] = dateRange;
        const filtered = data.filter((record) => {
            const appointmentDate = moment(record.appointmentDate, 'YYYY-MM-DD');
            return appointmentDate.isBetween(startDate, endDate, 'days', '[]');
        });
        setFilteredData(filtered);
    };

    const handleApprove = (record) => {
        setSelectedRecord(record);
        setModalVisible(true);
    };

    const handleReject = (record) => {
        setSelectedRecord(record);
        setModalVisible(true);
    };

    const handleOk = () => {
        const updatedData = data.map((record) => {
            if (record.key === selectedRecord.key) {
                const status = selectedRecord.status === 'Approved' ? 'Approved' : 'Rejected';
                return {
                    ...record,
                    status,
                };
            }
            return record;
        });
        data = updatedData;
        setSelectedRecord(null);
        setModalVisible(false);
    };

    const handleCancel = () => {
        setSelectedRecord(null);
        setModalVisible(false);
    };

    return (
        <Layout className='p-16' style={{ background: '#fff' }}>
            <div className="flex justify-between items-center mb-16">
                <RangePicker onChange={handleFilter} />
                <Button type="primary">Add Appointment</Button>
            </div>
            <Table columns={columns} dataSource={filteredData.length ? filteredData : data} />

            <Modal
                visible={modalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                title={`${selectedRecord ? selectedRecord.doctorName : ''} - ${selectedRecord ? selectedRecord.appointmentDate : ''}`}
            >
                <p>Are you sure you want to {selectedRecord && selectedRecord.status === 'Approved' ? 'approve' : 'reject'} this appointment?</p>
            </Modal>
        </Layout>
    );
}

export default DoctorAppointments;