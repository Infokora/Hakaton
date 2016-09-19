<?php

class News
{

    public static function getNewsItemById($id)
    {
        $id = intval($id);
        $newsItem = '';
        if ($id) {
            $db = Db::getConnection();
            $db->query("SET NAMES 'utf8'");

            $result = $db->query("SELECT * FROM `news` WHERE `id` = $id");
            $newsItem = $result->fetch_assoc();

            $db->close();
        }
        return $newsItem;
    }

    public static function getNewsList()
    {
        $db = Db::getConnection();
        $db->query("SET NAMES 'utf8'");

        $newsList = array();

        $result = $db->query("SELECT `id`, `title`, `date`, `short_content`, `author_name`, `preview` FROM `news` ORDER BY `date` DESC LIMIT 10");

        $i = 0;
        while ($row = $result->fetch_assoc()) {
            $newsList[$i]['id'] = $row['id'];
            $newsList[$i]['title'] = $row['title'];
            $newsList[$i]['date'] = $row['date'];
            $newsList[$i]['short_content'] = $row['short_content'];
            $newsList[$i]['author_name'] = $row['author_name'];
            $newsList[$i]['preview'] = $row['preview'];
            $i++;
        }
        $db->close();

        return $newsList;
    }
}