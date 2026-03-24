import './reviews.css';

const defaultAvatar = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

const Reviews = () => {
    const reviewsData = [
        {
            id: 1,
            name: "Sandeep K.C.",
            text: "Bishnu is an exceptional developer. His understanding of cybersecurity principles adds a unique layer of reliability to his frontend work.",
            stars: 5
        },
        {
            id: 2,
            name: "Anjali Shrestha",
            text: "Working with Bishnu was a breeze. He writes clean, efficient code and always delivers on time.",
            stars: 5
        },
        {
            id: 3,
            name: "Rohan Pradhan",
            text: "Impressed by his problem-solving skills. He turned complex requirements into a smooth UI.",
            stars: 5
        },
        {
            id: 4,
            name: "Nita Gurung",
            text: "Great character and work ethic. Bishnu pays attention to the tiny details that make a site stand out.",
            stars: 5
        },
        {
            id: 5,
            name: "Creative Studio",
            text: "A talented developer with a bright future. His portfolio feels modern, responsive, and secure.",
            stars: 5
        },
        {
            id: 6,
            name: "Ram Bahadur",
            text: "He is hardworking, dependable, and a strong team player who always gives his best effort.",
            stars: 5
        }
    ];

    return (
        <section className="reviews-section" id="reviews">
            <div className="reviews-container">
                <h2 className="reviews-title">What People Say</h2>
                <p className="reviews-subtitle">Feedback about my work and character.</p>
                <div className="reviews-grid">
                    {reviewsData.map((review) => (
                        <div className="review-card" key={review.id}>
                            <div className="review-header">
                                <img src={defaultAvatar} alt="Avatar" className="review-avatar" />
                                <div className="review-info">
                                    <h3 className="review-name">{review.name}</h3>
                                    <div className="review-stars">
                                        {[...Array(5)].map((_, i) => (
                                            <i key={i} className={`fa-solid fa-star${i < review.stars ? '' : ' fa-regular'}`} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="review-text">{review.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
