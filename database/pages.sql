-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Сен 18 2016 г., 09:31
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
-- Структура таблицы `pages`
--

CREATE TABLE `pages` (
  `id` int(11) UNSIGNED NOT NULL,
  `title` varchar(64) DEFAULT NULL,
  `link` varchar(64) DEFAULT NULL,
  `description` text,
  `active` tinyint(1) DEFAULT '1',
  `grant` tinyint(1) DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `pages`
--

INSERT INTO `pages` (`id`, `title`, `link`, `description`, `active`, `grant`) VALUES
(1, 'Home', 'home.html', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel auctor nulla. Nulla porttitor tempus metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut nibh augue, tristique sit amet turpis ut, pretium venenatis massa. Aliquam sit amet arcu lacus. Nulla sollicitudin nunc vel magna ullamcorper dapibus. Etiam lacinia dolor in sapien egestas, quis consectetur justo egestas. ', 1, 0),
(8, 'Polish', 'polish.html', 'My Polish words', 1, 1),
(9, 'Temp', 'temp.html', 'tmp', 0, 0),
(2, 'Blog', 'blog.html', 'Breaking News', 1, 0),
(3, 'Contact Us', 'contact.html', 'Contact Us', 1, 0),
(4, 'Testimonial', 'testimonial.html', 'Testimonial', 1, 0),
(5, 'Gallery', 'gallery.html', 'Gallery', 1, 1),
(6, 'Login', 'login.html', 'login\n', 1, 2),
(7, 'Logout', 'login.html?action=signout', 'Logout', 1, 1);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
