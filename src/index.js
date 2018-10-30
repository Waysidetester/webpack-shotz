import './index.scss';
import 'bootstrap';
import $ from 'jquery';

$('#click').on('click', () => {
  $('#append').append('<p>I have changed</p>');
});
