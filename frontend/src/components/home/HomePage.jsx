import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

function HomePage() {
    return (
        <>
            <div>
                <section class="header">
                    <div class="text-box">
                        <h2 class="text-4xl font-extrabold">Sri Lanka's Biggest Hospital System</h2>
                        <p>Compassionate, excellent care for all. Trust us to be your partner in health and wellness.</p>
                        <a href="#" class="hero-btn">Know More</a>
                    </div>
                </section>


                <section class="course">
                    <h2 class="text-4xl font-extrabold">What We Offer</h2>
                    <p>At Sri Lanka's biggest hospital system, we offer comprehensive healthcare services to meet the diverse needs of our community. Our state-of-the-art facilities and technology enable us to deliver the best possible care to our patients. We are proud to have a team of highly skilled and compassionate healthcare professionals who are dedicated to providing patient-centered care with a human touch.</p>

                    <div class="row">
                        <div class="course-col">
                            <h3>Comprehensive healthcare services</h3>
                            <p>Our hospital system offers a comprehensive range of healthcare services to meet the needs of our patients. We provide primary care, specialty care, diagnostic testing, surgery, and rehabilitation services, all aimed at promoting patient wellness and improving health outcomes. Our goal is to provide high-quality care that is convenient, accessible, and affordable.</p>
                        </div>
                        <div class="course-col">
                            <h3>State-of-the-art facilities and technology</h3>
                            <p>We are committed to investing in the latest medical technology and facilities to provide the best possible care to our patients. Our hospitals are equipped with state-of-the-art diagnostic and treatment tools, such as imaging equipment, surgical robots, and telemedicine technology. This enables our healthcare professionals to accurately diagnose and treat a wide range of medical conditions.</p>
                        </div>
                        <div class="course-col">
                            <h3>Highly skilled healthcare professionals</h3>
                            <p>Our team of healthcare professionals is made up of highly skilled and compassionate doctors, nurses, technicians, and support staff. We are committed to providing patient-centered care that is delivered with empathy and respect. We understand that healthcare can be a stressful experience, and we strive to create a supportive and welcoming environment for our patients.</p>
                        </div>
                    </div>
                </section>

                <section class="campus">
                    <h2 class="text-4xl font-extrabold">Our Branches</h2>
                    <p>Our hospital system is proud to have a wide range of branches throughout the region, each offering high-quality healthcare services to our patients. Our branches are staffed with highly skilled and compassionate healthcare professionals who are dedicated to providing patient-centered care with a human touch.</p>

                    <div class="row">
                        <div class="campus-col">
                            <img src="https://images.unsplash.com/photo-1613377512409-59c33c10c821?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                            <div class="layer">
                                <h3>Colombo</h3>
                            </div>
                        </div>
                        <div class="campus-col">
                            <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                            <div class="layer">
                                <h3>Kandy</h3>
                            </div>
                        </div>
                        <div class="campus-col">
                            <img src="https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" alt="" />
                            <div class="layer">
                                <h3>Galle</h3>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="facilities">
                    <h2 class="text-4xl font-extrabold">OUR FACILITIES</h2>
                    <p>Our hospital system is proud to offer state-of-the-art facilities to our patients. We are committed to investing in the latest medical technology and equipment to provide the best possible care to our patients. Our facilities are designed to be welcoming and comfortable, with a focus on promoting healing and wellness.</p>
                    <div class="row">
                        <div class="facilities-col">
                            <img src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                            <h3>Diagnostic Imaging Center</h3>
                            <p>Our diagnostic imaging center offers a wide range of imaging services, including X-rays, CT scans, MRI scans, and ultrasound. Our imaging center is staffed with experienced radiologists and technicians who use the latest technology to provide accurate and timely diagnoses. We understand that diagnostic testing can be a stressful experience, which is why we strive to create a supportive and comfortable environment for our patients.</p>
                        </div>
                        <div class="facilities-col">
                            <img src="https://images.unsplash.com/photo-1611694449252-02453c27856a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                            <h3>Specialty Clinic</h3>
                            <p>Our specialty clinic offers specialized care for a wide range of medical conditions, including cardiology, endocrinology, neurology, and gastroenterology. Our clinic is staffed with board-certified specialists who have advanced training and experience in their respective fields. We offer comprehensive care to our patients, including diagnosis, treatment, and follow-up care. Our goal is to provide our patients with the highest quality of care possible, using the latest medical technology and a compassionate, patient-centered approach.</p>
                        </div>
                        <div class="facilities-col">
                            <img src="https://images.unsplash.com/photo-1549560826-4b7bfe23f37b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                            <h3>Diagnostic Imaging Center</h3>
                            <p>Our diagnostic imaging center offers a wide range of imaging services, including X-rays, CT scans, MRI scans, and ultrasound. Our imaging center is staffed with experienced radiologists and technicians who use the latest technology to provide accurate and timely diagnoses. We understand that diagnostic testing can be a stressful experience, which is why we strive to create a supportive and comfortable environment for our patients.</p>
                        </div>
                    </div>
                </section>


                <section class="testimonials">
                    <h2 class="text-4xl font-extrabold">What Our Patients Say</h2>
                    <p>At our hospital system, we take pride in providing high-quality care and exceptional patient experiences. But don't just take our word for it - here are a few reviews from our patients:</p>
                    <div class="row">
                        <div class="testimonial-col">
                            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fuser&psig=AOvVaw1lG4NwaAHzfsb8EAyPWFin&ust=1678637126287000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKjkqd6g1P0CFQAAAAAdAAAAABAE" alt="" />
                            <div>
                                <p>"From the moment I walked in the door, I felt like I was in good hands. The staff was friendly and welcoming, and they took the time to answer all of my questions. My doctor was knowledgeable and compassionate, and I felt confident in the care I received. I would definitely recommend this hospital to anyone in need of medical care."</p>
                                <h3>Peter Parker</h3>
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                            </div>
                        </div>
                        <div class="testimonial-col">
                            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fuser&psig=AOvVaw1lG4NwaAHzfsb8EAyPWFin&ust=1678637126287000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKjkqd6g1P0CFQAAAAAdAAAAABAl" alt="" />
                            <div>
                                <p>"I have been a patient at this hospital for several years now, and I can honestly say that the care I receive is exceptional. The staff is always friendly and helpful, and they make me feel like a valued member of the community. My doctor is attentive and thorough, and she always takes the time to explain my condition and treatment options. I am grateful for the care I receive at this hospital and would highly recommend it to anyone."</p>
                                <h3>John Doe</h3>
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon icon="fa-sharp fa-solid fa-star-half" />
                            </div>
                        </div>
                    </div>
                </section>

                <section class="cta">
                    <h1>Book Your Appointments Online for Easy and Convenient Services Anytime, Anywhere</h1>
                    <a href="#" class="hero-btn">CONTACT US</a>
                </section>

                <section class="footer">
                    <h2 class="text-4xl font-extrabold">About Us</h2>
                    <p>Our management system is a modern healthcare solution designed to simplify and streamline the patient experience. We are committed to providing convenient and accessible healthcare services through cutting-edge technology and highly trained healthcare professionals. At our hospital system, we strive to put the patient first and provide compassionate care in a warm and welcoming environment.</p>
                    <div className="icons px-3">
                        <FontAwesomeIcon className ="px-2" icon={faFacebookF} />
                        <FontAwesomeIcon className ="px-2" icon={faInstagram} />
                        <FontAwesomeIcon className ="px-2" icon={faTwitter} />
                        <FontAwesomeIcon className ="px-2" icon={faYoutube} />
                    </div>
                    <p>Powered by Archtype2K</p>
                </section>
            </div>
        </>
    )
}

export default HomePage