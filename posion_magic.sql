-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-06-2023 a las 02:55:05
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `posion_magic`
--
CREATE DATABASE IF NOT EXISTS `posion_magic` DEFAULT CHARACTER SET utf32 COLLATE utf32_spanish_ci;
USE `posion_magic`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

DROP TABLE IF EXISTS `categorias`;
CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf32_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`) VALUES
(3, 'Fuerza'),
(1, 'Maná'),
(2, 'Salud'),
(4, 'Velocidad');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posiones`
--

DROP TABLE IF EXISTS `posiones`;
CREATE TABLE `posiones` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf32_spanish_ci NOT NULL,
  `descripcion` varchar(2000) COLLATE utf32_spanish_ci NOT NULL,
  `precio` varchar(100) COLLATE utf32_spanish_ci NOT NULL,
  `cantidad` int(11) NOT NULL,
  `imagen` varchar(2000) COLLATE utf32_spanish_ci NOT NULL,
  `categoria` varchar(100) COLLATE utf32_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

--
-- Volcado de datos para la tabla `posiones`
--

INSERT INTO `posiones` (`id`, `nombre`, `descripcion`, `precio`, `cantidad`, `imagen`, `categoria`) VALUES
(5, 'Anggelimar', 'AAAA', '20', 2, 'https://cdn.dribbble.com/users/14814/screenshots/16535574/reactlogo.png', 'Maná'),
(6, 'Alexander', 'AAAA', '20', 5, 'https://cdn.dribbble.com/users/14814/screenshots/16535574/reactlogo.png', 'Fuerza');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre` (`nombre`);

--
-- Indices de la tabla `posiones`
--
ALTER TABLE `posiones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categorias` (`categoria`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `posiones`
--
ALTER TABLE `posiones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `posiones`
--
ALTER TABLE `posiones`
  ADD CONSTRAINT `categorias` FOREIGN KEY (`categoria`) REFERENCES `categorias` (`nombre`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
