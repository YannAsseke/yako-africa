import { useFormik } from 'formik';
import axios from 'axios';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from 'yup';
import ErrorMsg from '../common/ErrorMsg';

const MySwal = withReactContent(Swal);

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const schema = Yup.object().shape({
  name: Yup.string().required("Nom & Prénoms est obligatoire"),
  number: Yup.string().required("Numéro de téléphone est obligatoire").matches(phoneRegExp, 'Numero de téléphone est invalide').min(8, "Au moins 8 chiffres"),
  email: Yup.string().email("Email invalide"),
  prestation: Yup.string().required("Objet est obligatoire"),
  message: Yup.string().required("Message est obligatoire")
});

const ContactArea = () => {
  const alertContent = () => {
    MySwal.fire({
      title: "Success!",
      text: "Vos informations ont été bien enregistrées! Vous serez recontacté.",
      icon: "success",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
      email: "",
      prestation: "",
      message: "",
    },

    // Pass the Yup schema to validate the form
    validationSchema: schema,

    // Handle form submission
    onSubmit: async ({ name, number, email, prestation, message }) => {
      const data = {
        Name:name,
        Number:number,
        Email:email,
        Prestation:prestation,
        Message:message,
      }
  
      axios.post("/api/submit", data).then((response)=>{
        console.log(response);
        formik.resetForm();
        alertContent();
      }).catch((err) =>console.log(err))
      console.log(data);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;


  return (
    <>
      <section className="contact__area pt-115 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-xl-7 col-lg-6">
              <div className="contact__wrapper">
                <div className="section__title-wrapper mb-40">
                  <h2 className="tp-title" style={{ color:"#2b6338" }}>Nous contactez</h2>
                  <p>Vous avez une question ou vous souhaitez simplement nous saluer ? Nous serions ravis de vous entendre.</p>
                </div>
                <div className="contact__form">

                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <div className="contact__form-input">
                          <input id='name' value={values.name} onChange={handleChange} type="text" placeholder="Nom & Prénoms" />
                          {touched.name && <ErrorMsg error={errors.name} />}
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <div className="contact__form-input">
                          <input id='number' value={values.number} onChange={handleChange} type="text" placeholder="Numero de téléphone" />
                          {touched.number && <ErrorMsg error={errors.number} />}
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <div className="contact__form-input">
                          <input id='email' value={values.email} onChange={handleChange} type="email" placeholder="Email" />
                          {touched.email && <ErrorMsg error={errors.email} />}
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <div className="contact__form-input">
                          <input id='prestation' value={values.prestation} onChange={handleChange} type="text" placeholder="Objet" />
                          {touched.prestation && <ErrorMsg error={errors.prestation} />}
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__form-input">
                          <textarea id='message' value={values.message} onChange={handleChange} placeholder="Message"></textarea>
                          {touched.message && <ErrorMsg error={errors.message} />}
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__btn">
                          <button type='submit' className="tp-solid-btn" style={{ backgroundColor:"#f9b233", color:"#fff", fontSize:"15px"}}>Envoyer</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;

