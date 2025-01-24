pipeline {
    agent any
    environment{
        My_VAR="my value"
        NODE_ENV="test"
        VERCEL_TOKEN=credentials("VERCEL_TOKEN")
    }
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

        // stage('Test') {
        //     steps {
        //         script {
        //             // Running the Docker container with correct absolute path for Windows
        //             // docker.image('node:22.11.0-alpine3.20').inside(
        //             //     '-v C:/ProgramData/Jenkins/.jenkins/workspace/git_clone_pipe:/workspace -w /workspace') {
        //             docker.image('node:22.11.0-alpine3.20').inside("-w /workspace"){
        //                 // Install dependencies inside the container
        //                 sh 'npm install'  
        //                 // Uncomment if you want to run tests inside the container
        //                 // sh 'npm run test'
        //             }
        //         }
        //     }
        // }

        stage('Build') {
            steps {
                bat '''
                dir /a
                node --version  
                npm --version  
                npm install 
                npm run build  
                ls -la  
                '''
            }
        }
        stage("deploy on vercel"){
            steps{
                bat '''
                npm install -g vercel
                npm update -g vercel 
                npm install uuid@latest
                npm install glob@latest

                echo $My_VAR
                echo
                vercel --prod --token=$VERCEL_TOKEN --confirm --name=cicd_project2

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
