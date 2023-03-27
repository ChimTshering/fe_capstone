import logo from '../assets/minilogo.png'
export const Header = () => {
  return (
    <head>
      <meta name="description" content="little lemon restaurant app" />
      <meta name="og:title" content=" Little Lemon" />
      <meta name="og:description" content=" online restaurant booking app" />
      <meta name="og:image" content={`${logo}`} />
    </head>
  );
};
