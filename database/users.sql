-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Сен 23 2016 г., 09:05
-- Версия сервера: 10.1.9-MariaDB
-- Версия PHP: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `hakaton`
--

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) UNSIGNED NOT NULL,
  `login` varchar(128) DEFAULT NULL,
  `password` varchar(64) DEFAULT NULL,
  `grant` tinyint(1) DEFAULT '1',
  `active` tinyint(1) DEFAULT '1',
  `FIO` varchar(256) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `phone` bigint(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `grant`, `active`, `FIO`, `email`, `country`, `phone`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3', 4, 1, 'Roma Slobodeniuk', 'romsl@i.ua', 'Ukraine', 380673800836),
(2, 'petro1989', 'f2f61c2ab367c3a99c9ec7306f222c7f', 1, 1, 'Пётр Николаевич', 'petia@mail.ua', 'Polska', 48692600399),
(3, 'kirius170', 'a4b3f0b3e94fd45bea7f4171d7b1a610', 1, 1, 'Киррил Новицки', 'kiril@gmail.com', 'Украина', 380673332211),
(4, 'afonia', '4a2482438b2aa250775aa4e03c25b30f', 1, 1, 'Афанасий Петрович', 'afonia@mail.com', 'Казахстан', 3880506568),
(5, 'anatolik', '58f6e9df68784711a42b1801b292a67b', 1, 1, 'Анатолий Иванович', 'anatolik@gmail.com', 'Уганда', 5682135184);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `login` (`login`),
  ADD KEY `indSignIn` (`login`,`password`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
