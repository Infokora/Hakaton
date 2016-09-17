<?php

class Router
{
    private $routes;
    public $uri;

    /*
     * include file "routes.php" from folder "config" with array inside
     * */
    public function __construct()
    {
        $routesPath = ROOT . 'config/routes.php';
        $this->routes = include($routesPath);
    }


    /*
     * return String from request field
     * */
    private function getURI()
    {

        if (!empty($_SERVER['REQUEST_URI'])) {
            $this->uri = str_replace('Hakaton/', '', $_SERVER['REQUEST_URI']);
            $this->uri = trim($this->uri, '/');
            return $this->uri;
        }
    }


    public function run()
    {
        $uri = $this->getURI();
//        var_dump($this->routes);
//        echo $uri;

        foreach ($this->routes as $uriPattern => $path) {
            if (preg_match("/$uriPattern/", $uri))
            {
                echo "EXIST, EXECUTING";
            }
//            echo $uriPattern.'<br>';
//            echo $path.'<br>';
        }


    }

}