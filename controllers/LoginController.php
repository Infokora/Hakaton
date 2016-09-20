<?php

include_once(ROOT . 'models/Login.php');

class LoginController
{
    public function actionIndex()
    {

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
                    $_SESSION['current_user'] = $user['FIO'];
                }
            }
        }

        require_once(ROOT . 'views/login/index.php');

        return true;
    }

    public function actionOut()
    {

        unset($_SESSION['user_access']);
        header('Location: ' . PATH . 'home');

        return true;
    }

    public function actionRegistration()
    {
        echo 'Hello, this is the LoginController --> actionRegistration';
        echo '<pre>';
        var_export($_POST);
        echo '</pre>';

        if (isset($_POST)) {
            if (!empty($_POST['user_name']) && !empty($_POST['user_login']) &&
                !empty($_POST['password_1']) && !empty($_POST['password_2']) &&
                !empty($_POST['user_email']) && !empty($_POST['user_country']) &&
                !empty($_POST['user_phone'])
            ) {
                $user = Login::getUserFromBase($_POST['user_login']);
                $user_email = Login::getUserEmailFromBase($_POST['user_email']);
                if (empty($user) && empty($user_email)) {
                    $insertion = Login::insertUser();
                    if ($insertion) {

                        echo '<h1>SUCCESS!</h1>';
                    } else {
                        echo '<h1>FAIL to insert the data of a new USER</h1>';
                    }

                } else {
                    echo '<h1>FAIL! - Such User Login or Email is already exist</h1>';
                }
            }
        }
//        unset($_SESSION['user_access']);
        header('Location: '. PATH. $_POST['redirect']);

        return true;
    }

}