import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// ⬇️ Replace these with your actual EmailJS keys
const SERVICE_ID = "service_x8ib7ih";
const TEMPLATE_ID = "template_9wxych8";
const PUBLIC_KEY = "TfqP-xMjLmfHi0YvD";

const FeedbackForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name: email,                        // goes into {{name}}
      time: new Date().toLocaleString(),  // goes into {{time}}
      message: feedback                   // goes into {{message}}
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        alert("Feedback emailed successfully!");
        setEmail("");
        setFeedback("");
        setLoading(false);
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        alert("Failed to send feedback. Try again later.");
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen text-white flex items-center justify-center p-4">
      <section className="w-full max-w-2xl">
        <h2 className="text-4xl md:text-5xl mb-12 font-light">
          Send your <span className="font-bold">Feedback.</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-10">

          {/* Email Input */}
          <div className="group">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#eeeeee] mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#5050501A] border border-white/15 rounded-lg px-4 py-4 text-[#eeeeee] focus:outline-none focus:border-white focus:ring-1 transition-all duration-500 placeholder-[#787878]"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Feedback Input */}
          <div className="group">
            <label
              htmlFor="feedback"
              className="block text-sm font-medium text-[#eeeeee] mb-2"
            >
              Feedback
            </label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={6}
              className="w-full bg-[#5050501A] border border-white/15 rounded-lg px-4 py-4 text-[#eeeeee] focus:outline-none focus:border-white focus:ring-1 transition-all duration-500 placeholder-[#787878] resize-none"
              placeholder="Your thoughts..."
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="bg-white text-black px-8 py-3 rounded-lg font-medium text-sm hover:bg-gray-200 transition-transform active:scale-95 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>

        </form>
      </section>
    </div>
  );
};

export default FeedbackForm;
