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
                    docker.image('node:22.11.0-alpine3.20').inside('-w /workspace/') {
                        sh 'npm install'  // Install dependencies
                        // sh 'npm run test'  // Uncomment if you want to run tests inside the container
                    }
                }
            }
        }

        stage('Build') {
            steps {
                sh '''
                dir /a
                node --version  
                npm --version  
                npm install 
                npm run build  
                ls -la  
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
