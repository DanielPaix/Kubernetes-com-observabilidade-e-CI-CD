#Kubernetes com Observabilidade e CI/CD


Este projeto implementa uma arquitetura containerizada utilizando Docker, orquestrada com Kubernetes, integrada a um pipeline de CI/CD com GitHub Actions e com escalabilidade automática via HPA.

A solução simula um ambiente de produção com deploy automatizado, rolling update e elasticidade baseada em consumo de CPU.

-- Arquitetura

Containerização com Docker

Orquestração com Kubernetes

Deploy automático via GitHub Actions

Publicação automática de imagens no Docker Hub

Escalabilidade automática baseada em métricas (HPA + metrics-server)

-- Pré-requisitos

Para executar localmente:

Docker instalado

Kubernetes (Minikube, Kind ou cluster configurado)

kubectl configurado

Conta no Docker Hub (para CI/CD)

-- Execução com Docker (Local)

Build da imagem:

docker build -t nome-da-imagem .


Executar container:

docker run -p 3000:3000 nome-da-imagem

-- Deploy no Kubernetes

Aplicar todos os manifestos:

-kubectl apply -f k8s/

Verificar pods:

-kubectl get pods

Verificar serviços:

-kubectl get services

 Verificar escalabilidade automática:

-kubectl get hpa
-kubectl top pods

-- Estratégia de Deploy

O projeto utiliza Kubernetes Deployment, que aplica Rolling Update por padrão, garantindo atualização gradual dos pods sem indisponibilidade do serviço.

-- Escalabilidade

Foi implementado Horizontal Pod Autoscaler (HPA) baseado em consumo de CPU:

Mínimo de réplicas: 2

Máximo de réplicas: 5

Escala automática conforme carga

O metrics-server é utilizado para coleta das métricas.

-- CI/CD

O pipeline foi configurado com GitHub Actions.

A cada push na branch main:

As imagens são buildadas automaticamente

O login no Docker Hub é realizado via secrets

As imagens são publicadas automaticamente

Isso garante automação completa do processo de build e distribuição.
/////////////////////////////////////////////////////////////////////
!link do vídeo no YouTube: https://youtu.be/2D3T81Ebntk