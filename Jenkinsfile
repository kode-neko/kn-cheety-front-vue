pipeline {
  agent any
  stages {
    stage('dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('docker') {
      steps {
        sh 'docker compsoe up --detach'
      }
    }

  }
}