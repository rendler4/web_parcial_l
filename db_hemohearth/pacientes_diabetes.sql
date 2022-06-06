-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-06-2022 a las 05:06:48
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd1`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes_diabetes`
--

CREATE TABLE `pacientes_diabetes` (
  `cedula` int(11) NOT NULL,
  `nombres` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `eps` varchar(50) NOT NULL,
  `patologias_diabeticas` varchar(500) DEFAULT NULL,
  `tipo_glucemia` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pacientes_diabetes`
--

INSERT INTO `pacientes_diabetes` (`cedula`, `nombres`, `apellidos`, `eps`, `patologias_diabeticas`, `tipo_glucemia`) VALUES
(1234, 'Carlos', 'Anaya', 'Colsanitas', 'Cuadro neurovegetativos', 1),
(12345, 'Andres Felipe', 'Reyes', 'SOS', 'Signos de deshidratación', 1),
(12346, 'Camilo', 'Ballesteros', 'Sura', 'Signos de deshidratación', 3),
(12345678, 'Juan Sebastian', 'Cardnas', 'Comfandi', 'Trastornos de conciencia', 2),
(16832678, 'Hector', 'Reyes', 'SOS', 'Signos de deshidratación', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pacientes_diabetes`
--
ALTER TABLE `pacientes_diabetes`
  ADD PRIMARY KEY (`cedula`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pacientes_diabetes`
--
ALTER TABLE `pacientes_diabetes`
  MODIFY `cedula` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16832679;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
