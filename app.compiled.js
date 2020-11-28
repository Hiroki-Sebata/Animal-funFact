(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var animals = exports.animals = {
      dolphin: {
        image: 'data:image/jpeg;base64,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',
        facts: ['Dolphins have been shown to give distinct names to each other!', 'Dolphins are known to display their own culture!', 'Dolphins have two stomachs!']
      },
      lobster: {
        image: '/images/lobster.jpg',
        facts: ['Lobsters taste with their legs!', 'Lobsters chew with their stomachs!', 'Lobsters can live as long as 100 years.']
      },
      starfish: {
        image: '/images/starfish.jpg',
        facts: ['Starfish can have up to 40 arms!', 'Starfish have no brain and no blood!', 'Starfish can regenerate their own arms!']
      }
    };
    
    },{}],2:[function(require,module,exports){
    'use strict';
    
    var _animals = require('./animals');
    
    var _react = require('react');
    
    var _react2 = _interopRequireDefault(_react);
    
    var _reactDom = require('react-dom');
    
    var _reactDom2 = _interopRequireDefault(_reactDom);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    var title = "";
    
    var background = _react2.default.createElement('img', { 'class': 'background',
      alt: 'ocean',
      src: 'https://assets.newatlas.com/dims4/default/5ab0e1a/2147483647/strip/true/crop/1999x1328+0+0/resize/1440x957!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Ffe%2F06%2F75f2c8704c71ade9c8881c997c8f%2Fdepositphotos-41105113-l-2015.jpg'
    });
    
    var images = [];
    
    for (var animal in _animals.animals) {
      images.push(_react2.default.createElement('img', {
        key: animal,
        className: 'animal',
        alt: animal,
        src: _animals.animals[animal].image,
        arialabel: animal,
        role: 'button',
        onClick: displayFact
      }));
    }
    function displayFact(e) {
      var selectedAnimal = e.target.alt;
      var animalInfo = _animals.animals[selectedAnimal];
      var Facts = Math.floor(Math.random() * animalInfo.facts.length);
      var funFacts = animalInfo.facts[Facts];
      document.getElementById('fact').innerHTML = funFacts;
    }
    var showBackground = true;
    
    var animalFacts = _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h1',
        null,
        title === "" ? "Click an animal for a fun fact" : title
      ),
      showBackground && background,
      _react2.default.createElement('p', { id: 'fact' }),
      _react2.default.createElement(
        'div',
        { className: 'animals' },
        images
      )
    );
    
    _reactDom2.default.render(animalFacts, document.getElementById('root'));
    
    },{"./animals":1,"react":undefined,"react-dom":undefined}]},{},[2]);
    