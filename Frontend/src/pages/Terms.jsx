import React from "react";

function Terms({ onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl overflow-auto max-h-[80vh]">
                    <h1 className="text-4xl font-bold text-center text-[#333] mb-6">Terms and Conditions</h1>
                    <p className="text-[#666] mb-4">
                        Welcome to our Terms and Conditions page. Please read these terms carefully before using our service.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#c7899e] mt-6 mb-4">1. Introduction</h2>
                    <p className="text-[#666] mb-4">
                        These terms govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#c7899e] mt-6 mb-4">2. User Responsibilities</h2>
                    <ul className="list-disc list-inside text-[#666] mb-4">
                        <li>Ensure that the information you provide is accurate and up to date.</li>
                        <li>Do not engage in any illegal or unauthorized activities.</li>
                        <li>Respect the intellectual property rights of others.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#c7899e] mt-6 mb-4">3. Limitation of Liability</h2>
                    <p className="text-[#666] mb-4">
                        We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#c7899e] mt-6 mb-4">4. Changes to Terms</h2>
                    <p className="text-[#666] mb-4">
                        We may update these terms from time to time. We will notify you of any changes by posting the new terms on our website.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#c7899e] mt-6 mb-4">5. Governing Law</h2>
                    <p className="text-[#666] mb-4">
                        These terms are governed by the laws of Ethiopia/AA. Any disputes arising under these terms will be handled in the appropriate courts.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#c7899e] mt-6 mb-4">6. Contact Us</h2>
                    <p className="text-[#666] mb-4">
                        If you have any questions about these Terms and Conditions, please contact us at <span className="text-[#c7899e]">info@ecommercesite.com</span> .
                    </p>

                    <p className="text-center text-[#999] mt-8">
                        Last updated: 2024
                    </p>
                    <button onClick={onClose} className="mt-8 bg-transparent border border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-800 rounded-md px-4 py-2">Close</button>
                </div>
            </div>
        </div>
    );
}

export default Terms;
