<?php

class ProductController
{
    public function actionList(){
        $hi = 'Hello, it is CLASS: ProductController; METHOD: actionList';
        echo '<br>'.$hi.'<br>';
        return true;

    }
}