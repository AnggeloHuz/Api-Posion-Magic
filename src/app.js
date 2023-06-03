var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

const categoriasRouter = require('./routes/categorias.routes')
const posionesRouter = require('./routes/posiones.routes');

const config = {
  application: {
      cors: {
          server: [
              {
                  origin: "localhost:3000", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                  credentials: true
              }
          ]
      }
  }
}

var app = express();

app.use(cors(
  config.application.cors.server
));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/posiones', posionesRouter);
app.use('/categorias', categoriasRouter);

// Middleware para manejar rutas no encontradas y devolver error 404
app.use((req, res, next) => {
  res.status(404).json({ status: 404, message: "La ruta que buscas no existe" });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
