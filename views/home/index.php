<?php


$file = ROOT.'templates/home/template.html';
$content = file_get_contents($file);

$navigation = new Navigation();
$nav_content = $navigation->createNavContent('home', '');
$content = str_replace('[navigation]', $nav_content, $content);

$content = str_replace('[description]', $home_content, $content);

echo $content;