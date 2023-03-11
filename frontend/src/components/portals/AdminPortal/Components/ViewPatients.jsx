import React, { useState } from 'react';
import { Table, Tag, Space, Input, Layout } from 'antd';
import moment from 'moment';

const { Search } = Input;

const data = [
    {
        key: '1',
        name: 'Dr. John Doe',
        specialization: 'Cardiologist',
        location: 'New York',
    },
    {
        key: '2',
        name: 'Dr. Jane Smith',
        specialization: 'Dermatologist',
        location: 'Los Angeles',
    },
    {
        key: '3',
        name: 'Dr. Bob Johnson',
        specialization: 'Ophthalmologist',
        location: 'Chicago',
    },
];

function ViewPatients() {
    const [filteredData, setFilteredData] = useState([]);
    const columns = [
        {
            title: 'Doctor Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Specialization',
            dataIndex: 'specialization',
            key: 'specialization',
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a>Edit</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    const handleSearch = (value) => {
        const filtered = data.filter((record) =>
            record.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filtered);
    };

    return (
        <Layout className='p-16' style={{ background: '#fff' }}>
            <Search
                placeholder="Search for doctor"
                allowClear
                enterButton="Search"
                onSearch={handleSearch}
                className="mb-10"
            />
            <Table columns={columns} dataSource={filteredData.length ? filteredData : data} />
        </Layout>
    );
}
export default ViewPatients;