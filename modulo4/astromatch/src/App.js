import { useState } from "react";
import Match from "./Match";
import ShowProfile from "./ShowProfile";

export default function App() {
  const [changePage, setChangePage] = useState("match");

  const renderPage = () => {
    switch (changePage) {
      case "showprofile":
        return <ShowProfile />;
      case "match":
        return <Match />;
      default:
        return <ShowProfile />;
    }
  };

  const goToProfile = () => {
    setChangePage("showprofile");
  };
  const goToMatch = () => {
    setChangePage("match");
  };

  return (
    <div className="App">
      {renderPage()}
      <button onClick={goToProfile}>Profile</button>
      <button onClick={goToMatch}>Matches</button>
    </div>
  );
}
