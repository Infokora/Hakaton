<?php

$file = './data/blog.json';
$data = getContent($file);
$content = getTemplate();
$content = parseNavigation($content, $navContent);
$articles = '';

if (isset($_GET['article_id'])) {


    if (isset($data['page_content'])) {
        $file = './template/article.tpl';
        $id = $_GET['article_id'] - 1;

        $tpl = getTpl($file);
        $article = $data['page_content']['field_'.($id+1)];
        $tpl = str_replace("[article_title]", $article['title'], $tpl);
        $tpl = str_replace("[article_date]", $article['date'], $tpl);
        $tpl = str_replace("[article_author]", $article['author'], $tpl);
        $tpl = str_replace("[article_text]", $article['text'], $tpl);
        $tpl = str_replace("[article_url]", 'blog-'.($id+1).'.html', $tpl);
        $articles.= $tpl;

        $content = parseAdditional($content, $articles);
    }

    $content = parseContent($content, $data);

} else {
    $redirect = 'blog.html';
}