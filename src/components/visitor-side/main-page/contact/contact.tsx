import classes from "./contact.module.css";
import ContactForm from "./contactForm";

export default async function Contact() {
  return (
    <section className={classes.contact} id="contact">
      <div className="wrapper">
        <h2 className="sectionHeader">Оставить заявку или задать вопрос</h2>
        <div className={classes.content}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
