<?php
session_start();

ini_set('display_errors', 1);
error_reporting(E_ALL);

define('ROOT', __DIR__.'/');
define('PATH', 'http://localhost/Hakaton/');
//echo ROOT;
//$_SESSION['user_access'] = 1;
//unset($_SESSION['user_access']);
require_once (ROOT.'components/Db.php');
require_once (ROOT.'components/Navigation.php');
require_once (ROOT.'components/Router.php');
require_once (ROOT.'config/const.php');
//echo '<br>';
//echo ROOT.'/components/Router.php';

$router = new Router();
$router->run();