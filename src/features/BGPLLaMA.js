import Header from '../components/Header';
import Navbar from '../components/Navbar';


import React, { useState } from 'react';

const BGPLLaMa = () => {
    const [query, setQuery] = useState('');
    const [output, setOutput] = useState('');
    const [existingQueries, setExistingQueries] = useState([]);
    const [error, setError] = useState(null);

    const handleQueryChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:8000/api/bgp_llama?query=' + encodeURIComponent(query))
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data)
                setOutput(data.output);
                setExistingQueries(data.queries);
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
                setError('There was a problem with your fetch operation: ' + error.message);
            });
    };


  return (
    <div>
        <Header />
        <Navbar />
        <div className="container mx-auto p-4">
        <div className="flex justify-between">
            {/* Existing Queries Section */}
            <div className="w-1/5">
            <h2 className="font-bold mb-2">Existing Queries</h2>
            <ul className="border p-2">
                {/* {existingQueries.map((query, index) => (
                <li key={index} className="mb-1">
                    {query}
                </li>
                ))} */}
            </ul>
            </div>

            {/* Query Input Section */}
            <div className="w-2/3 ml-4">
            <h2 className="font-bold mb-2">Welcome to BGP-LLaMA</h2>
            <p className="mb-4">Enter your query in the text box below.</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                <label htmlFor="queryInput" className="block mb-2">Input</label>
                <textarea
                    id="queryInput"
                    rows="4"
                    className="w-full border p-2"
                    placeholder="Enter your query here"
                    value={query}
                    onChange={handleQueryChange}
                />
                </div>
                <button
                type="submit"
                className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                >
                Submit
                </button>
            </form>

            {/* Model Output Section */}
            {output && (
                <div className="mt-4">
                <h3 className="font-bold mb-2">Your query:</h3>
                <div className="border p-2">
                    {output}
                </div>
                </div>
            )}
            </div>
        </div>
    </div>
    </div>
  );
};

export default BGPLLaMa;
