import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Nav from "react-bootstrap/Nav";

const DetailsNew = () => {
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const [active, setActive] = useState("0");
  const [dati, setDati] = useState(null);
  let endpoint = "";

  const oggi = new Date();
  let dayToShow = new Date(oggi);
  let annoString = "";
  let mese = 0;
  let giorno = 0;

  let domani = new Date(oggi);
  domani.setDate(domani.getDate() + 1);

  let dueGg = new Date(oggi);
  dueGg.setDate(dueGg.getDate() + 2);

  let treGg = new Date(oggi);
  treGg.setDate(treGg.getDate() + 3);

  let quattroGg = new Date(oggi);
  quattroGg.setDate(quattroGg.getDate() + 4);

  console.log(treGg.toString().slice(4, 10));

  useEffect(() => {
    getData();
  }, [params, active]);

  const getData = () => {
    if (params.country === undefined) {
      endpoint =
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        params.city +
        "&appid=907082adf259a39f128ff2e434487c57&units=metric";
    } else {
      endpoint =
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        params.city +
        "," +
        params.country +
        "&appid=907082adf259a39f128ff2e434487c57&units=metric";
    }

    fetch(endpoint)
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

        dayToShow.setDate(dayToShow.getDate() + Number(active));
        console.log(dayToShow);
        annoString = dayToShow.getFullYear().toString();
        mese = dayToShow.getMonth() + 1;
        giorno = dayToShow.getDate();

        let meseString = "";
        let giornoString = "";
        if (mese < 10) {
          meseString = "0" + mese.toString();
        } else {
          meseString = mese.toString();
        }
        if (giorno < 10) {
          giornoString = "0" + giorno.toString();
        } else {
          giornoString = giorno.toString();
        }

        let dateString = annoString + "-" + meseString + "-" + giornoString;
        console.log(dateString);

        setDati(data.list.filter((d) => d.dt_txt.startsWith(dateString)));
      })
      .catch((er) => {
        setLoading(false);
        alert("errore nel recupero dati", er);
      });
  };
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
      <Container>
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={8}>
            <Nav justify variant="tabs" defaultActiveKey="0">
              <Nav.Item>
                <Nav.Link
                  eventKey="0"
                  onClick={() => {
                    setActive("0");
                  }}
                  className="fw-bold"
                >
                  Oggi
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="1"
                  onClick={() => {
                    setActive("1");
                  }}
                  className="fw-bold"
                >
                  {domani.toString().slice(4, 10)}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="2"
                  onClick={() => {
                    setActive("2");
                  }}
                  className="fw-bold"
                >
                  {dueGg.toString().slice(4, 10)}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="3"
                  onClick={() => {
                    setActive("3");
                  }}
                  className="fw-bold"
                >
                  {treGg.toString().slice(4, 10)}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="4"
                  onClick={() => {
                    setActive("4");
                  }}
                  className="fw-bold"
                >
                  {quattroGg.toString().slice(4, 10)}
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Table>
              <thead>
                <tr>
                  <th className="text-center">Ora</th>
                  <th className="text-center">Tempo</th>
                  <th className="text-center">Temperatura</th>
                  <th className="text-center">Precipitazioni</th>
                </tr>
              </thead>
              <tbody>
                {dati !== null &&
                  dati.map((d) => {
                    return (
                      <tr
                        key={d.dt_txt}
                        className="text-center border-top  border-black "
                      >
                        <td className="bg-secondary text-white p-0">
                          <p className="mt-3 mb-0">
                            {d.dt_txt.split(" ")[1].slice(0, 5)}
                          </p>
                        </td>
                        <td className="bg-secondary text-white p-0">
                          <img
                            src={
                              "https://openweathermap.org/img/wn/" +
                              d.weather[0].icon +
                              ".png"
                            }
                          />
                        </td>
                        <td className="bg-secondary text-white p-0">
                          <p className="mt-3 mb-0">{d.main.temp} °C</p>
                        </td>
                        <td className="bg-secondary text-white p-0">
                          <p className="mt-3 mb-0"> {d.pop} </p>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DetailsNew;
