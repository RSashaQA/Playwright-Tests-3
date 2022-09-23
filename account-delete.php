<?php

$headers = [
    'User-Agent: {"sdk":25,"version_name":"4.4.0","version_code":647,"platform":"android","device_id":"123123123","name":"YOUR_DEVICE_NAME","app":"com.infolink.limeiptv"} '
];

$string_headers = implode($headers);

$server = "https://pl.iptv2021.com";

$curl = curl_init();

$response = curl_exec($curl);

$accs = [
    [
        "email" => "testdeleteme@test.test",
        "pass"  => "qqqqqq",
    ]
];

foreach ($accs as $acc) {

    curl_setopt_array($curl, array(
        CURLOPT_URL => ("$server/api/v1/login"),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS => array($acc),
        CURLOPT_HTTPHEADER => array($headers),
    ));
      
    if ($response["success"] && isset($response["token"])) {
        print "Login successful\n";
        print_r($response);
        print "\n";

        curl_setopt_array($curl, array(
            CURLOPT_URL => ("$server/api/v1/account-delete"),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
            CURLOPT_HTTPHEADER => array_merge(array($headers, ["X-Token" => $response["token"]]))
          ));

        if ($response["success"]) {
            print "Account deleting successful\n";
            print_r($response);
            print "\n";
        }
    }
    curl_close($curl);
    echo $response;
}