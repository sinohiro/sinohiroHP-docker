FROM nextcloud

RUN apt-get update && apt-get -y upgrade
RUN apt-get -y install imagemagick
RUN apt-get -y install libmagickcore-6.q16-6-extra
RUN apt-get -y install ffmpeg
RUN apt-get -y install libsmbclient-dev smbclient || true
RUN pecl install smbclient || true
RUN docker-php-ext-enable smbclient || true