pipeline {
  agent any
  stages {
    stage('install playwright') {
      steps {
        sh '''
          npm i -D @playwright/test
          npx playwright install
          npm i -D experimental-allure-playwright
          npm i -D allure-commandline
          npm i -D fs-extra
        '''
      }
    }
    stage('test') {
      steps {
        sh '''
          npx playwright test --list
          npx playwright test EPG20test.spec.js --reporter=line,experimental-allure-playwright --workers 4
        '''
        } 
      }
    }
    stage('reports') {
      steps {
        script {
            allure([
                    includeProperties: false,
                    jdk: '',
                    properties: [],
                    reportBuildPolicy: 'ALWAYS',
                    results: [[path: 'target/allure-results']]
            ])
                 }
             }
         }
}