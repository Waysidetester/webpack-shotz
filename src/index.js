import './index.scss';
import $ from 'jquery';
import 'bootstrap';

const buttonClick = () => {
  $('#click').on('click', () => {
    $('#append').append('<p>I\'ve been clicked</p>');
  });
};

buttonClick();
