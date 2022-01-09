FROM alpine:3.6

RUN apk --no-cache add dnsmasq bash

EXPOSE 53/udp
EXPOSE 53/tcp

ENTRYPOINT ["dnsmasq", "--keep-in-foreground", "--port", "53"]
