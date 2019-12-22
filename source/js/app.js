const closeBtn = document.querySelector(`#closeBtn`);
const callBtn = document.querySelector(`.contacts__button`);
const modalForm = document.querySelector(`.popup`);
const scrollBtn = document.querySelector(`.main-screen__scroll`);
const moveTo = new MoveTo();
const advantages = document.getElementById(`advantages`);
const consultingBtn = document.querySelector(`.main-screen__button`);
const consultingSection = document.getElementById(`consulting`);

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

if (scrollBtn && advantages) {
  scrollBtn.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    moveTo.move(advantages);
  });
};

if (consultingBtn && consultingSection) {
  consultingBtn.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    moveTo.move(consultingSection);
  });
};