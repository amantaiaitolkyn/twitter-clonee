
import Header from "./components/header";
import {Outlet} from "react-router-dom";
import Footer from "./components/footer";
function App() {
  return (
      <div>
        <div className="sync">
          <Header />
          <Outlet/>
            <Footer />
        </div>
      </div>
  );
}

export default App;
