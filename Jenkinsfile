pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('docker') {
      steps {
        sh 'docker compuse up --detach'
      }
    }

  }
}