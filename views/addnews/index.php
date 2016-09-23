<?php

$file = ROOT.'templates/news_add/create_news.html';
$content = file_get_contents($file);

$navigation = new Navigation();
$nav_content = $navigation->createNavContent('addnews', '');
$content = str_replace('[navigation]', $nav_content, $content);

echo $content;