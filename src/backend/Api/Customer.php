<?php
    // echo "Get";
    
    header('Access-Cross-Allow-Origin: GET, POST');
    header('Access-Cross-Allow-Origin: X-Requested-With');
    header("Access-Control-Allow-Headers: *");
    header('Access-Cross-Allow-Origin: *');

    $method= $_SERVER['REQUEST_METHOD'];
    // echo $method;

    switch($method){
        case 'GET':{
            echo $method;
echo 1;

            break;
        }


        case 'POST':{
            echo $method;
            echo 1;

            break;
        }

        
    }


?>