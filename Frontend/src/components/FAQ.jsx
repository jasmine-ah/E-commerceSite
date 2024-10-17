import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is your return policy?",
            answer: "You can return any item within 30 days of purchase for a full refund. Items must be in their original condition."
        },
        {
            question: "How long does shipping take?",
            answer: "Standard shipping takes 5-7 business days, while express shipping takes 2-3 business days."
        },
        {
            question: "Do you ship internationally?",
            answer: "Yes, we ship to over 20 cities in Ethiopia. Shipping rates will vary based on destination."
        },
        {
            question: "How can I track my order?",
            answer: "Once your order has shipped, you will receive an email with a tracking number and a link to track your order."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept credit cards and cash on delivery."
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="bg-[#eacc79] p-8 border border-b-[60px] border-[#f4f7fb]">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Frequently Asked Questions</h2>
            <div className="max-w-2xl mx-auto">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-300 mb-4">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
                        >
                            <span className="text-lg font-semibold text-gray-700">{faq.question}</span>
                            <span className="text-gray-600">{activeIndex === index ? '-' : '+'}</span>
                        </button>
                        {activeIndex === index && (
                            <div className="pt-2 pb-4 text-gray-600">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
