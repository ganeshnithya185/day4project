// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Component/Sidebar";
import Mainsidebar from "./Component/Mainsidebar";
import Labtest from "./Component/Labtest";
import Appointment from "./Component/Appointment";
import MedicineOrder from "./Component/MedicineOrder";
import Payment from "./Component/Payment";
import Setting from "./Component/Setting";
import MessageSetting from "./Component/MessageSetting";
import SearchOption from "./Component/SearchOption";
import CustomerName from "./Component/CustomerName";
import InvoiceId from "./Component/InvoiceId";
import StartDate from "./Component/StartDate";
import EndDate from "./Component/EndDate";
import Tables from "./Component/Tables";
import Helpnumber from "./Component/Helpnumber";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Sidebar />
            <div className="row mainsidebar">
              <Mainsidebar />
              <Labtest />
              <Appointment />
              <MedicineOrder />
              <MessageSetting />
              <Payment />
              <Setting />
            </div>
            <div className="row">
              <Helpnumber />
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              <SearchOption />
            </div>
            <div className="row p-2">
              <h4>Sales Information</h4>
            </div>
            <div className="row">
              <div className="col-3">
                <CustomerName />
              </div>
              <div className="col-3">
                <InvoiceId />
              </div>
              <div className="col-3">
                <StartDate />
              </div>
              <div className="col-3">
                <EndDate />
              </div>
            </div>
            <div className="row">
              <Tables />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
