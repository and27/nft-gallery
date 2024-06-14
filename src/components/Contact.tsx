import { bebasNeue } from "./Hero";

const Contact = () => {
  return (
    <section
      className="contact py-[8rem] bg-neutral-950 text-white px-4"
      id="contact"
    >
      <div className="max-w-[1280px] mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold w-[20rem] mb-[4rem] md:mb-[6rem] ${bebasNeue.className}`}
        >
          Contact us
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1">
            <p className="text-lg text-neutral-300">
              1600 Amphitheatre Parkway, Mountain View, CA, United States
            </p>
            <p className="text-lg text-neutral-300">+1 650-253-0000</p>
            <p className="text-lg text-neutral-300">
              <a href="mailto: ab@gmail.com">
                <span className="text-violet-500">ntf_gallery@gmail.com </span>
              </a>
            </p>
          </div>
          <form className="flex flex-col gap-5 text-black">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="border border-white rounded-md p-3"
            />

            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="border border-white rounded-md p-3"
            />

            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Message"
              className="border border-white rounded-md p-3"
            />
            <button className="px-4 py-2 border border-white text-white rounded-md px-5 text-black">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
