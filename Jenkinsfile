pipeline {
    agent any
    options {
        skipDefaultCheckout(true)  // Skips the default SCM checkout
    }
    stages {
        stage('Clean Up Workspace') {
            steps {
                cleanWs()  // Clean the workspace before starting
            }
        }
        stage('Checkout SCM') {
            steps {
                checkout scm  // Checkout the code from SCM
            }
        }

        stage('Test') {
            agent {
                docker {
                    image 'node:22.11.0-alpine3.20'
                    args '-u root'
                    reuseNode true // Reuse the node for the next stages
                }
            }

            steps {
                bat '''
                    npm run test
                '''
            }
        }
        stage('Build') {
            steps {
                bat '''
                dir /a  
                node --version  
                npm --version  
                npm install 
                npm run build  
                dir /a  
                '''
            }
        }
    }
    post {
        success {
            echo 'Build completed successfully!'
        }
        failure {
            echo 'Build failed.'
        }
    }
}
