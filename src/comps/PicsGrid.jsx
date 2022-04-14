import React from 'react'
import useFireStore from '../hooks/useFireStore'
import { motion } from 'framer-motion'



const PicsGrid = ({ setSelectedImg }) => {
  const { docs } = useFireStore("images");

  return (
    <div className="grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            whileHover={{opacity:1}}
            layout
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img src={doc.url} alt="images"
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:0.9}}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default PicsGrid
