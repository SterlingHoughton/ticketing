thisisunsafe - for SSL / cert issues on chrome

gcloud auth login

gcloud init

gcloud container clusters get-credentials <clustername>

gcloud auth login --update-adc
-- https://cloud.google.com/docs/authentication/production#command-line

To view the current context for kubectl, run the following command:
--kubectl config current-context

To view all contexs for kubectl, run the following command:
--kubectl config get-contexts

After your clusters, users, and contexts are defined in one or more configuration files, you can quickly switch between clusters by using the
--kubectl config use-context <my-cluster-name>

To view your environment's kubeconfig, run the following command:
-- kubectl config view

Configure Access to Multiple Clusters
https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/

https://skaffold.dev/

https://skaffold.dev/docs/references/yaml/

https://github.com/GoogleContainerTools/skaffold/tree/master/examples

https://github.com/GoogleContainerTools/kaniko

https://cloud.google.com/cloud-build/docs/kaniko-cache

https://kubernetes.github.io/ingress-nginx/deploy/#gce-gke

https://nodejs.org/en/docs/guides/nodejs-docker-webapp/