import React from 'react';

const Schedule: React.FC = () => {
    const scheduleItems = [
        { time: '9:00 AM', title: 'Registration & Morning Coffee' },
        { time: '10:00 AM', title: 'Opening Keynote: The Future of Technology' },
        { time: '11:00 AM', title: 'Session 1: AI & Machine Learning Breakthroughs' },
        { time: '12:00 PM', title: 'Lunch Break' },
        { time: '1:00 PM', title: 'Session 2: The Rise of Sustainable Tech' },
        { time: '2:00 PM', title: 'Workshop: Building Your First React App' },
        { time: '3:00 PM', title: 'Networking Session' },
        { time: '4:00 PM', title: 'Closing Remarks' },
    ];

    return (
        <section id="schedule" className="bg-light">
            <div className="container">
                <h2 className="section-title">Event Schedule</h2>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        {scheduleItems.map((item, index) => (
                            <div className="schedule-item" key={index}>
                                <h5>{item.time}</h5>
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Schedule;
