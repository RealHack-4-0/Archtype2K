import React, { useState } from 'react';
import { Table, Tag, Space, DatePicker, Layout } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const data = [
    {
        key: '1',
        patientName: 'John Doe',
        doctor: 'Dr. Smith',
        appointmentDate: '2022-05-15',
        appointmentTime: '10:00',
        status: 'Confirmed',
    },
    {
        key: '2',
        patientName: 'Jane Smith',
        doctor: 'Dr. Johnson',
        appointmentDate: '2022-05-16',
        appointmentTime: '14:30',
        status: 'Cancelled',
    },
    {
        key: '3',
        patientName: 'Bob Johnson',
        doctor: 'Dr. Kim',
        appointmentDate: '2022-05-17',
        appointmentTime: '16:00',
        status: 'Confirmed',
    },
];

function Appointments() {
    const [filteredData, setFilteredData] = useState([]);

    const columns = [
        {
            title: 'Patient Name',
            dataIndex: 'patientName',
            key: 'patientName',
        },
        {
            title: 'Doctor',
            dataIndex: 'doctor',
            key: 'doctor',
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
                const color = status === 'Confirmed' ? 'green' : 'red';
                return <Tag color={color}>{status.toUpperCase()}</Tag>;
            },
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a>View</a>
                    <a>Delete</a>
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

    return (
        <Layout className='p-16' style={{ background: '#fff' }}>
            <RangePicker onChange={handleFilter} className="mb-10"/>
            <Table columns={columns} dataSource={filteredData.length ? filteredData : data} />
        </Layout>
    );
}

export default Appointments;
