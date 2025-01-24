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
                    // docker.image('node:22.11.0-alpine3.20').inside('-u root -w /workspace')
                    docker.image('node:22.11.0-alpine3.20').inside('-u root -w /c/ProgramData/Jenkins/.jenkins/workspace/git_clone_pipe') {

                    {
                        sh 'npm install'  // Install dependencies
                        // sh 'npm run test'  // Run tests inside the container
                    }
                }
            }
        }

        stage('Build') {
            steps {
                bat '''
                ls -la
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
