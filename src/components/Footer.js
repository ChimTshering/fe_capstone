import logo from "../assets/minilogo.png";
export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <section className='footer-logo'>
          <img src={logo} alt="logo" height={60} />
        </section>
        <section>
          <h5>Doormat Navigation</h5>
          <ul>
              <li>Home</li>
              <li>About</li>
              <li> Menu</li>
              <li>Reservations</li>
              <li>Order Online</li>
              <li>Login</li>
          </ul>
        </section>
        <section>
          <h4>Contacts</h4>
          <ul>
            <li>Chicago</li>
            <li>+43 45342</li>
            <li>littlelemon@gmail.com</li>
          </ul>
        </section>
        <section>
          <h4>Social Media Links</h4>
          <ul>
            <li>www.meta.com?user=littlelemon</li>
            <li>www.instagram.com?user=littlelemon</li>
          </ul>
        </section>
      </footer>
    </>
  );
};
