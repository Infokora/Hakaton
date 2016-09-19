<?php

class Addnews
{

    public static function createNews()
    {
        $db = Db::getConnection();
        $db->query("SET NAMES 'utf8'");

        if ($_FILES['image']['error'] == 0) {

        }
        $file_destination = ROOT . 'images/news/' . $_FILES['image']['name'];
        if (move_uploaded_file($_FILES['image']['tmp_name'], $file_destination)) {
            $db->query("INSERT INTO `news`
                        SET `title` = '{$_POST['title']}',
                            `date` = NOW(),
                            `short_content` = '{$_POST['short_content']}',
                            `content` = '{$_POST['content']}',
                            `author_name` = '{$_SESSION['current_user']}',
                            `preview` = 'images/news/{$_FILES['image']['name']}',
                            `type` = 'article'");
        }
        $db->close();

    }


    public static function getNewsList()
    {
//        $db = Db::getConnection();
//        $db->query("SET NAMES 'utf8'");
//
//        $newsList = array();
//
//        $result = $db->query("SELECT `id`, `title`, `date`, `short_content`, `author_name`, `preview` FROM `news` ORDER BY `date` DESC LIMIT 10");
//
//        $i = 0;
//        while ($row = $result->fetch_assoc()) {
//            $newsList[$i]['id'] = $row['id'];
//            $newsList[$i]['title'] = $row['title'];
//            $newsList[$i]['date'] = $row['date'];
//            $newsList[$i]['short_content'] = $row['short_content'];
//            $newsList[$i]['author_name'] = $row['author_name'];
//            $newsList[$i]['preview'] = $row['preview'];
//            $i++;
//        }
//        $db->close();

//        return $newsList;
    }
}