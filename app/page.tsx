import Navbar from "./components/Navbar/page";
import Web from "./components/Websites/page";
import "./style/style.css"


function Page() {
  return (
    <div className="hero">
      <div className="main-heading">
     <h1> Curriculum Vitae</h1>
    </div>
    <Navbar />
    <Web />
    </div>
  );
}
export default Page;
