const $burger = $('.navbar-burger');
const $menu = $('.navbar-menu');
const $directorForm = $('#director-form');
const $form = $('form');

$burger.on('click', () => {
  $burger.toggleClass('is-active');
  $menu.toggleClass('is-active');
});

if($directorForm.length > 0) $directorForm.find('select').on('change', () => $directorForm.trigger('submit'));

if($form.length>0) $form.validate();
