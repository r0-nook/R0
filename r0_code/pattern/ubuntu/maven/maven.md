sudo apt update
sudo apt install maven
sudo tar xvf ~/Загрузки/apache-maven-*.tar.gz -C /opt
распаковать скачанный файл из загрузок в опт каталог для установок

sudo ln -s /opt/apache-maven-3.8.1 /opt/maven

Для использования программы осталось настроить переменные окружения. Создайте файл /etc/environment.d/100-maven.conf и добавьте туда такие строки:
sudo vi /etc/environment.d/100-maven.conf

JAVA_HOME=/usr/lib/jvm/default-java
M2_HOME=/opt/maven
MAVEN_HOME=/opt/maven
PATH=/opt/maven/bin:${PATH}

mvn archetype:generate

Вся конфигурация, созданная в Maven будет хранится в файле pom.xml. Вы можете посмотреть его содержимое:
nano pom.xml


Исходники программы находятся в папке src/main/java/com/losst/App.java:
cat src/main/java/com/losst/App.java
