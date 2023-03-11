import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const patientHeaderItems = [
    {
        name: 'Home',
        path: '/patient',
    },
    {
        name: 'My Profile',
        path: '/patient/profile',
    },
    {
        name: 'My Appointments',
        path: '/patient/appointments',
    },
    {
        name: 'My Prescriptions',
        path: '/patient/prescriptions',
    },
    {
        name: 'My Reports',
        path: '/patient/reports',
    },
    {
        name: 'My Payments',
        path: '/patient/payments',
    },
    {
        name: 'My Medical History',
        path: '/patient/medicalhistory',
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
            {userRole.role === 'patient' && (
                <Menu.Item key="new-reports" className="nav-pill">
                    <Link to="/patient/reports">New</Link>
                </Menu.Item>
            )}
        </Menu>
    );
};

export default CommonHeader;
