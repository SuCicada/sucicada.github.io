du -sh * | sort  -hr


/var/www
/var/lib/
/usr

tar -zcvf var_www.tar.gz --exclude=www/html/nextcloud/ www
tar -zcvf var_lib.tar.gz --exclude=/var/lib/apt --exclude=/var/lib/docker --exclude=/var/lib/snapd /var/lib
tar -zcvf usr.tar.gz  /usr
tar -zcvf /mnt/mnt_TOOL.tar.gz  /mnt/TOOL
tar -zcvf /mnt/home.tar.gz  /home
tar -zcvf /mnt/sbin.tar.gz  /sbin
tar -zcvf /mnt/bin.tar.gz  /bin
tar -zcvf /mnt/var_lib_mysql.tar.gz  /var/lib/mysql
tar -zcvf /mnt/etc.tar.gz  /etc/mysql /etc/apache2 /etc/nginx

rsync -t /mnt/var_lib.tar.gz 101.132.254.3:/mnt
rsync -taP /mnt/TOOL/frp_0.34.3_linux_amd64 101.132.254.3:/mnt/TOOL

tar zxvf /mnt/var_lib_mysql.tar.gz -C /
tar zxvf /mnt/etc.tar.gz -C /
tar zxvf /mnt/var_www.tar.gz

adduser peng
passwd peng
echo "peng    ALL=(ALL:ALL)   ALL" | sudo tee -a /etc/sudoers

sudo hostnamectl set-hostname SuCicada
echo "127.0.0.1 SuCicada" | sudo tee -a /etc/hosts
sudo vim /etc/hosts
sudo sed -i 's/iZuf67o9yr29z1bkh55am9Z/SuCicada/g' /etc/hosts



## install 
mysql
jdk 8
nodejs 14
redis
apache2
nginx


## vim
w !sudo tee %
%d


9.9G    var
4.2G    usr
3.3G    tmp
1.8G    mnt
1.8G    home
1.2G    lib
1.1G    snap
733M    root
196M    boot
26M     run
13M     bin
11M     etc
7.5M    sbin
20K     scp
20K     opt
16K     lost+found
12K     media
8.0K    srv
4.0K    lib64
0       vmlinuz.old
0       vmlinuz
0       sys
0       proc
0       initrd.img.old
0       initrd.img
0       dev