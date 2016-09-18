<?php

include_once(ROOT . 'models/Home.php');

class HomeController
{
    public function actionIndex()
    {

        $home_content = Home::getHomeContent();

        require_once(ROOT . 'views/home/index.php');

        return true;
    }
}