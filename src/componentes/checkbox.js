import Form from 'react-bootstrap/Form';

function CheckExample() {
  return (
    <Form>
      {['Sensación de nerviosismo o agitación', 'Sensación de peligro o panico','Sensación de debilidad o cansancio', 'Aumento del ritmo cardiaco', 'Respiracion acelerada', 'Sudoracion', 'Temblores', 'Insomnio','Falta de consentración', 'Estado de animo irritable', 'Falta de energia' , 'Exceso de sueño', 'Pensamientos de muerte o suicidio', 'Preocuparse por la forma del cuerpo y el peso constantemente', 'Usar laxantes, diuréticos o enemas después de comer cuando no son necesarios', 'Sentir una pérdida de control durante el atracón, como si no pudieras dejar de comer o no pudieras controlar lo que comes', 'Fatiga', 'Forzar el vómito o hacer demasiado ejercicio para no aumentar de peso después de un atracón','Ayunar, restringir las calorías o evitar ciertos alimentos entre atracones' ].map((type) => (
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
export  {CheckExample};