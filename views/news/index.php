<?php


$file = ROOT.'templates/news/template.html';

$content = file_get_contents($file);
$navigation = new Navigation();

$nav_content = $navigation->createNavContent('news', '');

$content = str_replace('[navigation]', $nav_content, $content);

foreach ($newsList as $news){
    $tpl = file_get_contents(ROOT.'templates/news/news.tpl');
    $tpl = str_replace('[src]', $news['preview'], $tpl);
    $tpl = str_replace('[title]', $news['title'], $tpl);
    $tpl = str_replace('[short_content]', $news['short_content'], $tpl);
    $tpl = str_replace('[author_name]', $news['author_name'], $tpl);
    $tpl = str_replace('[date]', $news['date'], $tpl);
    $tpl = str_replace('[read_more_ref]', PATH.'news/'.$news['id'], $tpl);
    $content = str_replace('text0'.$news['id'], $tpl, $content);
}

echo $content;