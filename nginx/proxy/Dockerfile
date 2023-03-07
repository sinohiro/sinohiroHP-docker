FROM nginxproxy/nginx-proxy
RUN { \
      echo 'client_max_body_size 51200m;'; \
      echo 'proxy_connect_timeout 1800;'; \
      echo 'proxy_send_timeout 1800;'; \
      echo 'proxy_read_timeout 1800;'; \
      echo 'send_timeout 1800;'; \
    } > /etc/nginx/conf.d/my_proxy.conf