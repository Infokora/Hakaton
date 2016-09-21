<?php

class Addevent
{
    public static function createEvent()
    {
        $db = Db::getConnection();
        $db->query("SET NAMES 'utf8'");

        if ($_FILES['image']['error'] == 0) {
            $file_destination = ROOT . 'images/events/' . $_FILES['image']['name'];
            if (move_uploaded_file($_FILES['image']['tmp_name'], $file_destination)) {
                $result = $db->query("INSERT INTO `events`
                        SET `title` = '{$_POST['title']}',
                            `date_from` = '{$_POST['date_from']}',
                            `date_to` = '{$_POST['date_to']}',
                            `author_name` = '{$_SESSION['current_user']}',
                            `short_content` = '{$_POST['short_content']}',
                            `content` = '{$_POST['content']}',
                            `preview` = 'images/events/{$_FILES['image']['name']}',
                            `type` = 'event'");
            }
        }
        $db->close();
        return $result;
    }
}