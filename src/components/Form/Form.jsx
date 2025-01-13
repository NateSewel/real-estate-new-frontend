import { useState } from "react";
import { toast } from "react-toastify";

const Form = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "36a8e57c-83eb-4a0f-b36e-803a0fec2fd7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };
  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-orange-400 text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact us
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to make a move? Let's build your future together
      </p>

      {/* Form Tag */}
      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 "
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 "
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        {/* Text Area */}
        <div className="my-6 text-left">
          Your Message
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button className="button">{result ? result : "Send Message"}</button>
      </form>
    </div>
  );
};

export default Form;
