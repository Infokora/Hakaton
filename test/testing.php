<?php

$string = date('d-m-Y');
echo $string.'<br>';

$pattern = '/([0-9]{2})-([0-9]{2})-([0-9]{4})/';

$replace = 'Year: $3, month: $2, day: $1';

echo preg_replace($pattern, $replace, $string);