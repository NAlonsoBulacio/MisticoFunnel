import React from "react";
import Header from "../../components/Header/Header";
import Home from "../../components/Home/Home";
import Footer from "../../components/Footer/Footer";
import DescriptionAndPhotos from "../../components/DescriptionAndPhotos/DescriptionAndPhotos";
import ItemsContainer from "../../components/ItemsContainer/ItemsContainer";
import CalendlyFooter from "../../components/CalendlyFooter/CalendlyFooter";
import ComparisonContainer from "../../components/ComparisonContainer/ComparisonContainer";
import Flyer from "../../components/Flyer/Flyer";
import DescriptionPercentage from "../../components/DescrptionPercentage/DescriptionPercentage";
import ChatImages from "../../components/ChatImages/ChatImages";
import QuestionsAnswersHome from "../../components/QuestionsAnswersHome/QuestionsAnswersHome";
import OutfitCarousel from "../../components/OutfitCarousel/OutfitCarousel";
import img from "../../assets/img3.jpg";
import img2 from "../../assets/img4.jpg";
import img3 from "../../assets/img5.jpg";
import "./LandingPage.css"
const LandingPage = () => {
  const images = [img, img2, img3];
  return (
    <div>
      <Header />
      <div className="px-4 md:px-6 lg:px-10 xl:px-24 space-y-16 bg-gray-100 pb-12 pt-8 lg:pt-32">
        <Home />
        <DescriptionAndPhotos />
        <ItemsContainer />
        <ComparisonContainer />
        <div className="w-full flex justify-center items-center">
          <OutfitCarousel images={images} />
        </div>
      </div>
      <Flyer />
      <div className="px-4 md:px-6 lg-px-0 xl:px-24 bg-gray-100 py-12 space-y-6">
        <DescriptionPercentage />
        <ChatImages />
        <QuestionsAnswersHome landing={"landing"} />
      </div>
      <Footer />
      <CalendlyFooter />
    </div>
  );
};

export default LandingPage;
