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
            steps {
                script {
                    // This block runs inside a Docker container for the "Test" stage
                    docker.image('node:22.11.0-alpine3.20').inside('-u root') {
                        bat 'npm run test'  // Run tests inside the container
                    }
                }
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
