import React from "react";

export const SubCard = () => {
  return (
    <>
      <form className="newsletter-form">
        <input
          type="email"
          placeholder="Enter your email"
          className="email-input"
          required
        />
        <button type="submit" className="submit-btn">
          Subscribe
        </button>
      </form>
    </>
  );
};
