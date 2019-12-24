'use strict';

(function () {
  const closeBtn = document.querySelector(`#closeBtn`);
  const callBtn = document.querySelector(`.contacts__button`);
  const modalForm = document.querySelector(`.popup`);
  const scrollBtn = document.querySelector(`.main-screen__scroll`);
  const moveTo = new MoveTo();
  const advantages = document.getElementById(`advantages`);
  const consultingBtn = document.querySelector(`.main-screen__button`);
  const consultingSection = document.getElementById(`consulting`);
  const menuButtons = document.querySelectorAll(`.footer__button`);
  const userName = document.querySelector(`#name-popup`);
  const phone = document.querySelector(`#tel-popup`);
  const question = document.querySelector(`#question-popup`);
  let isStorageSupport = true;
  let storageName = ``;
  let storagePhone = ``;
  let storageQuestion = ``;
  const form = document.querySelector(`.popup__form form`);

  const switchVisability = (evt) => {

    const menu = evt.target.parentNode;
    if (menu.classList.contains(`footer__menu--opened`)) {
      menu.classList.remove(`footer__menu--opened`);
      menu.classList.add(`footer__menu--closed`);
    } else {
      menu.classList.add(`footer__menu--opened`);
      menu.classList.remove(`footer__menu--closed`);
    }
  };

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
    if (userName) {
      userName.focus();
      userName.value = storageName;
    }

    if (phone) {
      phone.value = storagePhone;
    }

    if (question) {
      question.value = storageQuestion;
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

  menuButtons.forEach((item) => item.addEventListener(`click`, switchVisability));

  try {
    storageName = localStorage.getItem(`userName`);
    storagePhone = localStorage.getItem(`phone`);
    storageQuestion = localStorage.getItem(`question`);
  } catch (err) {
    isStorageSupport = false;
  }

  if (form) {
    form.addEventListener(`submit`, () => {
      if (isStorageSupport) {
        localStorage.setItem(`userName`, userName.value);
        localStorage.setItem(`phone`, phone.value);
        localStorage.setItem(`question`, question.value);
      }    
    })
  };
})();