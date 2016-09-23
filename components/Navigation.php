<?php

class Navigation
{
    public function getLink($data, $current = '', $id = '')
    {
        if ($id !== '') {
            $link = ($current == $data['link']) ? '#' : (($data['description'] == 'popup') ? $id . $data['link'] : PATH . $data['link']);
        } else {
            $link = ($current == $data['link']) ? '#' : (($data['description'] == 'popup') ? $current . $data['link'] : PATH . $data['link']);
        }
        $class = ($data['class'] !== '') ? ' class="' . $data['class'] . '"' : ' class=""';

        return '<li' . $class . '><a href="' . $link . '">' . $data['title'] . '</a></li>';
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
            $nav_from_db[$i]['class'] = $row['class'];
            $i++;
        }
        $db->close();
        return $nav_from_db;
    }

    public function createNavContent($page, $id)
    {
        $navigation = $this->getNavigation();

        $navContent = '<nav class="main">
                            <label for="">
                                <img src="" alt="">
                                    <p>Логотип</p>
                            </label>
                            <div class="resize">
                            <menu class="nav">';
        foreach ($navigation as $nav) {
            if (($nav['grant'] == ADMIN_ACCESS)) {
                if (isset($_SESSION['user_access']) && $_SESSION['user_access'] == ADMIN_ACCESS) {
                    $navContent .= $this->getLink($nav, $page, $id);
                }
            }
            if (($nav['grant'] == USER_ACCESS)) {
                if (isset($_SESSION['user_access']) && ($_SESSION['user_access'] == USER_ACCESS || $_SESSION['user_access'] == ADMIN_ACCESS)) {
                    $navContent .= $this->getLink($nav, $page, $id);
                }
            }
            if (($nav['grant'] == INLOGIN)) {
                if (empty($_SESSION['user_access'])) {
                    $navContent .= $this->getLink($nav, $page, $id);
                }
            }
            if ($nav['grant'] == ANY_ACCESS) {
                $navContent .= $this->getLink($nav, $page, $id);
            }
        }
        $navContent .= '</menu></div>
                    </nav>';
        return $navContent;
    }
}