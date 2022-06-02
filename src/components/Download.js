import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const schwein1 =
  "https://auth-lecture.s3.eu-central-1.amazonaws.com/meerschwein1.jpg";
const schwein2 =
  "https://auth-lecture.s3.eu-central-1.amazonaws.com/meerschwein2.jpg";
const schwein3 =
  "https://auth-lecture.s3.eu-central-1.amazonaws.com/meerschwein3.jpg";

const Download = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const pigPics = [schwein1, schwein2, schwein3];

  return (
    <>
      {isAuthenticated ? (
        <div className="container">
          <div className="row">
            {pigPics.map((pig, index) => (
              <div className="col-4" key={index}>
                <img src={pig} alt={pig} className="img-fluid my-3" />
                <Link to={pig} target="_blank" download>
                  Download
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <h1>Hier kannst du Meerschweinchenbilder runterladen!!!</h1>
          <h2>Aber nur wenn du eingeloggt bist</h2>
        </>
      )}
    </>
  );
};

export default Download;
