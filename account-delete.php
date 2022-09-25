
<?php 

$headers = [
    "User-Agent" => '{"sdk":25,"version_name":"4.4.0","version_code":647,"platform":"android","device_id":"123123123","name":"YOUR_DEVICE_NAME","app":"com.infolink.limeiptv"}'
];

$server = "https://pl.iptv2021.com";

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
   
      $ch = curl_init($server.'api/v1/login');
      curl_setopt($ch, CURLOPT_POST, 1);
      curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($acc, '', '&'));
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
      curl_setopt($ch, CURLOPT_HEADER, $headers);
      $html = curl_exec($ch);
      curl_close($ch);
    echo $html;

    // $response = \user\bin\Curl::init("$server/api/v1/login", $acc, "POST", "json", $headers);
    // if (\user\bin\Curl::code() == 200 && $response && $response["success"] && isset($response["token"])) {
    //     print "Login successful\n";
    //     print_r($response);
    //     print "\n";

    //     $response = \user\bin\Curl::init("$server/api/v1/account-delete", [], "GET", "json", array_merge($headers, ["X-Token" => $response["token"]]));

    //     if (\user\bin\Curl::code() == 200 && $response) {
    //         print "Account deleting successful\n";
    //         print_r($response);
    //         print "\n";
    //     }
    // }
}