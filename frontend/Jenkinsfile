pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/meelan10/online-food-ordering-system.git'
            }
        }
        stage('Install') {
            steps {
                dir('client') {
                    sh 'npm install'
                }
            }
        }
        stage('Build') {
            steps {
                dir('client') {
                    sh 'npm run build'
                }
            }
        }
    }
}