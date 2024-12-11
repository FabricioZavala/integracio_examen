pipeline {
    agent any
    stages {
        stage('Clonar repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/FabricioZavala/integracio_examen.git'
            }
        }
        stage('Construir imagen Docker') {
            steps {
                script {
                    docker.build("proyecto-integrantes:latest")
                }
            }
        }
        stage('Desplegar contenedor') {
            steps {
                script {
                    docker.withRegistry('', '') {
                        docker.image("proyecto-integrantes:latest").run('-d --name proyecto-integrantes -p 3000:3000')
                    }
                }
            }
        }
    }
}
