import React, {useState} from 'react'
import ProgressBar from '../comps/ProgressBar'
import {RiImageAddLine} from "react-icons/ri";

const UploadForm = () => {

    const [file, setFile] = useState(null)
    const [error, setErorr] = useState(null)

    const types = ['image/png', 'image/jpeg', 'image/jpg']

    const handleUpload = (e) => {

        let selected = e.target.files[0]

        if(selected && types.includes(selected.type)) {
            setFile(selected)
            setErorr('')
        } else {
            setFile(null)
            setErorr('Please select an image file (png, jpg or jpeg)')
        }
    };
    return (
      <>
        <h2>Upload Photo</h2>
        <form>
          <label>
            <input type="file" onChange={handleUpload} />
            <RiImageAddLine className="upload-icon" />
          </label>
          <div className="output">
            {error && <div className="error">{error}</div>}
            {file && <div>{file.name}</div>}
            {file && <ProgressBar file={file} setFile={setFile} />}
          </div>
        </form>
      </>
    );
}

export default UploadForm
