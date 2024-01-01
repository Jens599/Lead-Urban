import { Outlet } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Spacer from "../../components/Spacer";

const RootLayout = () => {
  return (
    <div className="bg-background-purple">
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
      <Spacer size={4}/>
    </div>
  );
};

export default RootLayout;
