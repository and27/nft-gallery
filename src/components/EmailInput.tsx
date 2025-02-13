const EmailInput = () => (
  <div className="relative flex gap-5 text-lg bg-white p-1 md:p-1.5 rounded-lg w-full md:w-auto mb-5 md:mb-0">
    <input
      id="contact-email"
      type="text"
      placeholder=""
      className="block p-3 text-black w-full text-base md:text-lg peer focus:outline-none focus:ring-0"
    />

    <label
      htmlFor="contact-email"
      className="absolute text-lg text-neutral-600 duration-300 ml-1transform -translate-y-2 scale-75 top-2 z-10 origin-[0] bg-white px-3 
      peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 
      peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
    >
      Enter your email
    </label>
    <button className="px-4 py-2 bg-violet-950 text-white rounded-md hover:bg-black shrink-0 ">
      Join now
    </button>
  </div>
);

export default EmailInput;
