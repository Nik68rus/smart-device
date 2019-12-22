const closeBtn = document.querySelector(`#closeBtn`);
const modalForm = document.querySelector(`.popup`);
const callBtn = document.querySelector(`.contacts__button`);

if(callBtn) {
  callBtn.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    modalForm.classList.remove(`popup--closed`);
    modalForm.classList.add(`popup--showing`);
  })
};

if(closeBtn) {
  closeBtn.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    modalForm.classList.remove(`popup--showing`);
    modalForm.classList.add(`popup--closed`);
  })
};

window.addEventListener(`keydown`, (evt) => {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalForm.classList.contains(`popup--showing`)) {
      modalForm.classList.remove(`popup--showing`);
      modalForm.classList.add(`popup--closed`);
    }
  }
});

if (modalForm) {
  modalForm.addEventListener(`click`, (evt) => {
    const target = evt.target;
    if (target.classList.contains(`popup`)) {
      target.classList.remove(`popup--showing`);
      target.classList.add(`popup--closed`);
    };
  });
};