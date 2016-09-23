-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Сен 23 2016 г., 09:04
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
-- Структура таблицы `news`
--

CREATE TABLE `news` (
  `id` tinyint(4) NOT NULL,
  `title` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `short_content` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `author_name` varchar(64) NOT NULL,
  `preview` varchar(255) NOT NULL,
  `type` varchar(64) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `news`
--

INSERT INTO `news` (`id`, `title`, `date`, `short_content`, `content`, `author_name`, `preview`, `type`) VALUES
(1, 'Swimming with dolphins may be banned', '2016-08-31', 'Authorities in Hawaii are proposing a ban on the popular tourist activity of swimming with dolphins off the Hawaiian coast.', 'CONTENT of article 1', 'David', 'images/news/1.jpg', 'NewsPublication'),
(2, 'Colombia and FARC rebels sign peace deal', '2016-08-28', 'Colombias government signed a peace deal with the rebel group FARC. The deal ends 52 years of fighting.', 'CONTENT of article 2', 'April', 'images/news/2.jpg', 'NewsPublication'),
(3, 'Study shows there are two divorce seasons', '2016-08-25', 'Couples might want to put a little extra effort into their marriage just before March and August every year.', 'CONTENT of article 3', 'George', 'images/news/3.jpg', 'ArticlePublication'),
(4, 'What the 5,300-year-old Iceman wore', '2016-08-22', 'Scientists studied the pieces of material that were on the body of a man who died in Europe 5,300 years ago.', 'CONTENT of article 4', 'Mikel', 'images/news/4.jpg', 'ArticlePublication'),
(5, 'July was hottest month in recorded history', '2016-08-19', 'It is official – July was the hottest month on Earth since scientists started recording the planets temperatures.', 'CONTENT of article 5', 'Sonia', 'images/news/5.jpg', 'PhotoReportPublication'),
(6, 'Slain black youth''s BB gun called ''almost identical'' to real weapon', '2016-09-18', 'COLUMBUS, Ohio (Reuters) - The mayor of Columbus, Ohio, said on Friday that the air pistol brandished at police by a black, 13-year-old boy as he was shot dead by a white officer this week was nearly indistinguishable from weapons carried by members of th', 'COLUMBUS, Ohio (Reuters) - The mayor of Columbus, Ohio, said on Friday that the air pistol brandished at police by a black, 13-year-old boy as he was shot dead by a white officer this week was nearly indistinguishable from weapons carried by members of the city''s police force.  Mayor Andrew Ginther appeared with Police Chief Kim Jacobs for a tense community meeting of more than 200 people, most of them African-American, who were invited to ask questions of city officials at the church gathering for just over an hour.  But Ginther and Jacobs, who are both white, along with the city''s public safety director, Ned Pettus, who is black, had few new details to offer about circumstances leading to the fatal shooting on Wednesday of Tyre King.  The officials appealed for patience on the part of the public while investigations of the incident continue.', 'By Tyler Behm', 'images/news/6.jpg', 'article'),
(7, 'Ohio police officers indicted in shooting death and beating case', '2016-09-17', 'CLEVELAND (Reuters) - A Cleveland police officer was indicted for negligent homicide in the shooting death of an unarmed black man on Friday and two former officers in nearby East Cleveland were indicted for kidnapping and assault for beating a black man ', 'CLEVELAND (Reuters) - A Cleveland police officer was indicted for negligent homicide in the shooting death of an unarmed black man on Friday and two former officers in nearby East Cleveland were indicted for kidnapping and assault for beating a black man who was under arrest.\r\n\r\nThe indictments by a Cuyahoga County grand jury came amid increased scrutiny of the use of force by police in Ohio, where an officer in Columbus this week shot and killed a thirteen-year-old who was carrying a pellet gun.\r\n\r\nIn the Cleveland case, officer Alan Buford, who is black, was indicted for misdemeanor negligent homicide in the 2015 death of unarmed-breaking and entering suspect Brandon Jones, 18, Cuyahoga County Prosecutor Timothy J. McGinty said in a statement Friday.', 'By Kim Palmer', 'images/news/7.jpg', 'article'),
(8, 'Florida man found guilty of attempted murder of George Zimmerman: reports', '2016-09-19', 'ORLANDO, Fla. (Reuters) - A Florida man was found guilty on Friday of attempted murder for shooting at George Zimmerman during a roadside confrontation with the ex-neighborhood watch captain widely known for killing unarmed black teenager Trayvon Martin, ', 'ORLANDO, Fla. (Reuters) - A Florida man was found guilty on Friday of attempted murder for shooting at George Zimmerman during a roadside confrontation with the ex-neighborhood watch captain widely known for killing unarmed black teenager Trayvon Martin, local media reported.\r\nMatthew Apperson, 37, who according to prosecutors has a history of mental illness, was convicted in a jury trial in the Orlando suburb of Sanford, Florida, according to accounts by the Orlando Sentinel newspaper and 24-hour Orlando television news channel News 13.\r\nA Sanford jury in 2013 acquitted Zimmerman, 32, of murder in the fatal 2012 shooting of 17-year-old Martin, a case that helped spark the Black Lives Matter movement and overshadowed both Apperson''s prosecution and his defense.', 'Barbara Liston', 'images/news/8.jpg', 'article'),
(9, 'Breaking news', '2016-09-20', 'The wolf has gone crazy!', 'This one wolf is really out of his mind! He has said wooooooooooo to the moon!', 'Roma Slobodeniuk', 'images/news/vPWn2BYuQ3Q.jpg', 'article'),
(10, 'Экстренные новости!', '2016-09-21', 'Ассассин убивает Тамплиеров!', 'Ассассин убил Тамплиера прям среди бегого дня на площади!', 'Roma Slobodeniuk', 'images/news/2762.jpg', 'article'),
(11, 'Новости на западе!', '2016-09-21', 'Они свободно разгуливают улицами городов...', 'Пик влияния хашшашинов приходится на конец XII века. Это связано с возвышением государства турок-мамлюков во главе с султаном Юсуфом ибн Айюбом по прозвищу «Салах ад-Дин»[16]. С лёгкостью захватив прогнивший Фатимидский халифат, с которым у крестоносцев был заключён длительный мирный договор, Салах ад-Дин объявил себя единственным истинным защитником ислама. Отныне ближневосточным христианским государствам крестоносцев угрожала опасность с юга. Длительные переговоры с Салах ад-Дином, который видел своё предназначение в том, чтобы изгнать христиан с мусульманского Востока, не привели к существенным результатам. С 1171 года для крестоносцев начинается тяжелейший период войн с Салах ад-Дином. На этот раз над Иерусалимом, оплотом христианства на Ближнем Востоке, нависла неминуемая угроза…', 'Roma Slobodeniuk', 'images/news/243763.jpg', 'article'),
(12, 'Наконец-то дождались!', '2016-09-21', 'Госслужащие получили зарплату !', 'Госслужащие получили крошечную зарплату!', 'Roma Slobodeniuk', 'images/news/10-dollary-makro-oboi-1366x768.jpg', 'article');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `short_content` (`short_content`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `news`
--
ALTER TABLE `news`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
