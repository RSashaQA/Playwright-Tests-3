pipeline {
  agent any
  stages {
    stage('prepare workspace') {
      steps {
        sh '''
          rm -rf $WORKSPACE/allure-results
          npm i -D @playwright/test
          npx playwright install
          npm i -D experimental-allure-playwright
          npm i -D allure-commandline
          npm i -D fs-extra
        '''
      }
    }
    // stage('account manage') {
    //   steps {
    //   sh '''
    //     curl --location --request POST 'https://pl.iptv2021.com/api/v4/login' \
    //     --header 'User-Agent: {"platform":"web","app":"limehd.tv"}' \
    //     --header 'Cookie: advanced-frontend=83ef94f5f9d0c5d316d8634c85ef3cb7' \
    //     --form 'email="testdeleteme@test.test"' \
    //     --form 'password="qqqqqq"'
    //   '''
    //   sh '''
    //   curl --location --request GET 'https://pl.iptv2021.com/api/v1/account-delete' \
    //   --header 'User-Agent: {"platform":"web","app":"limehd.tv"}' \
    //   --header 'Cookie: advanced-frontend=83ef94f5f9d0c5d316d8634c85ef3cb7'
    //   '''
    //   }
    // }
    stage('test') {
      steps {
        sh '''
          npx playwright test login.spec.js --reporter=line,experimental-allure-playwright --workers 8
        '''
        } 
      }
    stage('clear testing data') {
      steps {
        sh '''
curl --location --request POST 'https://pl.iptv2021.com/api/v4/login' \
--header 'User-Agent: {"sdk":25,"version_name":"4.4.0","version_code":647,"platform":"android","device_id":"123123123","name":"YOUR_DEVICE_NAME","app":"com.infolink.limeiptv"} ' \
--header 'Cookie: _id_auto_l=5c2648659ac9a5c76f8456adc28345f393fc61af8e5b9b75067cd4dff0194fdea%3A2%3A%7Bi%3A0%3Bs%3A10%3A%22_id_auto_l%22%3Bi%3A1%3Bs%3A22%3A%22%5B654305%2Cfalse%2C2592000%5D%22%3B%7D; advanced-frontend=b7a307b7b6424e1823919acc71bc00a9' \
--form 'email="testdeleteme@test.test"' \
--form 'password="qqqqqq"'

curl --location --request GET 'https://pl.iptv2021.com/api/v1/account-delete' \
--header 'User-Agent: {"sdk":25,"version_name":"4.4.0","version_code":647,"platform":"android","device_id":"123123123","name":"YOUR_DEVICE_NAME","app":"com.infolink.limeiptv"} ' \
--header 'Cookie: _id_auto_l=5c2648659ac9a5c76f8456adc28345f393fc61af8e5b9b75067cd4dff0194fdea%3A2%3A%7Bi%3A0%3Bs%3A10%3A%22_id_auto_l%22%3Bi%3A1%3Bs%3A22%3A%22%5B654305%2Cfalse%2C2592000%5D%22%3B%7D; advanced-frontend=b7a307b7b6424e1823919acc71bc00a9'
        '''
        } 
      }
  }
    post('allure report'){
      always{
        script {
            allure([
                    includeProperties: false,
                    jdk: '',
                    properties: [],
                    reportBuildPolicy: 'ALWAYS',
                    results: [[path: '$WORKSPACE/allure-results']]
            ])
      }
    }
  }
}

