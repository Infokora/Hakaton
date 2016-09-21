<?php

return array(
    'index.php' => 'home/index',
    'news/([0-9]+)' => 'news/view/$1',
    'news' => 'news/index',
    'home' => 'home/index',
    'login' => 'login/index',
    'registration' => 'login/registration',
    'out' => 'login/out',
    'addnews' => 'addnews/index',
    'record' => 'addnews/record',
    'events' => 'events/index',
    'addevent' => 'addevent/index',
    'create_event' => 'addevent/create',
    '' => 'home/index',
);
//    '' => 'home/index',
