pipeline{
    agent any
    options{
        skipDefaultCheckout(true)
    }
    stages{
        stage('clean up code'){
            steps{
                cleanWs()
            }
        }
        stage('checkout using SCM'){
            steps{
                checkout scm

            }
        }
        stage('build'){
            steps{
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
}
        