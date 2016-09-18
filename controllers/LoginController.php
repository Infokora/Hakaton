<?php

include_once(ROOT . 'models/Login.php');

class LoginController
{
    public function actionIndex(){

    //        echo '<pre>';
    //        var_export($_POST);
    //        echo '</pre>';
    //        $user = Login::getUserFromBase($_POST['log_in']);
    //        echo '<pre>';
    //        var_export($user);
    //        echo '</pre>';

        if (isset($_POST['log_in']) && isset($_POST['pass_in'])) {
            $user = Login::getUserFromBase($_POST['log_in']);
            if ($_POST['log_in'] == $user['login'] && !empty($user)) {
                if (md5($_POST['pass_in']) == $user['password']) {
                    $_SESSION['user_access'] = $user['grant'];
                }
            }
        }


        require_once(ROOT . 'views/login/index.php');

        return true;

    }
}