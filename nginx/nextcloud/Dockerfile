FROM nextcloud

RUN apt-get update && apt-get -y upgrade
RUN apt-get -y install imagemagick
RUN apt-get -y install libmagickcore-6.q16-6-extra
RUN apt-get -y install ffmpeg
RUN apt-get -y install libsmbclient-dev smbclient
RUN pecl install smbclient
RUN docker-php-ext-enable smbclient