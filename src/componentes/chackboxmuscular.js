import Form from 'react-bootstrap/Form';

function CheckExampli() {
    return (
    <Form>
      {['Caídas frecuentes', 'Dificultad para levantarse luego de estar acostado o sentado','Problemas para correr y saltar', 'Dolor y rigidez muscular', 'Intestino irritable.', 'Dolores de cabeza (incluyendo migrañas)', 'Depresión', 'Problemas de aprendizaje' ].map((type) => (
        <div key={`default-${type}`} >
          <Form.Check 
            type="checkbox"
            id={`default-${type}`}
            label={` ${type} `}
          />
        </div>
      ))}
    </Form>
  );
}
export  {CheckExampli};