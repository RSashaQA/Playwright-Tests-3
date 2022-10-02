pipeline {
  agent any
  stages {
    stage('prepare workspace') {
      steps {
        sh '''
          rm -rf $WORKSPACE/allure-results
          npm i -D @playwright/test
          npm i -D fs-extra
          npm i -D experimental-allure-playwright
          npm i -D allure-commandline
        '''
      }
    }
    stage('clear testing data') {
      steps {
        sh '''
        php /home/jenkins/workspace/limehd-test/account-delete.php
        '''
        }
    }
    stage('test') {
      steps {
        sh '''
        npx playwright test --workers 4 --reporter=line,experimental-allure-playwright
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