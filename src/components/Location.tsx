import React from 'react';

const Location: React.FC = () => {
    return (
        <section id="location" className="bg-light">
            <div className="container">
                <h2 className="section-title">Location</h2>
                <div className="row">
                    <div className="col-md-8 offset-md-2 text-center">
                        <h5>The Grand Tech Auditorium</h5>
                        <p>123 Innovation Drive, Tech City, 12345</p>
                        <div className="map-container mt-4">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086418243435!2d-122.419415584681!3d37.77492957975817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d6c93a65%3A0x49d38f2c9a357a4!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1616000000000"
                                allowFullScreen={true}
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Location;
