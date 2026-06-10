"use client";
import React, { useState } from "react";
import { inputStyles, textAreaStyles } from "./form-styles";
import Background from "../background/background";

export default function CateringForm() {
  const [status, setStatus] = useState<string>("");

  const endpoint = "https://formspree.io/f/xpqkelrr";

  const sanitize = (str: string) => {
    return str.replace(/<[^>]*>?/gm, "").trim();
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // 1. Generate the Timestamp
    const timestamp = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(new Date());

    // 2. Sanitize and structure the data
    const sanitizedData = {
      name: sanitize(formData.get("name") as string),
      email: sanitize(formData.get("email") as string),
      phone: sanitize(formData.get("phone") as string),
      message: sanitize(formData.get("message") as string),
      _timestamp: timestamp, // Hidden field for Formspree subject lines
      subject: `Catering request from ${sanitize(formData.get("name") as string)} - ${timestamp}`,
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(sanitizedData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
      console.error("Error:", error);
    }
  };

  return (
      <div className="relative w-full p-4 mb-4 rounded-xl z-10">
        <Background
          className="rounded-xl shadow-lg 
                            bg-white dark:bg-black 
                            border border-gray-100 dark:border-gray-800"
        />

        <p className="text-xs sm:text-sm mb-6 text-gray-700 dark:text-gray-300 transition-colors duration-(--duration-animate)">
          Have a custom request? Let&apos;s discuss further!
        </p>
        <form onSubmit={handleSubmit} className="text-left space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-(--duration-animate) mb-.5">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className={inputStyles}
              placeholder="Jane Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-(--duration-animate) mb-.5">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className={inputStyles}
              placeholder="jane@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-(--duration-animate) mb-.5">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              className={inputStyles}
              placeholder="(555) 000-0000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-(--duration-animate) mb-.5">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className={textAreaStyles}
              placeholder="How can we help?"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-md font-bold text-white transition-all duration-(--duration-animate)
                     bg-blue-600 hover:bg-blue-700 
                     dark:bg-blue-500 dark:hover:bg-blue-600
                     active:scale-[0.98]"
          >
            Send Message
          </button>

          {status === "SUCCESS" && (
            <div
              className="p-3 rounded bg-green-100 dark:bg-green-900/30 
                          text-green-700 dark:text-green-400 text-center text-sm 
                          transition-opacity transition-colors duration-(--duration-animate)"
            >
              Thanks! Your message has been sent.
            </div>
          )}
          {status === "ERROR" && (
            <div
              className="p-3 rounded bg-red-100 dark:bg-red-900/30 
                          text-red-700 dark:text-red-400 text-center text-sm 
                          transition-opacity transition-colors duration-(--duration-animate)"
            >
              Oops! There was a problem submitting your form.
            </div>
          )}
        </form>
      </div>
  );
}
