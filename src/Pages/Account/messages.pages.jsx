import Footer from "../../Components/Footer/footer.component";
import MessagingPane from "../../Components/Messages/message-recipient.component";

import { Link } from "react-router-dom";
import { ReactComponent as IconPack1 } from "./../../Assets/icons/Icons-20.svg";
import { ReactComponent as IconPack2 } from "./../../Assets/icons/Icons-22.svg";
import { ReactComponent as IconPack3 } from "./../../Assets/icons/Icons-21.svg";
import Nav from "../../Components/NavBar/nav.component";
import HeaderCompany from "../../Components/header/headercompany";
function MessageList(props) {
  props.setShowNavBar(true);

  let messages = [{}, {}, {}, {}, {}, {}];
  return (
    <>
           <Nav />
      <HeaderCompany title={"Welcome,"} subtitle={"CompanyName"} amount={"25.0"} />

      <Footer></Footer>
    </>
  );
}

export default MessageList;
