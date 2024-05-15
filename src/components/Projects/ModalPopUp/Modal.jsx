import React from 'react'
import '../projects.css'
import CloseIcon from '@mui/icons-material/Close';

function Modal({ onClose }) {
  return (
    <div className='modal center-both'>

      <div className="modalBody flex-v">
        <div className="modalHeader flex-h">
          <p className='md-font'>Modal Pop-up</p>
          <CloseIcon onClick={onClose} className='icon' />
        </div>
        <div className="modalContent">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In asperiores itaque mollitia facere optio, hic distinctio quia libero nam enim perferendis, deserunt, eaque amet necessitatibus dolor quidem repellat culpa impedit.
            Cumque numquam, et vero quae saepe ut, hic debitis rerum magni dolorem animi? Possimus corrupti cumque, eaque quae facere minima modi voluptatum, odio provident, beatae vel nesciunt accusantium harum! Voluptate.</p>
        </div>
        <div className="modalFooterButton flex-h">
          <button className="button" onClick={onClose}>Close</button>
        </div>
      </div>

    </div>
  )
}

export default Modal
