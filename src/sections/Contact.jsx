import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaBriefcase,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";


function Contact() {


  const [status, setStatus] = useState("idle");


  const sendEmail = (e) => {

    e.preventDefault();

    setStatus("sending");


    emailjs
      .sendForm(
        "service_mkjrjyp",
        "template_li5zdeq",
        e.target,
        {
          publicKey: "_WgZhn1NzggSPGWvl",
        }
      )

      .then(() => {

        setStatus("success");

        e.target.reset();


        setTimeout(() => {
          setStatus("idle");
        }, 5000);

      })


      .catch((error) => {

        console.log(error);

        setStatus("error");


        setTimeout(() => {
          setStatus("idle");
        }, 5000);

      });

  };



  const contactCards = [

    {
      icon: FaEnvelope,
      label: "Email",
      value: "devika1909jangid19@gmail.com",
      href: "mailto:devika1909jangid19@gmail.com",
    },


    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Rajasthan, India",
      href: null,
    },

  ];



  return (

    <section
      id="contact"
      className="relative bg-slate-950 text-white py-24 px-6 overflow-hidden"
    >


      {/* Background Grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #22d3ee 1px, transparent 1px), linear-gradient(to bottom, #22d3ee 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />


      {/* Glow */}

      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />




      <div className="relative max-w-6xl mx-auto">



        {/* Heading */}

        <div className="text-center mb-16">


          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">

            Let's{" "}

            <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">

              Connect

            </span>

          </h2>



          <p className="text-slate-400 mt-4 max-w-xl mx-auto">

            Open to full-time developer roles and exciting opportunities.
            Feel free to reach out.

          </p>


        </div>





        <div className="grid md:grid-cols-2 gap-8 items-start">



          {/* LEFT SIDE */}


          <div className="space-y-4">



            {/* Availability Card */}


            <div className="rounded-2xl p-6 bg-slate-900/60 backdrop-blur-xl border border-cyan-400/20">


              <div className="flex items-center gap-3">


                <span className="relative flex h-3 w-3">


                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />


                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />


                </span>



                <div>


                  <h3 className="font-semibold text-sm">

                    Available for Full-Time Developer Roles

                  </h3>



                  <p className="text-slate-400 text-xs mt-1 flex items-center gap-2">

                    <FaBriefcase className="text-cyan-400" />

                    Open to remote opportunities

                  </p>


                </div>


              </div>


            </div>





            {/* Contact Cards */}


            {
              contactCards.map(({ icon: Icon, label, value, href }) => {


                const Card = (

                  <div className="group rounded-2xl p-5 bg-slate-900/60 backdrop-blur-xl border border-slate-800 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1 flex items-center gap-4">


                    <div className="w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">

                      <Icon className="text-cyan-400 text-lg" />

                    </div>



                    <div>

                      <p className="text-xs uppercase text-slate-500">

                        {label}

                      </p>



                      <p className="text-sm text-slate-200">

                        {value}

                      </p>


                    </div>


                  </div>

                );



                return href ? (

                  <a key={label} href={href}>

                    {Card}

                  </a>

                ) : (

                  <div key={label}>

                    {Card}

                  </div>

                );


              })

            }
           

            <div className="rounded-2xl p-5 bg-slate-900/60 backdrop-blur-xl border border-slate-800">


              <p className="text-xs uppercase text-slate-500 mb-3">

                Find me elsewhere

              </p>



              <div className="flex gap-4">


                <a
                  href="https://github.com/jangiddevika19"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition"
                >

                  <FaGithub className="text-lg" />

                </a>




                <a
                  href="https://linkedin.com/in/devika-jangid"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition"
                >

                  <FaLinkedin className="text-lg" />

                </a>


              </div>


            </div>



          </div>






          {/* RIGHT SIDE FORM */}


          <form
            onSubmit={sendEmail}
            className="rounded-2xl p-8 bg-slate-900/60 backdrop-blur-xl border border-slate-800 shadow-2xl space-y-5"
          >


            <div className="flex items-center justify-between mb-2">


              <p className="font-mono text-xs text-slate-500">

                <span className="text-cyan-400">
                  &gt;_
                </span>{" "}
                send_message()

              </p>



              <div className="flex gap-1.5">

                <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>

                <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>

                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400/60"></span>

              </div>


            </div>




            <input
              type="text"
              name="from_name"
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 outline-none text-sm placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition"
            />




            <input
              type="email"
              name="from_email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 outline-none text-sm placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition"
            />




            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 outline-none text-sm placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition"
            />





            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 outline-none text-sm placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition resize-none"
            ></textarea>





            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-slate-950 font-semibold py-3.5 rounded-xl transition disabled:opacity-60"
            >


              {
                status === "sending" ? (

                  <>
                    <span className="h-4 w-4 rounded-full border-2 border-slate-950/30 border-t-slate-950 animate-spin"></span>
                    Sending...
                  </>

                ) : (

                  <>
                    <FaPaperPlane />
                    Send Message
                  </>

                )
              }


            </button>





            {
              status === "success" && (

                <p className="flex justify-center items-center gap-2 text-emerald-400 text-sm">

                  <FaCheckCircle />

                  Message sent successfully — I'll get back soon.

                </p>

              )
            }





            {
              status === "error" && (

                <p className="flex justify-center items-center gap-2 text-red-400 text-sm">

                  <FaExclamationTriangle />

                  Something went wrong. Please try again.

                </p>

              )
            }



          </form>



        </div>



      </div>



    </section>

  );

}



export default Contact;