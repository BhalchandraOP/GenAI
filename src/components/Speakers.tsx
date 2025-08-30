import React, { useState } from 'react';

const Speakers: React.FC = () => {
    const speakers = [
        { name: 'Dr. Evelyn Reed', bio: 'Pioneering researcher in Quantum Computing.', img: 'https://via.placeholder.com/150' },
        { name: 'Marcus Chen', bio: 'Lead architect of the popular "Nova" framework.', img: 'https://via.placeholder.com/150' },
        { name: 'Aria Sharma', bio: 'Ethical AI advocate and bestselling author.', img: 'https://via.placeholder.com/150' },
        { name: 'Leo Martinez', bio: 'Cloud infrastructure guru and open-source contributor.', img: 'https://via.placeholder.com/150' },
    ];

    const [searchQuery, setSearchQuery] = useState('');

    const filteredSpeakers = speakers.filter(speaker =>
        speaker.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section id="speakers">
            <div className="container">
                <h2 className="section-title">Featured Speakers</h2>
                <div className="row mb-4">
                    <div className="col-md-6 offset-md-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search for a speaker..."
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row text-center">
                    {filteredSpeakers.map((speaker, index) => (
                        <div className="col-md-3" key={index}>
                            <div className="speaker-card">
                                <img src={speaker.img} alt={speaker.name} className="mx-auto d-block" />
                                <h5>{speaker.name}</h5>
                                <p className="text-muted">{speaker.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Speakers;
