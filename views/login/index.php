<?php


$file = ROOT.'templates/login/template.html';
$content = file_get_contents($file);

$navigation = new Navigation();
$nav_content = $navigation->createNavContent('login');

$content = str_replace('[navigation]', $nav_content, $content);

echo $content;