import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { db } from '../../backend/firebase';
import Image from '../../images/Image.png';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const userCollectionRef = collection(db, 'contactdata');
  const navigate = useNavigate();
  const [type, setType] = useState('');

  const handleSubmit = async () => {
    await addDoc(userCollectionRef, {
      name,
      email,
      details,
      type,
    });

    setName('');
    setEmail('');
    setDetails('');
    setType('');
    navigate('/ContactThanks');
  };

  return (
    <div className="p-10">
      <div>
        <h1 className="card-title">SEND US YOUR REQUEST!</h1>
        <p className="text-xl">
          Do you have a question, concern, idea, feedback, or problem? If you
          need assistance, please fill out the <br /> form below and we&apos;d
          be happy to help!
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-center md:text-start mt-8 mb-10">
          Type of contact: {type}
        </h2>
        <div className=" md:flex justify-between gap-8">
          <div className="flex flex-col text-xl gap-8 mb-8">
            <div className="flex items-center mr-4">
              <label
                htmlFor="inline-radio"
                className="ml-2 text-black-400 dark:text-gray-500"
              >
                <input
                  id="question"
                  type="radio"
                  defaultChecked={type === 'question'}
                  value="I have a question about the service."
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                  name="inline-radio-group"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                I have a question about the service.
              </label>
            </div>
            <div className="flex items-center mr-4">
              <label
                htmlFor="inline-2-radio"
                className="ml-2 text-black-400 dark:text-gray-500"
              >
                <input
                  id="registered client"
                  type="radio"
                  defaultChecked={type === 'registered client '}
                  value="I'm a registered client and I need support."
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                  name="inline-radio-group"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                I&apos;m a registered client and I need support.
              </label>
            </div>
            <div className="flex items-center mr-4">
              <label
                htmlFor="inline-checked-radio"
                className="ml-2 text-black-400 dark:text-gray-500"
              >
                <input
                  id="interested counselor"
                  type="radio"
                  defaultChecked={type === 'interested counselor'}
                  value="I'm a counselor interested in joining."
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                  name="inline-radio-group"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                I&apos;m a counselor interested in joining.
              </label>
            </div>
            <div className="flex items-center">
              <label
                htmlFor="inline-disabled-radio"
                className="ml-2 text-black-400 dark:text-gray-500"
              >
                <input
                  id="registered counselor"
                  type="radio"
                  defaultChecked={type === 'registered counselor'}
                  value="I'm a registered counselor and I need support."
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                  name="inline-radio-group"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                I&apos;m a registered counselor and I need support.
              </label>
            </div>
            <div className="flex items-center">
              <label
                htmlFor="inline-disabled-radio"
                className="ml-2 text-black-400 dark:text-gray-500"
              >
                <input
                  id="business"
                  type="radio"
                  defaultChecked={type === 'business'}
                  value="I have a business-related inquiry."
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                  name="inline-radio-group"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                I have a business-related inquiry.
              </label>
            </div>
            <div className="flex items-center">
              <label
                htmlFor="inline-disabled-radio"
                className="ml-2 text-black-400 dark:text-gray-500"
              >
                <input
                  id="organization"
                  type="radio"
                  defaultChecked={type === 'organization'}
                  value="I'm interested in Healing Online for my organization."
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                  name="inline-radio-group"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                I&apos;m interested in Healing Online for my organization.
              </label>
            </div>
            <div className="flex items-center">
              <label
                htmlFor="inline-disabled-radio"
                className="ml-2 text-black-400 dark:text-gray-500"
              >
                <input
                  id="billing"
                  type="radio"
                  defaultChecked={type === 'billing'}
                  value="I have a billing related question."
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                  name="inline-radio-group"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                I have a billing related question.
              </label>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="hidden md:block">
              <img src={Image} alt="Contact Us" />
            </div>
            <div className="block max-w-sm p-6 mt-20 mb-10 bg-teal-50 border border-gray-200 rounded-3xl shadow-md">
              <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Find Us At:
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Nergiz Plaza <br />
                3rd Floor <br />
                Bakhityari Street 40m <br />
                Erbil,Iraq <br />
                44001 <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="form-control w-full max-w-xs md:-mt-80">
        <span className="label-text text-xl font-semibold mb-3">
          Full Name:
        </span>
        <input
          type="text"
          placeholder="Enter your full name here..."
          className="input input-bordered w-full max-w-xs"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <span className="label-text text-xl font-semibold mb-3 mt-3">
          Email:
        </span>
        <input
          type="text"
          placeholder="Enter your email here..."
          className="input input-bordered w-full max-w-xs"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <span className="label-text text-xl font-semibold mb-3 mt-3">
          Details:
        </span>
        <textarea
          type="text"
          placeholder="Enter your details here..."
          className="input input-bordered w-full max-w-xs"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </div>
      <button
        onClick={handleSubmit}
        type="submit"
        className="btn btn-info mt-10"
      >
        SUBMIT
      </button>
    </div>
  );
};

export default Contact;
