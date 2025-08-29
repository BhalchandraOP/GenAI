import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="container">
                <p>&copy; 2025 Innovate & Inspire Conference. All Rights Reserved.</p>
                <div>
                    <a href="#" className="text-dark me-3">Twitter</a>
                    <a href="#" className="text-dark me-3">LinkedIn</a>
                    <a href="#" className="text-dark">Facebook</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
