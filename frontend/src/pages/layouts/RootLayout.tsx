import { Outlet } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Spacer from "../../components/Spacer";
import BottomCTA from "../../components/BottomCTA";

const RootLayout = () => {
  return (
    <div className="bg-background-purple">
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <BottomCTA/>
      <Spacer size={4}/>
      <Footer />
      <Spacer size={4}/>
    </div>
  );
};

export default RootLayout;
