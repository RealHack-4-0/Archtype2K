import { Menu } from 'antd';
import { Link } from 'react-router-dom';

// Make appointment
// See patient records

const patientHeaderItems = [
    {
        name: 'Home',
        path: '/patient',
    },
    {
        name: 'My Appointments',
        path: '/patient/appointments',
    },
    {
        name: 'Make Appointment',
        path: '/patient/make-appointment',
    },
    {
        name: 'My Reports',
        path: '/patient/reports',
    },
    {
        name: 'My Profile',
        path: '/patient/profile',
    },
];

const adminHeaderItems = [
    {
        name: 'Home',
        path: '/admin',
    },
    {
        name: 'Create Account',
        path: '/admin/create-account',
    },
    {
        name: 'View Doctors',
        path: '/admin/view-doctors',
    },
    {
        name: 'View Patients',
        path: '/admin/view-patients',
    },
];

const CommonHeader = () => {
    const userRole = JSON.parse(localStorage.getItem('user'));
    const loopItems = userRole.role === 'patient' ? patientHeaderItems : adminHeaderItems;

    console.log('common header from : ' + userRole.role);

    return (
        <Menu mode="horizontal" theme="dark">
            {loopItems.map((item, index) => {
                return (
                    <Menu.Item key={index}>
                        <Link to={item.path}>{item.name}</Link>
                    </Menu.Item>
                );
            })}
        </Menu>
    );
};

export default CommonHeader;
