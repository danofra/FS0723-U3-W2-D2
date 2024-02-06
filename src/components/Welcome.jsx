import { Alert } from "react-bootstrap";

const Welcome = () => (
  <Alert variant="primary" className="m-2 text-center">
    <Alert.Heading>
      Hey tu, se sei arrivato fin qui, vuol dire che vuoi conoscere la storia
      del tuo paese!
    </Alert.Heading>
    <p>
      Una vasta gamma di libri storici e di storie che ti permetteranno di
      capire meglio la tua cultura e i tuoi tradizionali.
    </p>
    <hr />
    <p>
      <a href="#allbook">Premi e scoprirai....</a>
    </p>
  </Alert>
);

export default Welcome;
