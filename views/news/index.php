<?php


$file = ROOT.'templates/template.html';

$content = file_get_contents($file);

echo $content;