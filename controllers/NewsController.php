<?php

include_once(ROOT . 'models/News.php');

class NewsController
{

    public function actionIndex()
    {

        $newsList = News::getNewsList();
        echo '<pre>';
        var_export($newsList);
        echo '</pre>';
        require_once(ROOT . 'views/news/index.php');

        return true;

    }

    public function actionView($id)
    {
        if ($id) {
            $newsItem = News::getNewsItemById($id);
            echo '<pre>';
            print_r($newsItem);
            echo '</pre>';
            return true;
        }
        return true;

    }

}