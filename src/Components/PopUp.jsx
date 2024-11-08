const PopUp = ({ closeModal, totalCost = 0 }) => {
  return (
    <dialog open className="modal modal-bottom sm:modal-middle">
      <div className="modal-box items-center justify-center text-center space-y-3">
        <figure className="items-center ">
          <img
            className="mx-auto"
            src="https://i.ibb.co.com/bHxmRjL/Group.png"
            alt="modal"
          />
        </figure>
        <h3 className="font-bold text-lg">Payment Successfully</h3>
        <p className="py-4">Thanks for purchasing.</p>
        <p className="py-4">Total: ${totalCost}</p>
        <div className="modal-action">
          <button
            className="btn w-full bg-gray-300 rounded-full"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default PopUp;
