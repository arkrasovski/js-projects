// $(function () {
//   var socket = io.connect("http://localhost:3000");

//   var message = $("#message");
//   var username = $("#username");
//   var send_message = $("#send_message");
//   var send_username = $("#send_username");
//   var chatroom = $("#chatroom");
//   var feedback = $("#feedback");

//   send_message.click(() => {
//     socket.emit("new_message", {
//       message: message.val(),
//       className: alertClass,
//     });
//   });

//   var min = 1;
//   var max = 6;
//   var random = Math.floor(Math.random() * (max - min)) + min;

//   // Устаналиваем класс в переменную в зависимости от случайного числа
//   // Эти классы взяты из Bootstrap стилей
//   var alertClass;
//   switch (random) {
//     case 1:
//       alertClass = "secondary";
//       break;
//     case 2:
//       alertClass = "danger";
//       break;
//     case 3:
//       alertClass = "success";
//       break;
//     case 4:
//       alertClass = "warning";
//       break;
//     case 5:
//       alertClass = "info";
//       break;
//     case 6:
//       alertClass = "light";
//       break;
//   }

//   socket.on("add_mess", (data) => {
//     feedback.html("");
//     message.val("");
//     console.log(data);
//     chatroom.append(
//       "<div class='alert alert-" +
//         data.className +
//         "'<b>" +
//         data.username +
//         "</b>: " +
//         data.message +
//         "</div>"
//     );
//   });

//   send_username.click(() => {
//     socket.emit("change_username", { username: username.val() });
//   });

//   message.bind("keypress", () => {
//     socket.emit("typing");
//   });

//   socket.on("typing", (data) => {
//     feedback.html(
//       "<p><i>" + data.username + " печатает сообщение..." + "</i></p>"
//     );
//   });
// });

const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);

server.listen(3000);
app.use(express.static(__dirname + "/public")); //эта штука позволила подключить стили
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const users = [];
const connections = [];

io.sockets.on("connection", (socket) => {
  console.log("успешное соединение");
  connections.push(socket);

  socket.on("disconnect", (data) => {
    connections.splice(connections.indexOf(socket), 1);
    console.log("отключились");
  });

  socket.on("send mess", (data) => {
    io.sockets.emit("add mess", {
      mess: data.mess,
      name: data.name,
      className: data.className,
    });
  }); //data - текстовое значение

  socket.on("send username", (data) => {
    io.sockets.emit("add username", { name: data });
  }); //data - текстовое значение
});
