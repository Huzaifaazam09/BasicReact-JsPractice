import React, { useState } from 'react';
import axios from 'axios';
import './PostDataFetching.css'

function PostDataFetching() {
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
    });
    const [submittedData, setSubmittedData] = useState(null);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post('https://jsonplaceholder.typicode.com/posts', formData)
            .then((response) => {
                setSubmittedData(response.data);
                setError(null);
                setFormData({ fName: '', lName: '' }); 
            })
            .catch((error) => {
                console.error('Error While Submitting Data:', error);
                setError(error);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label><b>First Name:</b></label>
                    <input
                        type="text"
                        name="fName"
                        value={formData.fName}
                        onChange={handleInputChange}
                    />
                </div>
                <br />
                <div>
                    <label><b>Last Name:</b></label>
                    <input
                        name="lName"
                        value={formData.lName}
                        onChange={handleInputChange}
                    />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>

            {submittedData && (
                <div>
                    <h3>Data Submitted:</h3>
                    <p> <b>First Name:</b> {submittedData.fName}</p>
                    <p><b>Last Name:</b> {submittedData.lName}</p>
                </div>
            )}

            {error && (
                <div>
                    <h3>Error Occured:</h3>
                    <p><b>CODE ERROR:</b> {error.code}</p>
                    <p><b>NAME ERROR:</b> {error.name}</p>
                    <p><b>MESSAGE ERROR:</b> {error.message}</p>
                    <p><b>URL ERROR:</b> {error?.config?.url}</p>
                </div>
            )}
        </div>
    );
}

export default PostDataFetching;






















