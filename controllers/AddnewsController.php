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

        echo '<pre>';
        var_export($_POST);
        echo '</pre>';

        echo '<pre>';
        var_export($_FILES);
        echo '</pre>';

        echo '<pre>';
        var_export($_SESSION);
        echo '</pre>';


        if (isset($_POST)) {
            if (!empty($_POST['title']) && !empty($_POST['short_content']) && !empty($_POST['content'])) {
                $resulting = (integer) Addnews::createNews();
                echo $resulting . ' is the result';
            } else {
                echo 'NooooO!';
            }
        }
//        header('Location: ' . PATH . $_POST['redirect']);
        return true;
    }
}