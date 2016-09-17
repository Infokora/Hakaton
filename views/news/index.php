<?php


$file = ROOT.'templates/news/template.html';

$content = file_get_contents($file);


foreach ($newsList as $news){
    $tpl = file_get_contents(ROOT.'templates/news/news.tpl');
    $tpl = str_replace('[title]', $news['title'], $tpl);
    $tpl = str_replace('[short_content]', $news['short_content'], $tpl);
    $tpl = str_replace('[author_name]', $news['author_name'], $tpl);
    $content = str_replace('text'.$news['id'], $tpl, $content);
}
//$content = file_get_contents($file);

//echo '<pre>';
//var_export($newsList);
//echo '</pre>';
echo $content;