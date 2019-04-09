jQuery(document).ready(function($) {
  const popup = $('.js-popup');
  const popupBody = $('.js-popup-body');
  const showPopup = $('.js-show-popup');
  const hidePopup = $('.js-hide-popup');

  showPopup.click(() => {
    popup.removeClass('popup--disappearance');
    popup.addClass('popup--visible popup--appearance');
    $('body').addClass('noscroll');
  });

  popupBody.click((e) => {
    e.stopPropagation();
  });

  hidePopup.click((e) => {
    popup.removeClass('popup--appearance');
    popup.addClass('popup--disappearance');
    setTimeout(() => {
      popup.removeClass('popup--visible ');
    }, 250);
    $('body').removeClass('noscroll');

    if ($(e.target).hasClass('js-uninstall-app')) {
      setTimeout(() => {
        alert('DONE');
      }, 300);
    }
  });
});