import { Link } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import "../pages/contact.css"

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const comentar = async (data) => {
    const mensaje = `Nombre: ${data.nombre}\nEmail: ${data.email}\nTeléfono: ${data.telefono}\nComentarios: ${data.comentarios}`;

    console.log(mensaje);
  };
  
  return (
    <div>
      <h1 className="contact-title">Contactanos 👇</h1>
      <form className="formulario" onSubmit={handleSubmit(comentar)}>
        <div className="input-container">
          <TextField className="form-text"
            variant="outlined"
            label="Ingresá tu nombre"
            placeholder="Ingresá tu nombre"
            {...register("nombre")}
          />
        </div>
        <div className="input-container">
          <TextField className="form-text"
            variant="outlined"
            label="Ingresá tu email"
            placeholder="Ingresá tu email"
            {...register("email")}
          />
        </div>
        <div className="input-container">
          <TextField className="form-text"
            variant="outlined"
            label="Ingresá tu teléfono"
            placeholder="Ingresá tu teléfono"
            {...register("telefono")}
          />
        </div>
        <div className="input-container">
          <TextField className="form-text"
            variant="outlined"
            label="Comentarios"
            placeholder="Escribe tus comentarios aquí"
            multiline
            minRows={3}
            maxRows={5}
            {...register("comentarios")}
          />
        </div>
        <Button className="button" type="submit" variant="contained">
          Enviar Comentario
        </Button>
      </form>
      <Link to="/">Volver a Home</Link>
    </div>
  );
}

export default Contact;
