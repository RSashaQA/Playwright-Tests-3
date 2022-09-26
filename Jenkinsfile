pipeline {
  agent any
  stages {
    stage('prepare workspace') {
      steps {
        sh '''
          rm -rf $WORKSPACE/allure-results
          npm i -D fs-extra
          npm i -D allure-commandline
        '''
      }
    }
    stage('test') {
      steps {
        sh '''
        npx playwright test login.spec.js --workers 8 --reporter=line,experimental-allure-playwright
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