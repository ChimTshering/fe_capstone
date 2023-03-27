import "./component_styles.css";
import heroPic from "../assets/cover.png";
import { card_data, testimonials } from "../constents";
import { Card } from "./menu-card";
import { TestimonialCard } from "./testiminial";
import user1 from "../assets/user1.png";
import user3 from "../assets/user3.png";
export const Main = () => {
  return (
    <>
      <section className="hero-section">
        <div>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>

          <h6>Welcome one and all to enjoy your taste.</h6>
          <h6>We offer all kinds of food with its delicacy since 1990.</h6>
          <h6>"Indulge in flavors from around the world!"</h6>
          <a href = '/booking'>
          <button className="yellow-button">Reserve a Table</button>
          </a>
        </div>
        <div className="hero-pic">
          <img src={heroPic} alt="home page" width={240} />
        </div>
      </section>
      <section className="highlights-section">
        <div className="heading">
          <h1>This week specials!</h1>
          <button className="yellow-button">Online Menu</button>
        </div>
        <div className="cards">
          {card_data.map((item) => {
            return (
              <div key={item.imgurl}>
                <Card data={item} />
              </div>
            );
          })}
        </div>
      </section>
      <section className="testimonial-sections">
        <h1>Testimonials</h1>
        <div className="cards">
          {testimonials.map((data) => {
            return (
              <div key={data.photourl}>
                <TestimonialCard testimonial={data} />
              </div>
            );
          })}
        </div>
      </section>
      <section className="about-sections">
        <div>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            Little Lemon is a restaurant that offers delicious online services.
            Their menu includes a variety of mouth-watering dishes, such as
            salads, sandwiches, pasta, and pizza, along with refreshing drinks
            and desserts. Customers can easily place their orders through their
            user-friendly website, and enjoy fast and efficient delivery. Little
            Lemon's online services ensure that customers can enjoy their
            favorite meals from the comfort of their own homes.
          </p>
        </div>
        <div>
          <div className="chiefs overlap">
            <img src={user3} alt="chief" height={240} />
          </div>
          <div className="chiefs">
            <img src={user1} alt="chief" height={240} />
          </div>
        </div>
      </section>
    </>
  );
};
