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
          npx playwright test password2 --reporter=line,experimental-allure-playwright --workers 8
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