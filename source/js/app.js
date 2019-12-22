const closeBtn = document.querySelector(`#closeBtn`);
const callBtn = document.querySelector(`.contacts__button`);
const modalForm = document.querySelector(`.popup`);
const scrollBtn = document.querySelector(`.main-screen__scroll`);
const moveTo = new MoveTo();
const advantages = document.getElementById(`advantages`);
const consultingBtn = document.querySelector(`.main-screen__button`);
const consultingSection = document.getElementById(`consulting`);
const menuButtons = document.querySelectorAll(`.footer__button`);

const switchVisability = (evt) => {
  const menuContent = evt.target.parentNode;
  if (menuContent.classList.contains(`footer__menu--opened`)) {
    menuContent.classList.remove(`footer__menu--opened`);
    menuContent.classList.add(`footer__menu--closed`);
  } else {
    menuContent.classList.add(`footer__menu--opened`);
    menuContent.classList.remove(`footer__menu--closed`);
  }
};

menuButtons.forEach((item) => item.addEventListener(`click`, switchVisability));


const closeForm = () => {
  if (modalForm.classList.contains(`popup--showing`)) {
    modalForm.classList.remove(`popup--showing`);
    modalForm.classList.add(`popup--closed`);
  }
};

const showForm = () => {
  if (modalForm.classList.contains(`popup--closed`)) {
    modalForm.classList.remove(`popup--closed`);
    modalForm.classList.add(`popup--showing`);
  }
}

const onFormClose = (evt) => {
  evt.preventDefault();
  closeForm();
  window.removeEventListener(`keydown`, onEscPress);
}

const onFormOpen = (evt) => {
  evt.preventDefault();
  showForm();
  window.addEventListener(`keydown`, onEscPress);
}

const onEscPress = (evt) => {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    closeForm();
  }
}

if(callBtn) {
  callBtn.addEventListener(`click`, onFormOpen);
};

if(closeBtn) {
  closeBtn.addEventListener(`click`, onFormClose);
};

if (modalForm) {
  modalForm.addEventListener(`click`, (evt) => {
    const target = evt.target;
    if (target.classList.contains(`popup`)) {
      closeForm();
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

const phoneMask = IMask(
  document.getElementById(`tel`), {
    mask: `+{7}(000)000-00-00`
  }
);

const popupPhoneMask = IMask(
  document.getElementById(`tel-popup`), {
    mask: `+{7}(000)000-00-00`
  }
);