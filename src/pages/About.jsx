import React from 'react';

function About() {
  return (
    <div className=" mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">About Us</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        We are a passionate team dedicated to creating innovative solutions that help businesses and individuals reach their full potential.
        Our mission is to provide high-quality, user-centric products and services that make a positive impact on our customers' lives.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        With years of experience in the industry, we have built a reputation for excellence, delivering solutions that are both functional and beautiful.
        We believe in continuous improvement and staying ahead of the curve with the latest technologies and design trends.
      </p>
      <div className="mt-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our mission is to empower businesses and individuals by providing them with the tools they need to succeed in a digital-first world.
        </p>
      </div>
      <div className="mt-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          We envision a world where technology and design seamlessly come together to create more meaningful, user-friendly experiences for everyone.
        </p>
      </div>
    </div>
  );
}

export default About;

