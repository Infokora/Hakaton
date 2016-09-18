<?php

class Navigation
{
    public function getLink($data, $current = '')
    {
        if ($data['link'] == 'Связь с нами') {
            $active = ' class="' . (($current == $data['link']) ? 'active' : '') . ' connect"';
            return '<li' . $active . '><a href="'. PATH . $data['link'] . '">' . $data['title'] . '</a></li>';
        } elseif ($data['link'] == 'Вход') {
            $active = ' class="' . (($current == $data['link']) ? 'active' : '') . ' log_animate"';
            return '<li' . $active . '><a href="' . PATH . $data['link'] . '">' . $data['title'] . '</a></li>';
        } else {
            $active = ' class="' . (($current == $data['link']) ? 'active' : '') . '"';
            return '<li' . $active . '><a href="' . PATH . $data['link'] . '">' . $data['title'] . '</a></li>';
        }
    }

    public function getNavigation()
    {
        $db = Db::getConnection();
        $db->query("SET NAMES 'utf8'");
        $result = $db->query("SELECT * FROM `pages` WHERE `active` = 1");

        $nav_from_db[] = '';
        $i = 0;
        while ($row = $result->fetch_assoc()) {
            $nav_from_db[$i]['id'] = $row['id'];
            $nav_from_db[$i]['title'] = $row['title'];
            $nav_from_db[$i]['link'] = $row['link'];
            $nav_from_db[$i]['description'] = $row['description'];
            $nav_from_db[$i]['active'] = $row['active'];
            $nav_from_db[$i]['grant'] = $row['grant'];
            $i++;
        }
        $db->close();
        return $nav_from_db;
    }

    public function createNavContent($page)
    {
        $navigation = $this->getNavigation();

        $navContent = '<nav class="navbar navbar-default"><div class="container-fluid"><menu class="nav navbar-nav">';
        foreach ($navigation as $nav) {
            if (($nav['grant'] == ACCESS)) {
                if (isset($_SESSION['user_access']) && $_SESSION['user_access'] == ACCESS) {
                    $navContent .= $this->getLink($nav, $page);
                }
            }
            if (($nav['grant'] == INLOGIN)) {
                if (empty($_SESSION['user_access'])) {
                    $navContent .= $this->getLink($nav, $page);
                }
            }
            if ($nav['grant'] == ANY_ACCESS) {
                $navContent .= $this->getLink($nav, $page);
            }
        }
        $navContent .= '</menu></div></nav>';
        return $navContent;
    }
}