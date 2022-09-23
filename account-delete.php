<?php

$headers = [
    "User-Agent" => '{"sdk":25,"version_name":"4.4.0","version_code":647,"platform":"android","device_id":"123123123","name":"YOUR_DEVICE_NAME","app":"com.infolink.limeiptv"} '
];

$server = "https://pl.iptv2021.com";

$ch = curl_init();

$accs = [
    [
        "email" => "testdeleteme@test.test",
        "pass"  => "qqqqqq",
    ],
    [
        "email" => "sdkfsdgklj2@mail.com",
        "pass"  => "sdfhsdklj",
    ],
];

foreach ($accs as $acc) {
    $response = $ch("$server/api/v1/login", $acc, "POST", "json", $headers);
    if ($ch() == 200 && $response && $response["success"] && isset($response["token"])) {
        print "Login successful\n";
        print_r($response);
        print "\n";

        $response = $ch("$server/api/v1/account-delete", [], "GET", "json", array_merge($headers, ["X-Token" => $response["token"]]));

        if ($ch() == 200 && $response) {
            print "Account deleting successful\n";
            print_r($response);
            print "\n";
        }
    }
}

curl_close($ch);