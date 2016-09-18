<?php

class Navigation
{
    function getLink ($data, $current = '') {
        $active = ' class="' . (($current.'.html' == $data['link']) ? 'active' : '') .'"';
        return '<li'.$active.'><a href="' . $data['link'] . '">' . $data['title'] . '</a></li>';
    }

    function getNavigation () {
        $sql = "SELECT * FROM pages WHERE active = 1";
        return DB_get_all($sql);
    }

    function createNavContent ($page) {
        $navigation = getNavigation();

        $navContent = '<nav class="navbar navbar-default"><div class="container-fluid"><menu class="nav navbar-nav">';
        foreach ($navigation as $nav) {
            if (($nav['grant'] == ACCESS)) {
                if (isset($_SESSION['user_access']) && $_SESSION['user_access'] == ACCESS) {
                    $navContent .= getLink($nav, $page);
                }
            }
            if (($nav['grant'] == INLOGIN)) {
                if (empty($_SESSION['user_access'])) {
                    $navContent .= getLink($nav, $page);
                }
            }
            if ($nav['grant'] == ANY_ACCESS) {
                $navContent .= getLink($nav, $page);
            }

        }
        $navContent.= '</menu></div></nav>';
        return $navContent;
    }
}