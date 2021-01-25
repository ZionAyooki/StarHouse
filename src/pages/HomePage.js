import React from "react";
import HeroHeading from "../components/headings/HeroHeading";
import SearchForm from "../components/forms/SearchForm";
import WhyUsSection from "../components/general/WhyUsSection";
import TestimonialsSection from "../components/general/TestimonialsSection";
import ServicesSection from "../components/general/ServicesSection";
import NewsletterSection from "../components/general/NewsletterSection";

class HomePage extends React.Component {
  render() {
    return (
      <main>
        <HeroHeading isLarge={true} title="Star House Real Estate" slogan="Let us help you find your next dream home" />
        <br /><br /><br /><br /><br />
        <SearchForm />
        <br /><br /><br /><br /><br />
        <WhyUsSection />
        <br /><br /><br /><br /><br />
        <ServicesSection />
        <br /><br /><br /><br /><br />
        <NewsletterSection />
        <br /><br /><br /><br /><br />
        <TestimonialsSection />
        <br /><br /><br /><br /><br />
      </main>
    );
  }
}

export default HomePage;