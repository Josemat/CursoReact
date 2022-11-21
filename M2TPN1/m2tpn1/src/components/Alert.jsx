import Alert from 'react-bootstrap/Alert';

function Alerta({ variant = "success", text }) {
    return (
        <>
            <Alert variant={variant}>
                {text}
            </Alert>

        </>
    );
}

export default Alerta;