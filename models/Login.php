<?php

class Login
{
    public static function getUserFromBase($user)
    {
        $db = Db::getConnection();
        $db->query("SET NAMES 'utf8'");

        $result = $db->query("SELECT * FROM `users` WHERE `login` = '$user'");
        $get_user = $result->fetch_assoc();

        $db->close();
        return $get_user;
    }

//    public static function get($user)
//    {
//        return $user;
//
//    }
}