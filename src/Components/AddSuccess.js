import React, { useState } from 'react';
import Cookies from 'js-cookie';
import Navbar from './Navbar';

const AddSuccess = () => {
  const [details, setDetails] = useState({ description: '', name: '', image: '' });
  const [error, setError] = useState('');
  const [thankYouMessage, setThankYouMessage] = useState(false); // New state for thank you message

  const onChange = (e) => {
    if (e.target.name === "image") {
      setDetails({ ...details, image: e.target.files[0] });
    } else {
      setDetails({ ...details, [e.target.name]: e.target.value });
    }
  };

  const isValidForm = () => {
    return details.name && details.description;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const token = Cookies.get('authToken');

    const formData = new FormData();
    formData.append('name', details.name);
    formData.append('description', details.description);
    formData.append('image', details.image); // Image file

    try {
      const response = await fetch('process.env.REACT_APP_API_URL/user/data/addStory', {
        method: 'POST',
        headers: {
          'authorization': `Bearer ${token}`,
        },
        credentials: 'include',
        body: formData,
      });

      if (!response.ok) {
        console.log("Failed To Add Story");
        setError("Failed to add story.");
        return;
      }

      // Display the thank you message upon successful submission
      setThankYouMessage(true);

      // Clear the form after submission
      setDetails({ description: '', name: '', image: '' });
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="form-container"> {/* Centering container */}
        {thankYouMessage ? (
          <h2>Thank you for submitting your post. It's currently undergoing review. We'll notify you of the outcome.</h2>
        ) : (
          <>
            {error ? (
              <>
                <p>Failed to Add Post</p>
                <p>{error}</p>
              </>
            ) : (
              <>
                <form className='form_03 text_form' onSubmit={onSubmit}>
                  <h1>Add Your Story</h1>
                  <div className="form-group label_002">
                    <label htmlFor="exampleInputTitle01">Your Name</label>
                    <input type="text" value={details.name} name='name' style={{textAlign:'center'}} onChange={onChange} className="form-control input_jobTitle_01" id="exampleInputTitle1" aria-describedby="TitleHelp" placeholder="Your Name" required />
                  </div>
                  <div className="form-group label_02">
                    <label htmlFor="exampleInputStory">Your Story</label>
                    <textarea
                      value={details.description}
                      name="description"
                      onChange={onChange}
                      style={{textAlign:'center'}}
                      className="form-control input_jobTitle_01"
                      id="exampleInputStory"
                      aria-describedby="StoryHelp"
                      placeholder="Your Story"
                      required
                      rows="4"
                      cols="100"
                    />
                  </div>

                  <div className="form-group label_02">
                    <label htmlFor="imageUpload" className='text_area'>Upload Your Image</label>
                    <input
                      type="file"
                      id="imageUpload"
                      className='desc_01'
                      name="image"
                      accept="image/*"
                      required
                      onChange={onChange}
                    />
                  </div>

                  <div className="button-container"> {/* New container for button */}
                    <button type="submit" className="btn btn-primary" disabled={!isValidForm()}>Submit</button>
                  </div>
                </form>
              </>
            )}
          </>
        )}
      </div>

      {/* Internal CSS */}
      <style>
        {`
          .form-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: auto;
            max-width: 600px; /* Adjust as needed */
            padding: 20px; /* Optional for spacing */
          }

          .form-container h2,
          .form-container p {
            text-align: center; /* Center the text */
          }

          .form_03 {
            width: 100%; /* Make form take full width of the container */
          }

          .button-container {
            display: flex;
            justify-content: center; /* Center the button */
            margin-top: 20px; /* Space above the button */
          }

          .form-group {
            margin-bottom: 20px; /* Add spacing between form groups */
            text-align: center; /* Center the form group contents */
          }

          .form-group label {
            display: block; /* Ensure label is on a new line */
            margin-bottom: 10px; /* Space between label and input */
          }

          .form-control {
            width: 100%; /* Make input fields take full width */
            padding: 10px; /* Add some padding */
            border: 1px solid #ccc; /* Add a border */
            border-radius: 4px; /* Rounded corners */
          }

          .text_area {
            display: block;
            margin-top: 10px; /* Space above text area */
          }
        `}
      </style>
    </div>
  );
}

export default AddSuccess;
