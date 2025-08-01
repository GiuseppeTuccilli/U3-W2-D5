import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const Details2 = () => {
  const params = useParams();
  const [wheaterOggi, setWheaterOggi] = useState([]);
  const [wheaterAltri, setWheaterAltri] = useState([]);
  const [loading, setLoading] = useState(true);

  const today = new Date().toISOString().split("T")[0];
  const oggi = new Date();
  const domani = new Date(); // crea una copia
  const domani2 = new Date(); // crea una copia
  const domani3 = new Date(); // crea una copia
  const domani4 = new Date(); // crea una copia
  const domani5 = new Date(); // crea una copia

  domani.setDate(oggi.getDate() + 1);
  domani2.setDate(oggi.getDate() + 2);
  domani3.setDate(oggi.getDate() + 3);
  domani4.setDate(oggi.getDate() + 4);
  domani5.setDate(oggi.getDate() + 5);

  console.log(domani2.toISOString().slice(0, 10)); // oggetto Date per domani

  const getData = (city, country) => {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "," +
        country +
        "&appid=907082adf259a39f128ff2e434487c57&units=metric"
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("errore");
        }
      })
      .then((data) => {
        console.log(data);
        setLoading(false);
        setWheaterOggi(
          data.list.filter((dati) => dati.dt_txt.startsWith(today))
        );
        setWheaterAltri(
          data.list.filter((dati) => !dati.dt_txt.startsWith(today))
        );
      })
      .catch((er) => {
        setLoading(false);
        alert("errore nel recupero dati", er);
      });
  };

  console.log(params);

  useEffect(() => {
    getData(params.city, params.country);
  }, []);

  return (
    <>
      <Alert
        className="pb-0"
        variant="info d-flex flex-column justify-content-end"
        style={{ height: "10em" }}
      >
        <Alert.Heading className="text-center">
          Previsioni per {params.city.toUpperCase()}{" "}
        </Alert.Heading>
        <p className="text-center"></p>
      </Alert>
      {loading && (
        <div className="text-center">
          <Spinner variant="danger" />
        </div>
      )}
      <Table striped>
        <thead>
          <tr>
            <th>Ora</th>
            <th>Tempo</th>
            <th>Temperatura</th>
            <th>Precipitazioni</th>
          </tr>
        </thead>
        <tbody>
          {wheaterOggi.length > 0 &&
            wheaterOggi.map((dati) => {
              return (
                <tr key={dati.dt_txt}>
                  <td>{dati.dt_txt.split(" ")[1].slice(0, 5)}</td>
                  <td>
                    <img
                      src={
                        "https://openweathermap.org/img/wn/" +
                        dati.weather[0].icon +
                        ".png"
                      }
                    />
                  </td>
                  <td>{dati.main.temp} °C</td>
                  <td>{dati.pop}</td>
                </tr>
              );
            })}
          <tr>
            <td>
              <h3 className="mt-1 text-center">
                {domani.toISOString().slice(0, 10)}
              </h3>
            </td>
          </tr>
          <tr>
            <td className="fw-bold">Ora</td>
            <td className="fw-bold">Tempo</td>
            <td className="fw-bold">Temperatura</td>
            <td className="fw-bold">Precipitazioni</td>
          </tr>
          {wheaterAltri.length > 0 &&
            wheaterAltri.slice(0, 8).map((dati) => {
              return (
                <tr key={dati.dt_txt}>
                  <td>{dati.dt_txt.split(" ")[1].slice(0, 5)}</td>
                  <td>
                    <img
                      src={
                        "https://openweathermap.org/img/wn/" +
                        dati.weather[0].icon +
                        ".png"
                      }
                    />
                  </td>
                  <td>{dati.main.temp} °C</td>
                  <td>{dati.pop}</td>
                </tr>
              );
            })}
          <tr>
            <td>
              <h3 className="mt-1 text-center">
                {domani2.toISOString().slice(0, 10)}
              </h3>
            </td>
          </tr>
          <tr>
            <td className="fw-bold">Ora</td>
            <td className="fw-bold">Tempo</td>
            <td className="fw-bold">Temperatura</td>
            <td className="fw-bold">Precipitazioni</td>
          </tr>
          {wheaterAltri.length > 0 &&
            wheaterAltri.slice(9, 16).map((dati) => {
              return (
                <tr key={dati.dt_txt}>
                  <td>{dati.dt_txt.split(" ")[1].slice(0, 5)}</td>
                  <td>
                    <img
                      src={
                        "https://openweathermap.org/img/wn/" +
                        dati.weather[0].icon +
                        ".png"
                      }
                    />
                  </td>
                  <td>{dati.main.temp} °C</td>
                  <td>{dati.pop}</td>
                </tr>
              );
            })}
          <tr>
            <td>
              <h3 className="mt-1 text-center">
                {domani3.toISOString().slice(0, 10)}
              </h3>
            </td>
          </tr>
          <tr>
            <td className="fw-bold">Ora</td>
            <td className="fw-bold">Tempo</td>
            <td className="fw-bold">Temperatura</td>
            <td className="fw-bold">Precipitazioni</td>
          </tr>
          {wheaterAltri.length > 0 &&
            wheaterAltri.slice(17, 24).map((dati) => {
              return (
                <tr key={dati.dt_txt}>
                  <td>{dati.dt_txt.split(" ")[1].slice(0, 5)}</td>
                  <td>
                    <img
                      src={
                        "https://openweathermap.org/img/wn/" +
                        dati.weather[0].icon +
                        ".png"
                      }
                    />
                  </td>
                  <td>{dati.main.temp} °C</td>
                  <td>{dati.pop}</td>
                </tr>
              );
            })}
          <tr>
            <td>
              <h3 className="mt-1 text-center">
                {domani4.toISOString().slice(0, 10)}
              </h3>
            </td>
          </tr>
          <tr>
            <td className="fw-bold">Ora</td>
            <td className="fw-bold">Tempo</td>
            <td className="fw-bold">Temperatura</td>
            <td className="fw-bold">Precipitazioni</td>
          </tr>
          {wheaterAltri.length > 0 &&
            wheaterAltri.slice(25, 32).map((dati) => {
              return (
                <tr key={dati.dt_txt}>
                  <td>{dati.dt_txt.split(" ")[1].slice(0, 5)}</td>
                  <td>
                    <img
                      src={
                        "https://openweathermap.org/img/wn/" +
                        dati.weather[0].icon +
                        ".png"
                      }
                    />
                  </td>
                  <td>{dati.main.temp} °C</td>
                  <td>{dati.pop}</td>
                </tr>
              );
            })}
          <tr>
            <td>
              <h3 className="mt-1 text-center">
                {domani5.toISOString().slice(0, 10)}
              </h3>
            </td>
          </tr>
          <tr>
            <td className="fw-bold">Ora</td>
            <td className="fw-bold">Tempo</td>
            <td className="fw-bold">Temperatura</td>
            <td className="fw-bold">Precipitazioni</td>
          </tr>
          {wheaterAltri.length > 0 &&
            wheaterAltri.slice(32).map((dati) => {
              return (
                <tr key={dati.dt_txt}>
                  <td>{dati.dt_txt.split(" ")[1].slice(0, 5)}</td>
                  <td>
                    <img
                      src={
                        "https://openweathermap.org/img/wn/" +
                        dati.weather[0].icon +
                        ".png"
                      }
                    />
                  </td>
                  <td>{dati.main.temp} °C</td>
                  <td>{dati.pop}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default Details2;
