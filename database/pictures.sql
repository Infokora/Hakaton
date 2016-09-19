-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Сен 19 2016 г., 22:30
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
-- Структура таблицы `pictures`
--

CREATE TABLE `pictures` (
  `id` int(11) UNSIGNED NOT NULL,
  `group` varchar(32) DEFAULT NULL,
  `title` varchar(128) DEFAULT '',
  `file_name` text,
  `path` varchar(128) DEFAULT NULL,
  `active` tinyint(1) DEFAULT '1',
  `date` date DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `pictures`
--

INSERT INTO `pictures` (`id`, `group`, `title`, `file_name`, `path`, `active`, `date`) VALUES
(1, 'gallery', 'first file', 'IMG_16062016_014732.png', 'upload/', 1, '2016-08-22'),
(2, 'gallery', 'second file', 'IMG_24062016_022255.png', 'upload/', 1, '2016-08-22'),
(3, 'gallery', 'thirh picture', 'ZyOJcj0yTz4.jpg', 'upload/', 1, '2016-08-22'),
(4, 'gallery', 'picture 2', '9ce6af7e3be211e395f522000a1fd2c4_8.jpg', 'upload/', 1, '2016-08-22'),
(5, 'gallery', 'picture 3', '4 photo.jpg', 'upload/', 1, '2016-08-22'),
(6, 'gallery', 'picture 4', '4 photo.jpg', 'upload/', 1, '2016-08-22'),
(7, 'gallery', 'picture 5', 'IMG_31032016_175001.png', 'upload/', 1, '2016-08-22'),
(8, 'gallery', 'picture 6', '1468397758.png', 'upload/', 1, '2016-08-22'),
(9, 'gallery', 'picture 7', 'IMG-20140608-WA0000.jpg', 'upload/', 1, '2016-08-22'),
(10, 'gallery', 'picture 8', 'viber image 2.jpg', 'upload/', 1, '2016-08-22'),
(11, 'gallery', 'picture 9', 'viber image 1.jpg', 'upload/', 1, '2016-08-22'),
(12, 'gallery', 'svsdvsd', 'GOPR7604.JPG', 'upload/', 1, '2016-08-22'),
(13, 'gallery', 'new picture', 'x_b378bba1.jpg', 'upload/', 1, '2016-08-22'),
(14, 'gallery', 'kjdhfkjhdfkj', 'GOPR7503.JPG', 'upload/', 1, '2016-08-22'),
(15, 'gallery', 'csdcsdcs', 'GOPR7604.JPG', 'upload/', 1, '2016-08-22'),
(16, 'gallery', 'dcscdsd', 'docs.jpg', 'upload/', 1, '2016-08-22'),
(17, 'gallery', 'dcscdsd', 'docs.jpg', 'upload/', 1, '2016-08-22'),
(18, 'gallery', 'dcscdsd', 'docs.jpg', 'upload/', 1, '2016-08-22');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `pictures`
--
ALTER TABLE `pictures`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `pictures`
--
ALTER TABLE `pictures`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
