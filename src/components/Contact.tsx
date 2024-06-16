"use client";

import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { bebasNeue } from "./Hero";

const formRules = {
  email: {
    required: "Email is required",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: "Invalid email",
    },
  },

  message: {
    required: "Message is required",
    minLength: {
      value: 10,
      message: "Message must be at least 10 characters",
    },
  },
};

const Contact = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const onError = (errors: any) => {
    console.log(errors);
  };

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
          <form
            className="flex flex-col gap-5 text-black"
            onSubmit={handleSubmit(onSubmit, onError)}
          >
            <div className="flex flex-col relative text-lg bg-white p-1 md:p-1.5 rounded-lg w-full md:w-auto mb-5 md:mb-0">
              <Controller
                control={control}
                name="email"
                rules={formRules.email}
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    id="email"
                    className="block p-3 text-black w-full text-base md:text-lg peer focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                )}
              />
              <label
                htmlFor="email"
                className="absolute text-lg text-neutral-600 duration-300 ml-1transform -translate-y-2 scale-75 top-2 z-10 origin-[0] bg-white px-3 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 
                peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Email
              </label>
              <ErrorMessage
                errors={errors}
                name="email"
                as="p"
                className="text-pink-700 absolute right-4 top-0 text-sm"
              />
            </div>

            <div className="flex flex-col relative text-lg bg-white p-1 md:p-1.5 rounded-lg w-full md:w-auto mb-5 md:mb-0">
              <Controller
                control={control}
                name="name"
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    id="name"
                    className="block p-3 text-black w-full text-base md:text-lg peer focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                )}
              />
              <label
                htmlFor="name"
                className="absolute text-lg text-neutral-600 duration-300 ml-1transform -translate-y-2 scale-75 top-2 z-10 origin-[0] bg-white px-3 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 
                peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Name (optional)
              </label>
            </div>

            <div className="flex flex-col relative text-lg bg-white p-1 md:p-1.5 rounded-lg w-full md:w-auto mb-5 md:mb-0">
              <Controller
                control={control}
                name="message"
                rules={formRules.message}
                render={({ field }) => (
                  <textarea
                    {...field}
                    id="message"
                    className="block p-3 text-black w-full text-base md:text-lg peer focus:outline-none focus:ring-0"
                    placeholder=""
                  />
                )}
              />
              <label
                htmlFor="message"
                className="absolute text-lg text-neutral-600 duration-300 ml-1transform -translate-y-2 scale-75 top-2 z-10 origin-[0] bg-white px-3 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 
                peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Message
              </label>
              <ErrorMessage
                errors={errors}
                name="message"
                as="p"
                className="text-pink-700 absolute right-4 top-0 text-sm"
              />
            </div>

            <button
              type="submit"
              className="px-4 py-2 border border-white text-white rounded-md px-5 text-black text-lg hover:bg-white hover:text-black"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
