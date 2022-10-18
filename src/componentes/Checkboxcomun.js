import Form from 'react-bootstrap/Form';

function CheckExamples() {
  
    return (
    <Form>
      {['fiebre* o sentirse afiebrado/con escalofríos', 'tos','Congestión o goteo nasal', 'Dolor de garganta', 'Piel seca', 'Hinchazón abdominal', 'Depresión', 'Cólicos abdominales o dolor', 'Sudoración','Dolor de cabeza','Vómito','Erupción en la piel hinchada que varía de color según el color de piel','Ampollas, quizás con exudado y costras' ,'Descamación de la piel (caspa)','Estornudos','Sangre en las heces','fatiga (cansancio)','Deshidratación','Somnolencia','Dolores musculares' ].map((type) => (
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


export  {CheckExamples};