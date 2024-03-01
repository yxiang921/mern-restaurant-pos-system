const MenuModal = () => {
  return (
    <div>
      <dialog id="menu_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add new food</h3>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
            <button className="btn">Submit</button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MenuModal;
