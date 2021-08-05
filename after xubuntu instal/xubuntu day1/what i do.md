load firefox > залогинился в акк огнелиса > загрузил бекапы огнелисаload telega > sudo snap install telegram-desktop > add acc 3
позволил обновлениям скачаться
sudo apt install lm-sensors
sudo sensors-detect
y
sudo apt install ttf-mscorefonts-installer
Y
sudo apt-get install wine
wget http://app.prntscr.com/build/setup-lightshot.exe
wine ./setup-lightshot.exe
sudo apt install ffmpeg
sudo apt install v4l2loopback-dkms
sudo add-apt-repository ppa:obsproject/obs-studio
sudo apt update
sudo apt install obs-studio
gnome-system-monitor //через центр приложений
gsettings set com.canonical.Unity.Lenses remote-content-search none //?????
sudo apt update
sudo apt install fancontrol
sudo pwmconfig
y > 4
sudo systemctl enable fancontrol
sudo systemctl start fancontrol
sudo apt install pulseaudio //на вкладке "устройство ввода" в трёх ячейках указал "встроенное аудио"
arecord -f cd -d 10 test-mic.wav > aplay test-mic.wav // тест майк
sudo apt install gnome-tweaks //lightshot в авто загрузку ставится через gnome-tweaks
sudo apt-get update
IDEA EDU kik ideaComu load
sudo apt-get install default-jdk
sudo apt install maven
sudo ln -s /opt/apache-maven-3.8.1 /opt/maven
sudo touch /etc/environment.d/100-maven.conf
sudo nano /etc/environment.d/100-maven.conf
//
JAVA_HOME=/usr/lib/jvm/default-java
M2_HOME=/opt/maven
MAVEN_HOME=/opt/maven
PATH=/opt/maven/bin:${PATH}
//
ctrl+V > ctrl+x > y > enter
mvn archetype:generate

