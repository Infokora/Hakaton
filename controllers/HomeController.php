<?php

include_once(ROOT . 'models/Home.php');

class HomeController
{
    public function actionIndex()
    {
        echo '<pre>';
        var_export($_POST);
        echo '</pre>';

        $home_content = Home::getHomeContent();

        require_once(ROOT . 'views/home/index.php');

        return true;
    }
}