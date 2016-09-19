<?php

$file1 = ROOT . 'templates/news/template_for_single.html';
$content = file_get_contents($file1);

$file2 = ROOT . 'templates/news/single_news.tpl';
$single_news = file_get_contents($file2);

$navigation = new Navigation();
$nav_content = $navigation->createNavContent('news');
$content = str_replace('[navigation]', $nav_content, $content);

$single_news = str_replace('[src]', '../'.$newsItem['preview'], $single_news);
$single_news = str_replace('[title]', $newsItem['title'], $single_news);
$single_news = str_replace('[content]', $newsItem['content'], $single_news);
$single_news = str_replace('[date]', $newsItem['date'], $single_news);
$single_news = str_replace('[author_name]', $newsItem['author_name'], $single_news);
$single_news = str_replace('[get_back_ref]', PATH . 'news', $single_news);
$content = str_replace('[single_news]', $single_news, $content);

echo $content;