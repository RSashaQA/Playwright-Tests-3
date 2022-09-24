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
    stage('clear testing data') {
      steps {
      sh '''
        php /var/lib/jenkins/workspace/limehd-test/account-delete.php
      '''
      }
    }
    stage('test') {
      steps {
        sh '''
          npx playwright test login.spec.js --reporter=line,experimental-allure-playwright --workers 8 
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