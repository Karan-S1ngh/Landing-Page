import React, { useState } from 'react';
import './FAQ.css'; 

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      question: 'What type of vehicles are eligible?',
      answer: 'Vehicles eligible for MyFastX must be well-maintained, have valid registration, and pass all safety checks.',
    },
    {
      question: 'How do I get paid?',
      answer: 'Payments are processed weekly to your bank account. Detailed payment summaries can be found in your account dashboard.',
    },
    {
      question: 'What areas does MyFastX operate in?',
      answer: 'MyFastX operates in major metropolitan areas across the country. Check our website for the full list of service areas.',
    },
    {
      question: 'What type of vehicles are eligible?',
      answer: 'Eligible vehicles include cars, vans, and bikes. Check our vehicle policy for more details.',
    },
    {
      question: 'How do I get paid?',
      answer: 'Payments are securely transferred to your bank account weekly, with a full summary provided.',
    },
    {
      question: 'What areas does MyFastX operate in?',
      answer: 'We operate in numerous cities nationwide. Visit our website for the current list of areas.',
    },
  ];

  // Toggle question open/close state
  const toggleQuestion = (index) => {
    if (openQuestion === index) {
      setOpenQuestion(null); // Close if already open
    } else {
      setOpenQuestion(index); // Open the clicked question
    }
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <h2>Got Questions? We've Got Answers!</h2>
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openQuestion === index ? 'open' : ''}`}
            onClick={() => toggleQuestion(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className="faq-toggle">{openQuestion === index ? '-' : '+'}</span>
            </div>
            {openQuestion === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
