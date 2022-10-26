<?php

$useragent = '{"sdk":25,"version_name":"4.4.0","version_code":647,"platform":"android","device_id":"123123123","name":"YOUR_DEVICE_NAME","app":"com.infolink.limeiptv"}';

$server = "https://pl.iptv2021.com";

$accs = [
    [
        'email' => 'testdeletemewebkitfav@test.test',
        'password' => 'qqqqqq',
    ],
    [
        'email' => 'testdeletemechromiumfav@test.test',
        'password' => 'qqqqqq',
    ],
    [
        'email' => 'testdeletemefirefoxfav@test.test',
        'password' => 'qqqqqq',
    ],
    [
        'email' => 'testdeleteme@test.test',
        'password' => 'qqqqqq',
    ],
    [
        'email' => 'testdeletemepassweb@test.test',
        'password' => 'wwwwww',
    ],
    [
        'email' => 'testdeletemepassfire@test.test',
        'password' => 'wwwwww',
    ],
    [
        'email' => 'testdeletemepasschro@test.test',
        'password' => 'wwwwww',
    ],
    [
        'email' => 'testdeletemepassweb@test.test',
        'password' => 'qqqqqq',
    ],
    [
        'email' => 'testdeletemepassfire@test.test',
        'password' => 'qqqqqq',
    ],
    [
        'email' => 'testdeletemepasschro@test.test',
        'password' => 'qqqqqq',
    ],
    [
        'email' => 'testdeletemRegWeb@test.test',
        'password' => 'qqqqqq',
    ],
    [
        'email' => 'testdeletemRegFire@test.test',
        'password' => 'qqqqqq',
    ],
    [
        'email' => 'testdeletemRegChro@test.test',
        'password' => 'qqqqqq',
    ],
];


foreach ($accs as $acc) {
    $ch = curl_init($server . '/api/v1/login');
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($acc));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt($ch, CURLOPT_HEADER, 1);
    curl_setopt($ch, CURLOPT_USERAGENT, $useragent);
    $html = curl_exec($ch);
    //if ($html !== false) {
        $ch_info = curl_getinfo($ch);
        $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $header = substr($html, 0, $ch_info['header_size']);
        $html = substr($html, $ch_info['header_size']);
    //}
    $data = json_decode($html, true);
    curl_close($ch);

    if ($http_code == 200) {
        $ch_delete = curl_init($server . '/api/v1/account-delete');
        curl_setopt($ch_delete, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch_delete, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch_delete, CURLOPT_HTTPHEADER, ['X-Token: ' . $data['token']]);
        curl_setopt($ch_delete, CURLOPT_USERAGENT, $useragent);
        $html = curl_exec($ch_delete);
        $httpcode = curl_getinfo($ch_delete, CURLINFO_HTTP_CODE);
        print_r($html. ' '. $acc['email']);
        print "\n";
        curl_close($ch_delete);
        //         if ($httpcode == 200) {
        //         print "Account deleting successful\n";
        //             print_r($html);
        //             print "\n";
        // }
    }
}
