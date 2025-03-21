import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { styles } from "../styles/styles";
import { SecWrapper } from "./hoc/index";
import EarthCanvas from "./canvas/Earth";
import { slideIn } from "../utills/Motionn";

function Contact() {
  const formRef = useRef();
  const [form, SetForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    //YY9vQ44pWcBh48JGp
    //template_xbf1ygc
    //service_019pkrl
    emailjs
      .send(
        "service_jz2mr9l",
        "template_xbf1ygc",
        {
          from_name: form.name,
          to_name: "prageeth",
          from_email: form.email,
          to_email: "suchinthajayj",
          message: form.message,
        },
        "YY9vQ44pWcBh48JGp"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you!!! I will reply you");
          SetForm({ name: "", email: "", message: "" });
        },
        (err) => {
          setLoading(false);
          console.log(err);
          alert("Something went wrong");
        }
      );
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse  flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.5] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contacts.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="font-medium mb-4 ">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name? "
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium "
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium mb-4 ">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email? "
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium "
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium mb-4 ">Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say? "
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium "
            />
          </label>
          <button className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
            {loading ? "Sending" : "Send"}{" "}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] xl:h-auto md:h-[550px] h-[350px] min-w-[400px] min-h-[400px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
}

export default SecWrapper(Contact, "contact");
