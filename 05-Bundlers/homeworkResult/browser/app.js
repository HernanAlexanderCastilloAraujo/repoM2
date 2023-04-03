/// en este archivo requerimos el objeto whiteboard de la ruta "./whiteboard.js", además requerimos el objeto io de la ruta "socket.io-client" y exportamos el objeto socket, sin embargo hay que aclara que 'socket.io-client', es un paquete que se instala con npm, por lo que se está trayendo de la carpeta node_modules, este paquete trae varias funcionalidades...

const {whiteboard} = require('./whiteboard.js');

const io = require('socket.io-client');
  const socket = io(window.location.origin)


  socket.on('connect', function () {
    console.log('Connected!');
  });

  socket.on('load', function (strokes) {

    strokes.forEach(function (stroke) {
      var start = stroke.start;
      var end = stroke.end;
      var color = stroke.color;
      whiteboard.draw(start, end, color, false);
    });

  });

  socket.on('draw', function (start, end, color) {
    whiteboard.draw(start, end, color, false);
  });

  whiteboard.on('draw', function (start, end, color) {
    socket.emit('draw', start, end, color);
  });
;
