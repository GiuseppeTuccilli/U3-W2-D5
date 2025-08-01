import Alert from "react-bootstrap/Alert";
const Welcome = () => {
  return (
    <Alert
      className="pb-0"
      variant="info d-flex flex-column justify-content-end"
      style={{ height: "10em" }}
    >
      <Alert.Heading className="text-center">METEO ATTUALE</Alert.Heading>
      <p className="text-center">
        Clicca su <span className="fw-bold">Dettagli</span> per maggiori
        informazioni
      </p>
    </Alert>
  );
};
export default Welcome;
