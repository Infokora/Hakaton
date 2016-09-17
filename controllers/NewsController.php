<?php

class NewsController
{

    public function actionIndex(){
        $hi = 'Hello, it is CLASS: NewsController; METHOD: actionIndex';
        echo '<br>'.$hi.'<br>';
        return true;

    }

    public function actionView($category, $id){
        echo '<br>'.$category;
        echo '<br>'.$id;
        return true;
    }

}