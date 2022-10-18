import Form from 'react-bootstrap/Form';

function ListaDesplegable() {
  return (
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">Ronaldo Nazario</option>
      <option value="2">Lionel Messi</option>
      <option value="3">Andrea Pirlo</option>
      <option value="4">Andres Escobar</option>
      <option value="5">Zlatan Ibrahimovic</option>
      <option value="6">Franco Armani</option>
    </Form.Select>
  );
}



export { ListaDesplegable };