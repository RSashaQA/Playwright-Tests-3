pipeline {
  agent any
  stages {
    stage('prepare playwright') {
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
    stage('test') {
      steps {
        sh '''
          npx playwright test --list
          npx playwright test EG20test --reporter=line,experimental-allure-playwright --workers 8
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
                    results: [[path: 'target/allure-results']]
            ])
                 }
              archiveArtifacts(artifacts: '*EPG*.png', followSymlinks: false)
              sh 'rm -rf *.png'
    }
  }
}