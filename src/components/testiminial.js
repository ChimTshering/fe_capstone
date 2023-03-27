import star from "../assets/star.png";
export const TestimonialCard = ({ testimonial }) => {
  const stars = [star, star, star, star, star];
  return (
    <div className = 'testimonial-card'>
      <div className = 'avatar-container'>
        <div className='avatar'>
          <img
            src={testimonial.photourl}
            alt={testimonial.user_name}
            height={65}
            width={65}
          />
        </div>
        <h4>{testimonial.user_name}</h4>
      </div>
      <div className='stars'>
        {stars.map((star, index) => {
          return (
            <div key={index}>
              <img src={star} alt="review rating" height={20} />
            </div>
          );
        })}
      </div>
      <p>{testimonial.review}</p>
    </div>
  );
};
