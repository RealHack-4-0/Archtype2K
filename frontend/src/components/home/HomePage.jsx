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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere possimus voluptatum cupiditate ipsum corrupti! Illum sint perferendis quae animi distinctio rerum at harum.<br/>Fuga temporibus quis obcaecati commodi ut laboriosam?</p>
                        <a href="#" class="hero-btn">Visit Us To Know More</a>
                    </div>
                </section>


                <section class="course">
                    <h2 class="text-4xl font-extrabold">Course We Offer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptas natus excepturi dolor, velit omnis officia magni incidunt iste molestias blanditiis, eum inventore reiciendis quas, perspiciatis deserunt fugiat iusto expedita?</p>

                    <div class="row">
                        <div class="course-col">
                            <h3>Intermediate</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deserunt incidunt illum, quis minima culpa praesentium suscipit quaerat veritatis, officia a commodi sequi obcaecati nostrum fuga molestias quasi dolores eius.</p>
                        </div>
                        <div class="course-col">
                            <h3>Degree</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deserunt incidunt illum, quis minima culpa praesentium suscipit quaerat veritatis, officia a commodi sequi obcaecati nostrum fuga molestias quasi dolores eius.</p>
                        </div>
                        <div class="course-col">
                            <h3>Post Graduation</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deserunt incidunt illum, quis minima culpa praesentium suscipit quaerat veritatis, officia a commodi sequi obcaecati nostrum fuga molestias quasi dolores eius.</p>
                        </div>
                    </div>
                </section>

                <section class="campus">
                    <h2 class="text-4xl font-extrabold">Our Global Campus</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo assumenda ducimus alias, rerum nobis doloribus eius reiciendis saepe magnam quasi ea ut corrupti enim pariatur sunt sint non dicta quidem!</p>

                    <div class="row">
                        <div class="campus-col">
                            <img src="https://images.unsplash.com/photo-1613377512409-59c33c10c821?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                            <div class="layer">
                                <h3>LONDON</h3>
                            </div>
                        </div>
                        <div class="campus-col">
                            <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                            <div class="layer">
                                <h3>NEW YORK</h3>
                            </div>
                        </div>
                        <div class="campus-col">
                            <img src="https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" alt="" />
                            <div class="layer">
                                <h3>WASHINGTON</h3>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="facilities">
                    <h2 class="text-4xl font-extrabold">OUR FACILITIES</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi dignissimos sed laboriosam commodi consequuntur est aliquam accusamus? Quae dolorem harum at suscipit eius ex error labore dicta, velit cumque.</p>
                    <div class="row">
                        <div class="facilities-col">
                            <img src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                            <h3>World Class Library</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugiat iure dicta in quae. Reprehenderit repellendus dolores deserunt maxime, cupiditate molestiae aspernatur, provident possimus neque in praesentium quam, repudiandae dicta.</p>
                        </div>
                        <div class="facilities-col">
                            <img src="https://images.unsplash.com/photo-1611694449252-02453c27856a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                            <h3>Play Ground</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugiat iure dicta in quae. Reprehenderit repellendus dolores deserunt maxime, cupiditate molestiae aspernatur, provident possimus neque in praesentium quam, repudiandae dicta.</p>
                        </div>
                        <div class="facilities-col">
                            <img src="https://images.unsplash.com/photo-1549560826-4b7bfe23f37b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                            <h3>Tasty and Healthy Food</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugiat iure dicta in quae. Reprehenderit repellendus dolores deserunt maxime, cupiditate molestiae aspernatur, provident possimus neque in praesentium quam, repudiandae dicta.</p>
                        </div>
                    </div>
                </section>


                <section class="testimonials">
                    <h2 class="text-4xl font-extrabold">What Our Student Says</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ad ipsam illum accusantium optio dolores earum laudantium ducimus magnam? Tempora quas reiciendis dolores voluptas ut aspernatur quia saepe sunt hic?</p>
                    <div class="row">
                        <div class="testimonial-col">
                            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fuser&psig=AOvVaw1lG4NwaAHzfsb8EAyPWFin&ust=1678637126287000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKjkqd6g1P0CFQAAAAAdAAAAABAE" alt="" />
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore laudantium itaque perferendis vitae ducimus maiores, voluptas maxime aliquam dolorum facilis esse. Doloribus, aliquam eligendi architecto cumque dignissimos error repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias minus voluptas cum inventore maxime fugit ullam molestiae quidem excepturi corrupti. Cum animi delectus eos a dolorum voluptatem sed tempora quod!</p>
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
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore laudantium itaque perferendis vitae ducimus maiores, voluptas maxime aliquam dolorum facilis esse. Doloribus, aliquam eligendi architecto cumque dignissimos error repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias minus voluptas cum inventore maxime fugit ullam molestiae quidem excepturi corrupti. Cum animi delectus eos a dolorum voluptatem sed tempora quod!</p>
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
                    <h1>Enroll For Our Various Online Courses Anywhere From The World</h1>
                    <a href="#" class="hero-btn">CONTACT US</a>
                </section>

                <section class="footer">
                    <h2 class="text-4xl font-extrabold">About Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed minus libero nam quia laudantium facere, quos voluptatum, dolores, <br/>obcaecati molestiae consequatur eum saepe ipsum nihil mollitia doloribus vel amet provident!</p>
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