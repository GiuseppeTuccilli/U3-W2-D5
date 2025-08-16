import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const CentralSection = () => {
  const [roma, setRoma] = useState({});
  const [newyork, setNewYork] = useState({});
  const [tokyo, setTokyo] = useState({});
  const [london, setLondon] = useState({});
  const [paris, setParis] = useState({});

  const navigate = useNavigate();

  const getRoma = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Roma,it&appid=907082adf259a39f128ff2e434487c57&units=metric"
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
        setRoma(data);
      })
      .catch((er) => {
        alert("errore nel recupero dati meteo attuale", er);
      });
  };
  const getLondon = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=907082adf259a39f128ff2e434487c57&units=metric"
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
        setLondon(data);
      })
      .catch((er) => {
        alert("errore nel recupero dati meteo attuale", er);
      });
  };

  const getNewYork = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=907082adf259a39f128ff2e434487c57&units=metric"
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
        setNewYork(data);
      })
      .catch((er) => {
        alert("errore nel recupero dati meteo attuale", er);
      });
  };
  const getTokyo = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=907082adf259a39f128ff2e434487c57&units=metric"
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
        setTokyo(data);
      })
      .catch((er) => {
        alert("errore nel recupero dati meteo attuale", er);
      });
  };
  const getParis = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=907082adf259a39f128ff2e434487c57&units=metric"
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
        setParis(data);
      })
      .catch((er) => {
        alert("errore nel recupero dati meteo attuale", er);
      });
  };

  useEffect(() => {
    getRoma();
    getLondon();
    getNewYork();
    getTokyo();
    getParis();
  }, []);

  return (
    <Row className="justify-content-center my-3 g-2">
      <Col xs={6} md={4}>
        <Card className="bg-secondary text-white ">
          <Card.Img
            style={{ height: "10em", objectFit: "cover" }}
            variant="top"
            src="https://www.fulltravel.it/wp-content/uploads/2019/11/Cosa-vedere-a-Roma.jpg"
          />
          <Card.Body>
            {roma.main && (
              <>
                <Card.Title>
                  Roma{" "}
                  <img
                    src={
                      "https://openweathermap.org/img/wn/" +
                      roma.weather[0].icon +
                      ".png"
                    }
                  />
                </Card.Title>

                <Card.Text>Temperarura: {roma.main.temp}°C </Card.Text>
                <Card.Text>Percepita: {roma.main.feels_like} °C </Card.Text>
                <Card.Text>Velocità vento: {roma.wind.speed} </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    navigate("/" + roma.name + "/" + roma.sys.country);
                  }}
                >
                  Dettagli
                </Button>
              </>
            )}
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} md={4}>
        <Card className="bg-secondary text-white ">
          <Card.Img
            style={{ height: "10em", objectFit: "cover" }}
            variant="top"
            src="https://www.travelguide.uno/media/new-york.jpeg"
          />
          <Card.Body>
            {newyork.main && (
              <>
                <Card.Title>
                  New York{" "}
                  <img
                    src={
                      "https://openweathermap.org/img/wn/" +
                      newyork.weather[0].icon +
                      ".png"
                    }
                  />
                </Card.Title>

                <Card.Text>Temperarura: {newyork.main.temp}°C </Card.Text>
                <Card.Text>Percepita: {newyork.main.feels_like} °C </Card.Text>
                <Card.Text>Velocità vento: {newyork.wind.speed} </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    navigate("/" + newyork.name + "/" + newyork.sys.country);
                  }}
                >
                  Dettagli
                </Button>
              </>
            )}
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} md={4}>
        <Card className="bg-secondary text-white ">
          <Card.Img
            style={{ height: "10em", objectFit: "cover" }}
            variant="top"
            src="https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/topic-london-gettyimages-760251843-feature?_a=BAVAZGDX0"
          />
          <Card.Body>
            {london.main && (
              <>
                <Card.Title>
                  London{" "}
                  <img
                    src={
                      "https://openweathermap.org/img/wn/" +
                      london.weather[0].icon +
                      ".png"
                    }
                  />
                </Card.Title>

                <Card.Text>Temperarura: {london.main.temp}°C </Card.Text>
                <Card.Text>Percepita: {london.main.feels_like} °C </Card.Text>
                <Card.Text>Velocità vento: {london.wind.speed} </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    navigate("/" + london.name + "/" + london.sys.country);
                  }}
                >
                  Dettagli
                </Button>
              </>
            )}
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} md={4}>
        <Card className="bg-secondary text-white ">
          <Card.Img
            style={{ height: "10em", objectFit: "cover" }}
            variant="top"
            src="https://digital.ihg.com/is/image/ihg/exp-des-Tokyo-972x340-3?ts=1695682130526&dpr=off"
          />
          <Card.Body>
            {tokyo.main && (
              <>
                <Card.Title>
                  Tokyo{" "}
                  <img
                    src={
                      "https://openweathermap.org/img/wn/" +
                      tokyo.weather[0].icon +
                      ".png"
                    }
                  />
                </Card.Title>

                <Card.Text>Temperarura: {tokyo.main.temp}°C </Card.Text>
                <Card.Text>Percepita: {tokyo.main.feels_like} °C </Card.Text>
                <Card.Text>Velocità vento: {tokyo.wind.speed} </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    navigate("/" + tokyo.name + "/" + tokyo.sys.country);
                  }}
                >
                  Dettagli
                </Button>
              </>
            )}
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} md={4}>
        <Card className="bg-secondary text-white ">
          <Card.Img
            style={{ height: "10em", objectFit: "cover" }}
            variant="top"
            src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/474000/474240-Left-Bank-Paris.jpg"
          />
          <Card.Body>
            {paris.main && (
              <>
                <Card.Title>
                  Paris{" "}
                  <img
                    src={
                      "https://openweathermap.org/img/wn/" +
                      paris.weather[0].icon +
                      ".png"
                    }
                  />
                </Card.Title>

                <Card.Text>Temperarura: {paris.main.temp}°C </Card.Text>
                <Card.Text>Percepita: {paris.main.feels_like} °C </Card.Text>
                <Card.Text>Velocità vento: {paris.wind.speed} </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    navigate("/" + paris.name + "/" + paris.sys.country);
                  }}
                >
                  Dettagli
                </Button>
              </>
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
export default CentralSection;
