-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Сен 18 2016 г., 13:20
-- Версия сервера: 10.1.9-MariaDB
-- Версия PHP: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `lesson-1`
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
  `FIO` varchar(256) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `grant`, `active`, `FIO`) VALUES
(1, 'the_Witcher', '1d12c40b09080aa328c775fc60ee2655', 1, 1, 'Roma Slobodeniuk'),
(2, 'User1', 'a722c63db8ec8625af6cf71cb8c2d939', 1, 1, 'User1_fio'),
(3, 'User2', 'c1572d05424d0ecb2a65ec6a82aeacbf', 1, 1, 'User2_fio'),
(4, 'User3', '3afc79b597f88a72528e864cf81856d2', 1, 1, 'User3_fio'),
(5, 'User4', 'fc2921d9057ac44e549efaf0048b2512', 1, 1, 'User4_fio'),
(6, 'User5', 'd35f6fa9a79434bcd17f8049714ebfcb', 1, 1, 'User5_fio'),
(7, 'User6', 'e9568c9ea43ab05188410a7cf85f9f5e', 1, 1, 'User6_fio'),
(8, 'User7', '8c96c3884a827355aed2c0f744594a52', 1, 1, 'User7_fio'),
(9, 'User8', 'ccd3cd18225730c5edfc69f964b9d7b3', 1, 1, 'User8_fio'),
(10, 'User9', 'c28cce9cbd2daf76f10eb54478bb0454', 1, 1, 'User9_fio');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `indSignIn` (`login`,`password`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
