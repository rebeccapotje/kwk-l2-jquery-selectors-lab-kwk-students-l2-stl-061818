'use-strict';
//add your code here

function h1Selector (element) {
  document.querySelectorAll('h1');
  return document.querySelectorAll('h1') 
}

function liInOlSelector (element) {
  document.querySelectorAll('ol li');
  return document.querySelectorAll('ol li')
}

function linkSelector (element) {
  return $('#box4.box5 a')
}

function imageSelector (element) {
  return $("[alt = 'cat sleeping']")
}

function checkboxInputSelector (element) {
  return $(":checkbox")
}