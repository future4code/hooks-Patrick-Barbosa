import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ShowProfile() {
  const [profile, setProfile] = useState({});

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/patrick-barbosa-hooks/person"
      )
      .then((res) => {
        console.log(res.data.profile);
        setProfile(res.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <img src={profile.photo} alt="foto" style={{ width: "300px" }} />
    </div>
  );
}
