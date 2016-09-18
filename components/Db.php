<?php


class Db
{
    public static function getConnection(){
        $paramsPath = ROOT. 'config/db_params.php';
        $params = include ($paramsPath);

        $db = new mysqli($params['host'], $params['user'], $params['password'], $params['dbname']);
        return $db;
    }
}