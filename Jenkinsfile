pipeline{
    agent any
    stages{
        stage("build"){
            // agent{
            //     docker{
            //         image 'node:18-alpine'
            //         resueNode true 
            //     }
            // }
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