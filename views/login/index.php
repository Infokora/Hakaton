<?php


$file = ROOT.'templates/login/template.html';
$tpl = ROOT.'templates/login/description.tpl';
$content = file_get_contents($file);
$description =  file_get_contents($tpl);


$navigation = new Navigation();
$nav_content = $navigation->createNavContent('login');

$content = str_replace('[navigation]', $nav_content, $content);
$content = str_replace('[description]', $description, $content);

echo $content;