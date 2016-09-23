<?php

$file = ROOT.'templates/event_add/create_event.html';
$content = file_get_contents($file);

$navigation = new Navigation();
$nav_content = $navigation->createNavContent('addevent', '');
$content = str_replace('[navigation]', $nav_content, $content);

echo $content;