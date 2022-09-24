<?php

$accs = [
    [
        'email' => 'testdeleteme@test.test',
        'pass'  => 'qqqqqq',
    ],
    [
        'email' => 'sdkfsdgklj2@mail.com',
        'pass'  => 'sdfhsdklj',
    ],
];

$post_data = [ // поля нашего запроса
    'email' => 'testdeleteme@test.test',
    'pass'  => 'qqqqqq',
];

foreach ($accs as $acc) {

    $url = 'https://pl.iptv2021.com/api/v4/login'; // url, на который отправляется запрос
    
    $headers = ["User-Agent" => '{"sdk":25,"version_name":"4.4.0","version_code":647,"platform":"android","device_id":"123123123","name":"YOUR_DEVICE_NAME","app":"com.infolink.limeiptv"} ']; // заголовки запроса
    
    $post_data = http_build_query($post_data);
    
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_VERBOSE, 1);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $post_data);
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_POST, true); // true - означает, что отправляется POST запрос
    
    $result = curl_exec($curl);
    curl_close($ch);


    // $ch = curl_init('https://pl.iptv2021.com/api/v4/login');
    // curl_setopt($ch, CURLOPT_POST, 1);
    // curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($acc, '', '&'));
    // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    // curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    // curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    // $html = curl_exec($ch);
    // curl_close($ch);	
     
    // echo $html;

    // if ($server_output == "OK") {
    //     print "Login successful\n";
    //     print_r($response);
    //     print "\n";

        // $response = \common\helpers\Curl::init("$server/api/v1/account-delete", [], "GET", "json", array_merge($headers, ["X-Token" => $response["token"]]));

        // if (\usr\bin\Curl::code() == 200 && $response) {
        //     print "Account deleting successful\n";
        //     print_r($response);
        //     print "\n";
        //}
    }

// <?php
// //
// // A very simple PHP example that sends a HTTP POST to a remote site
// //
// $ch = curl_init();
// curl_setopt($ch, CURLOPT_URL,"http://www.example.com/tester.phtml");
// curl_setopt($ch, CURLOPT_POST, 1);
// curl_setopt($ch, CURLOPT_POSTFIELDS,
//             "postvar1=value1&postvar2=value2&postvar3=value3");
// // In real life you should use something like:
// // curl_setopt($ch, CURLOPT_POSTFIELDS,
// //          http_build_query(array('postvar1' => 'value1')));
// // Receive server response ...
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// $server_output = curl_exec($ch);
// curl_close ($ch);
// // Further processing ...
// if ($server_output == "OK") { ... } else { ... }
// ?>