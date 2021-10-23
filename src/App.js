import { Switch, Route } from "react-router-dom";
import PageLayout from "./components/Layout/PageLayout";
import "./App.css";
import Home from "./pages/Home";
import Doctor from "./pages/Doctor";
import Ward from "./pages/Ward";
import Patient from "./pages/Patient";
import AddPatient from "./components/Patient/AddPatient";
import ViewPatients from "./components/Patient/ViewPatients";
import AddDoctor from "./components/Doctor/AddDoctor";
import ViewDoctors from "./components/Doctor/ViewDoctors";
import AddWardDetails from "./components/Ward/AddWardDetails";
import ViewWardDetail from "./components/Ward/ViewWardDetail";

function App() {
  return (
    <PageLayout>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/home' component={Home} exact />
        <Route path='/doctor' component={Doctor} exact />
        <Route path='/ward' component={Ward} exact />
        <Route path='/patient' component={Patient} exact />
        <Route path='/patient/add' component={AddPatient} exact />
        <Route path='/patient/view' component={ViewPatients} exact />
        <Route path='/doctor/add' component={AddDoctor} exact />
        <Route path='/doctor/view' component={ViewDoctors} exact />
        <Route path='/ward/add' component={AddWardDetails} exact />
        <Route path='/ward/view' component={ViewWardDetail} exact />
      </Switch>
    </PageLayout>
  );
}

export default App;
