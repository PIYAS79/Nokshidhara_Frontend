import React from "react";

const Web_Modal = ({ data, onClose }: { data: string; onClose: () => void }) => {
  return (
    <dialog open={data !== null} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Order Note</h3>
        <p className="py-4">{data}</p>
      </div>
      <form method="dialog" className="modal-backdrop" onSubmit={onClose}>
        <button type="button" onClick={onClose}>Close</button>
      </form>
    </dialog>
  );
};

export default Web_Modal;
