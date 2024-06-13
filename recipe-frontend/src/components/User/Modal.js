// Modal.js
import React from 'react';
import './Modal.css'; // 假设你有一个简单的CSS文件来控制模态框的显示隐藏

const Modal = ({ showModal, setShowModal, children }) => {
  if (!showModal) return null;

  return (
    <div className="modal-overlay" onClick={() => setShowModal(false)}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;