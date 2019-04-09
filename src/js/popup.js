jQuery(document).ready(function($) {
  const popup = $('.js-popup');
  const popupBody = $('.js-popup-body');
  const showPopup = $('.js-show-popup');
  const hidePopup = $('.js-hide-popup');

  showPopup.click(() => {
    popup.addClass('popup--visible');
    $('body').addClass('noscroll');
  });

  popupBody.click((e) => {
    e.stopPropagation();
  });

  hidePopup.click((e) => {
    popup.removeClass('popup--visible');
    $('body').removeClass('noscroll');

    if ($(e.target).hasClass('js-uninstall-app')) {
      setTimeout(() => {
        alert('DONE');
      }, 350);
    }
  });
});