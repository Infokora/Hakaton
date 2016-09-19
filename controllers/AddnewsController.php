<?php

include_once(ROOT . 'models/Addnews.php');

class AddnewsController
{

    public function actionIndex()
    {

        require_once(ROOT . 'views/addnews/index.php');

        return true;
    }

    public function actionRecord()
    {

        if (isset($_POST)) {
            if (!empty($_POST['title']) && !empty($_POST['short_content']) && !empty($_POST['content'])) {
                Addnews::createNews();
                echo 'All is done, Boss';
            } else {
                echo 'NooooO!';
            }

        }
        return true;
    }
}