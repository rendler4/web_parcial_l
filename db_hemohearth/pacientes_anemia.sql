-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-06-2022 a las 05:07:17
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
-- Estructura de tabla para la tabla `pacientes_anemia`
--

CREATE TABLE `pacientes_anemia` (
  `cedula` int(11) NOT NULL,
  `nombres` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `nivel_hemoglobina` int(10) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `tipo_edad` int(10) NOT NULL COMMENT '0->Meses 1->Años',
  `edad` int(10) NOT NULL,
  `sexo` varchar(50) NOT NULL COMMENT 'M->Masculino F->Femenino',
  `estado_anemia` int(10) NOT NULL COMMENT '0->negativo 1->positivo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pacientes_anemia`
--

INSERT INTO `pacientes_anemia` (`cedula`, `nombres`, `apellidos`, `nivel_hemoglobina`, `correo`, `tipo_edad`, `edad`, `sexo`, `estado_anemia`) VALUES
(1, 'Andres', 'Camilo', 20, 'cami@es.com', 0, 2, 'M', 0),
(5, 'Carlos', 'Ramirez', 25, 'car23@es.com', 0, 25, 'M', 0),
(9, 'Juan Camilo', 'Barona', 20, 'barona@gmail.com', 1, 20, 'M', 1),
(10, 'Juan Esteban', 'Barona', 15, 'juanes@gmail.com', 1, 20, 'M', 0),
(11, 'Camilo', 'Perea', 15, 'andres@gmail.es', 1, 20, 'M', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pacientes_anemia`
--
ALTER TABLE `pacientes_anemia`
  ADD PRIMARY KEY (`cedula`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pacientes_anemia`
--
ALTER TABLE `pacientes_anemia`
  MODIFY `cedula` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
