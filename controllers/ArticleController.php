<?php

class ArticleController
{
    public function actionWork(){
        $hi = 'Hello, it is CLASS: ArticleController; METHOD: actionWork';
        echo '<br>'.$hi.'<br>';

        return true;

    }
}