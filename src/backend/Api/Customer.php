<?php
    
    header("Access-Control-Allow-Headers: *");
    header('Access-Cross-Allow-Origin: GET, POST');
    header('Access-Cross-Allow-Origin: X-Requested-With');
    header('Access-Cross-Allow-Origin: *');

    $method= $_SERVER['REQUEST_METHOD'];
    

    switch($method){
        case 'GET':{


            break;
        }


        case 'POST':{

            break;
        }

        
    }


?>