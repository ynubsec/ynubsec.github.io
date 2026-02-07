import './Dreams.css';

import bmw1 from '../medias/bmw1.jpg';
import bmw2 from '../medias/bmw2.jpg';
import bmw3 from '../medias/bmw3.jpg';
import bmw4 from '../medias/bmw4.jpg';
import bmw5 from '../medias/bmw5.jpg';
import bmw6 from '../medias/bmw6.jpg';
import bmwMain from '../medias/bmw.jpg';

function Dreams() {
    return (
        <div className="dreams-page">
            <section className="dreams-section" id="dreams">
                <div className="dreams-container">

                    {/* Header */}
                    <header className="dreams-header">
                        <h1>My Dreams & Goals</h1>
                        <p>
                            A clear roadmap toward mastery in programming, cybersecurity,
                            and professional penetration testing.
                        </p>
                    </header>

                    {/* Learning Roadmap */}
                    <div className="roadmap-section">
                        <h2 className="roadmap-title">
                            <i className="fa-solid fa-route"></i> My Learning Roadmap
                        </h2>
                        <p className="roadmap-description">
                            This is my structured path to becoming a world-class penetration tester
                            and red team specialist.
                        </p>

                        <div className="roadmap-timeline">

                            {/* Phase 1 */}
                            <div className="timeline-item">
                                <div className="timeline-marker">
                                    <span className="marker-number">1</span>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-badge phase-1">Phase 1</div>
                                    <h3>
                                        <i className="fa-solid fa-code"></i> Programming Foundations
                                    </h3>
                                    <p className="timeline-desc">
                                        Build a deep technical foundation with core programming languages.
                                    </p>

                                    <div className="skills-grid">
                                        <div className="skill-item cpp">
                                            <i className="fa-solid fa-c"></i>
                                            <div className="skill-info">
                                                <strong>C++</strong>
                                                <span>Low-level systems & memory management</span>
                                            </div>
                                        </div>
                                        <div className="skill-item python">
                                            <i className="fa-brands fa-python"></i>
                                            <div className="skill-info">
                                                <strong>Python</strong>
                                                <span>Automation, tooling & exploit development</span>
                                            </div>
                                        </div>
                                        <div className="skill-item golang">
                                            <i className="fa-solid fa-g"></i>
                                            <div className="skill-info">
                                                <strong>Go</strong>
                                                <span>Modern security tools & concurrency</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Phase 2 */}
                            <div className="timeline-item">
                                <div className="timeline-marker">
                                    <span className="marker-number">2</span>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-badge phase-2">Phase 2 • Parallel</div>
                                    <h3>
                                        <i className="fa-solid fa-bug"></i> Bug Hunting & Web Security
                                    </h3>
                                    <p className="timeline-desc">
                                        Apply knowledge in real-world environments by hunting vulnerabilities.
                                    </p>

                                    <div className="focus-areas">
                                        <div className="focus-item">
                                            <i className="fa-solid fa-globe"></i>
                                            <span>Web Application Security</span>
                                        </div>
                                        <div className="focus-item">
                                            <i className="fa-solid fa-database"></i>
                                            <span>SQLi & XSS</span>
                                        </div>
                                        <div className="focus-item">
                                            <i className="fa-solid fa-network-wired"></i>
                                            <span>API Security</span>
                                        </div>
                                        <div className="focus-item">
                                            <i className="fa-solid fa-shield-halved"></i>
                                            <span>OWASP Top 10</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Phase 3 */}
                            <div className="timeline-item">
                                <div className="timeline-marker">
                                    <span className="marker-number">3</span>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-badge phase-3">Phase 3</div>
                                    <h3>
                                        <i className="fa-solid fa-user-secret"></i> Professional Penetration Testing
                                    </h3>
                                    <p className="timeline-desc">
                                        Advanced exploitation, certifications, and red team operations.
                                    </p>

                                    <div className="cert-grid">
                                        <div className="cert-item">
                                            <i className="fa-solid fa-certificate"></i>
                                            <span>OSCP / CEH</span>
                                        </div>
                                        <div className="cert-item">
                                            <i className="fa-solid fa-terminal"></i>
                                            <span>Advanced Exploitation</span>
                                        </div>
                                        <div className="cert-item">
                                            <i className="fa-solid fa-server"></i>
                                            <span>Network Pentesting</span>
                                        </div>
                                        <div className="cert-item">
                                            <i className="fa-brands fa-linux"></i>
                                            <span>Linux Privilege Escalation</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Ultimate Goal */}
                            <div className="timeline-item ultimate-goal">
                                <div className="timeline-marker ultimate">
                                    <i className="fa-solid fa-trophy"></i>
                                </div>
                                <div className="timeline-content goal-content">
                                    <div className="timeline-badge ultimate-badge">Ultimate Goal</div>
                                    <h3>
                                        <i className="fa-solid fa-crown"></i> World-Class Pentester
                                    </h3>
                                    <p className="goal-description">
                                        Become a globally recognized penetration tester and red team expert,
                                        contributing to elite research, CTFs, and real-world security.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* BMW Dream Section */}
                    <div className="bmw-dream-section">
                        <h2>Dream Reward Collection</h2>
                        <p>A visual reminder of where discipline and consistency lead.</p>

                        <div className="bmw-gallery-container">
                            <div className="bmw-scroll-wrapper">
                                <div className="bmw-scroll-content">
                                    {[bmw1, bmw2, bmw3, bmw4, bmw5, bmw6, bmwMain,
                                      bmw1, bmw2, bmw3, bmw4, bmw5, bmw6, bmwMain
                                    ].map((img, i) => (
                                        <div className="bmw-gallery-item" key={i}>
                                            <img src={img} alt={`BMW ${i + 1}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quote */}
                    <div className="motivation-quote">
                        <i className="fa-solid fa-quote-left"></i>
                        <p>
                            The expert in anything was once a beginner.
                            Stay focused, work hard, and never stop learning.
                        </p>
                        <i className="fa-solid fa-quote-right"></i>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Dreams;
