import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileCard.css';
import profileImg from '../medias/image3.jpg';

const ProfileCard = ({ name, github, linkedin, role, bio }) => {
    return (
        <div className="profile-card-container">
            <div className="profile-orb orb-purple"></div>
            <div className="profile-orb orb-blue"></div>

            <div className="profile-glass-card">
                <div className="profile-card-content">
                    <div className="profile-avatar-wrapper">
                        <img src={profileImg} alt={name} className="profile-avatar" />
                    </div>
                    <div className="profile-header">
                        <h1 className="profile-card-name">
                            {name.split(' ').map((part, i) => (
                                <React.Fragment key={i}>
                                    {part}
                                    {i === 0 && <br />}
                                </React.Fragment>
                            ))}
                        </h1>
                        <p className="profile-role">{role || "Frontend Developer | Cybersecurity Researcher"}</p>
                    </div>

                    <p className="profile-bio">
                        {bio || "Crafting secure, responsive web experiences. Passionate about modern tech and ethical hacking."}
                    </p>



                    <div className="profile-card-socials">
                        {github && (
                            <a href={github} target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        )}
                        {linkedin && (
                            <a href={linkedin} target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        )}
                        <a href="mailto:gwbishnu10@gmail.com" aria-label="Email">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                        <a href="https://ynubsec.github.io" target="_blank" rel="noopener noreferrer" aria-label="Website">
                            <i className="fa-solid fa-globe"></i>
                        </a>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
