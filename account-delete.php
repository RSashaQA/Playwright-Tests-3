<?php

$useragent = '{"sdk":25,"version_name":"4.4.0","version_code":647,"platform":"android","device_id":"123123123","name":"YOUR_DEVICE_NAME","app":"com.infolink.limeiptv"}';

$server = "https://pl.iptv2021.com";

$accs = [
    [
        'email' => 'testdeleteme@test.test',
        'password'  => 'qqqqqq',
    ],
    [
        'email' => 'testdeletemewebkitfav@test.test',
        'password'  => 'qqqqqq',
    ],
    [
        'email' => 'testdeletemechromiumfav@test.test',
        'password'  => 'qqqqqq',
    ],
    [
        'email' => 'testdeletemefirefoxfav@test.test',
        'password'  => 'qqqqqq',
    ],
    // [
    //     'email' => 'testdeleteme90975862@test.test',
    //     'password'  => 'wwwwww',
    // ],
    // [
    //   'email' => 'testdeleteme438045974@test.test',
    //   'password'  => 'wwwwww',
    // ],
    // [
    // 'email' => '	testdeleteme695755178@test.test',
    // 'password'  => 'wwwwww',
    // ],
    // [
    // 'email' => 'testdeleteme@test.test',
    // 'password'  => 'wwwwww',
    // ],
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
    $data = json_decode($html, true);
    if ($data['token'] === null) {
        print_r($html);
        //     $ch_info = curl_getinfo($ch);
        //     $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        //     $header = substr($html, 0, $ch_info['header_size']);
        //     $html = substr($html, $ch_info['header_size']);
    }
    curl_close($ch);

    if ($http_code == 200 && $data['token']) {
        $ch_delete = curl_init($server . '/api/v1/account-delete');
        curl_setopt($ch_delete, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch_delete, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch_delete, CURLOPT_HTTPHEADER, ['X-Token: ' . $data['token']]);
        curl_setopt($ch_delete, CURLOPT_USERAGENT, $useragent);
        $html = curl_exec($ch_delete);
        $httpcode = curl_getinfo($ch_delete, CURLINFO_HTTP_CODE);
        print_r($html);
        curl_close($ch_delete);
        sleep(0.5);
        // if ($httpcode == 200) {
        //     //print "Account deleting successful\n";
        //     print_r($html);
        //     print "\n";
        // }
    }
}
