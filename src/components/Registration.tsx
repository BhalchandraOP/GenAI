import React from 'react';

const Registration: React.FC = () => {
    return (
        <section id="register">
            <div className="container">
                <h2 className="section-title">Register for the Event</h2>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input type="email" className="form-control" id="email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="ticketType" className="form-label">Ticket Type</label>
                                <select className="form-select" id="ticketType">
                                    <option>General Admission - $99</option>
                                    <option>Student - $49</option>
                                    <option>VIP - $199</option>
                                </select>
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">Complete Registration</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Registration;
