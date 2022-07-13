import TopNavbar from "../../components/TopNavBar/TopNavbar.jsx";
import HeroSection from "./Hero_Section/HeroSection.jsx";
import ImpressYourPeers from "./Impress_your_peers_section/ImpressYourPeers.jsx";
import LPFeatures from "./Features_Section/LPFeatures.jsx";
import CreateAndShare from "./Create_And_Share/CreateAndShare.jsx";
import ManageContact from "./Manage_Contact/ManageContact.jsx";
import "./LandingPage.css";

import { useNavigate } from "react-router-dom";
//The useNavigate hook returns a function that lets you navigate programmatically.

const LandingPage = () => {
  const navigate = useNavigate();

  const HandleClickOrdCard = () => {
    navigate("./order-card");
  };

  return (
    <div id="body">
      <TopNavbar />
    <></>
      <HeroSection HandleClickOrdCard={HandleClickOrdCard} />
      <LPFeatures HandleClickOrdCard={HandleClickOrdCard} />
      <CreateAndShare HandleClickOrdCard={HandleClickOrdCard} />
      <ManageContact HandleClickOrdCard={HandleClickOrdCard} />
      <ImpressYourPeers HandleClickOrdCard={HandleClickOrdCard} />
    </div>
  );
};

export default LandingPage;
