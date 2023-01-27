import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    couples_names: "",
    email: "",
    message: "",
    venue: "",
    budget: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        couples_names: "",
        email: "",
        message: "",
        venue: "",
        budget: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/[your-formspree-endpoint]",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <main className="flex flex-col items-center">
      <h2 className="text-terracota text-left font-sans font-thin uppercase">
        Contact Us
      </h2>
      <h2 className="text-xs text-left w-[500px] uppercase mb-8">
        PLEASE COMPLETE THE FORM BELOW OR EMAIL US DIRECTLY AT
        WOODFERNFLORALDESIGN@GMAIL.COM. WE CAN&apos;T WAIT TO HEAR FROM YOU!
      </h2>
      <form
        className="flex flex-col w-[500px] text-xs"
        onSubmit={handleOnSubmit}
      >
        <label className="" htmlFor="couples_name">
          Couple&apos;s Names *
        </label>
        <input
          id="name"
          type="name"
          className="bg-gray-100"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.couples_names}
        />
        <div className="date_container">
          <label htmlFor="date">Event Date *</label>
          <div className="flex">
            <div className="flex-col w-8 mr-2">
              <input
                id="date_month"
                type="date_month"
                className="bg-gray-100 w-8 mr-2"
                name="_replyto"
                onChange={handleOnChange}
                required
                value={inputs.date_month}
              />
              <label htmlFor="date_month">MM</label>
            </div>
            <div className="flex-col w-8 mr-2">
              <input
                id="date_day"
                type="date_day"
                className="bg-gray-100 w-8 mr-2"
                name="_replyto"
                onChange={handleOnChange}
                required
                value={inputs.date_day}
              />
              <label htmlFor="date_year">DD</label>
            </div>
            <div className="flex-col w-8">
              <input
                id="date_year"
                type="date_year"
                className="bg-gray-100 w-12"
                name="_replyto"
                onChange={handleOnChange}
                required
                value={inputs.date_year}
              />
              <label htmlFor="date_day">YYYY</label>
            </div>
          </div>
        </div>
        <label htmlFor="email">Email *</label>
        <input
          id="email"
          type="email"
          className="bg-gray-100"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />
        <label htmlFor="venue">Venue</label>
        <input
          id="venue"
          type="venue"
          className="bg-gray-100"
          name="_replyto"
          onChange={handleOnChange}
          value={inputs.venue}
        />
        <label htmlFor="budget">Estimated Budget</label>
        <select
          id="budget"
          type="budget"
          className="border-black"
          name="_replyto"
          onChange={handleOnChange}
          value={inputs.budget}
        >
          <option defaultValue="-$3500">Less than $3500</option>
          <option value="$3500-6000">$3500 - $6000</option>
          <option value="$6000-8500">$6000 - $8500</option>
          <option value="$8500+">+ $8500</option>
        </select>
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          className="bg-gray-100"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        <button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? "Submit"
              : "Submitted"
            : "Submitting..."}
        </button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </main>
  );
}
