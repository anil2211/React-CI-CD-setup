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
        stage('Build') {
            steps {
                bat '''
                dir /a  // List all files in the workspace to check
                node --version  // Check the Node.js version
                npm --version  // Check the npm version
                npm install  // Install dependencies
                npm run build  // Run the build script
                dir /a  // List all files again after build
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
