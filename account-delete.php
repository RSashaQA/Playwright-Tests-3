<?php

$headers = array([
    "User-Agent" => '{"sdk":25,"version_name":"4.4.0","version_code":647,"platform":"android","device_id":"123123123","name":"YOUR_DEVICE_NAME","app":"com.infolink.limeiptv"} '
]);
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
foreach ($accs as $acc) {
    $ch = curl_init('https://pl.iptv2021.com/api/v4/login');
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($acc, '', '&'));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_HEADER, $headers);
    $html = curl_exec($ch);
    curl_close($ch);	
     
    echo $html;

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