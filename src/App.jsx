import { useState } from "react";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import PicsGrid from "./comps/PicsGrid";
import Modal from "./comps/Modal";

import "./index.css";

const App = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <PicsGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default App;
