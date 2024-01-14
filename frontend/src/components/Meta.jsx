import { Helmet } from "react-helmet-async";

const Meta = ({ title, discription, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="discription" content={discription} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to Connor's Shop",
  description: "We Sell Things Connor Likes",
  keywords: "games, electronics, stuff,",
};
export default Meta;
