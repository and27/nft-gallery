const Contact = () => {
  return (
    <section className="contact py-[8rem] bg-neutral-950 text-white">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-4xl font-bold text-center w-[20rem] mx-auto mb-[7rem]">
          Contact us
        </h2>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <h3 className="text-2xl font-bold">Contact information</h3>
            <p className="text-lg text-neutral-400">
              1234 Street Name, City Name, United States
            </p>
            <p className="text-lg text-neutral-400">+123 456 7890</p>
            <p className="text-lg text-neutral-400">
              <a href="mailto: ab@gmail.com">
                <span className="text-blue-500">{/* continue */}</span>
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Contact us</h3>
            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Name"
                className="border border-white rounded-md p-3"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-white rounded-md p-3"
              />
              <textarea
                placeholder="Message"
                className="border border-white rounded-md p-3"
              ></textarea>
              <button className="px-4 py-2 border border-white text-white rounded-md px-5 text-black">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
