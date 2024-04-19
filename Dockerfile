# docker buildx build --platform linux/amd64 . -t peemchaar/3dportfolio:v1.0
# docker run --rm --name 3dportfolio -d -p 3000:3000 peemchaar/3dportfolio:v1.0

#================================================
# Stage 1 - the build process
#================================================
# Use the official Node.js image as the base image
FROM node:gallium-alpine3.18 as build-env

LABEL maintainer="Hermes Rodríguez <hejeroaz@gmail.com>"
LABEL maintainer="Sebastian Rodríguez <zosebas@gmail.com>"

# Set the working directory in the container
WORKDIR /app

# Copy package.json to the container
COPY package.json .

# Install project dependencies
RUN npm install --legacy-peer-deps

# Copy the entire project to the container
COPY . .

# Build the Angular app for production
RUN npm ci  --legacy-peer-deps
RUN npm install -g '@angular/cli@16.2.14' && ng build


#================================================
#
# NOTE: THIS DOCKERFILE IS GENERATED VIA "update.sh"
#
# PLEASE DO NOT EDIT IT DIRECTLY.
# https://github.com/nginxinc/docker-nginx/blob/master/mainline/alpine/Dockerfile
# https://raw.githubusercontent.com/nginxinc/docker-nginx/master/mainline/alpine/Dockerfile
#
FROM nginx:1.25.4-alpine-slim

LABEL maintainer="NGINX Docker Maintainers <docker-maint@nginx.com>"
LABEL maintainer="Hermes Rodríguez <hrodriguez@cbpi.com.mx>"

ENV NGINX_VERSION 1.25.4
ENV NJS_VERSION   0.8.3
ENV PKG_RELEASE   1

ARG UID=10000
ARG GID=10000

ARG BUILD_WORKSPACE=""
ARG BUILD_AND_RUN_TESTS=""
ENV WORKSPACE=${BUILD_WORKSPACE}
ENV CBPI_PROJECT="CBPI.WebUI"

RUN set -x \
  && apkArch="$(cat /etc/apk/arch)" \
  && nginxPackages=" \
  nginx=${NGINX_VERSION}-r${PKG_RELEASE} \
  nginx-module-xslt=${NGINX_VERSION}-r${PKG_RELEASE} \
  nginx-module-geoip=${NGINX_VERSION}-r${PKG_RELEASE} \
  nginx-module-image-filter=${NGINX_VERSION}-r${PKG_RELEASE} \
  nginx-module-njs=${NGINX_VERSION}.${NJS_VERSION}-r${PKG_RELEASE} \
  " \
  # install prerequisites for public key and pkg-oss checks
  && apk add --no-cache --virtual .checksum-deps \
  openssl \
  && case "$apkArch" in \
  x86_64|aarch64) \
  # arches officially built by upstream
  set -x \
  && KEY_SHA512="e09fa32f0a0eab2b879ccbbc4d0e4fb9751486eedda75e35fac65802cc9faa266425edf83e261137a2f4d16281ce2c1a5f4502930fe75154723da014214f0655" \
  && wget -O /tmp/nginx_signing.rsa.pub https://nginx.org/keys/nginx_signing.rsa.pub \
  && if echo "$KEY_SHA512 */tmp/nginx_signing.rsa.pub" | sha512sum -c -; then \
  echo "key verification succeeded!"; \
  mv /tmp/nginx_signing.rsa.pub /etc/apk/keys/; \
  else \
  echo "key verification failed!"; \
  exit 1; \
  fi \
  && apk add -X "https://nginx.org/packages/mainline/alpine/v$(egrep -o '^[0-9]+\.[0-9]+' /etc/alpine-release)/main" --no-cache $nginxPackages \
  ;; \
  *) \
  # we're on an architecture upstream doesn't officially build for
  # let's build binaries from the published packaging sources
  set -x \
  && tempDir="$(mktemp -d)" \
  && chown nobody:nobody $tempDir \
  && apk add --no-cache --virtual .build-deps \
  gcc \
  libc-dev \
  make \
  openssl-dev \
  pcre2-dev \
  zlib-dev \
  linux-headers \
  libxslt-dev \
  gd-dev \
  geoip-dev \
  libedit-dev \
  bash \
  alpine-sdk \
  findutils \
  && su nobody -s /bin/sh -c " \
  export HOME=${tempDir} \
  && cd ${tempDir} \
  && curl -f -O https://hg.nginx.org/pkg-oss/archive/${NGINX_VERSION}-${PKG_RELEASE}.tar.gz \
  && PKGOSSCHECKSUM=\"79bf214256bf55700c776a87abfc3cf542323a267d879e89110aa44b551d12f6df7d56676a68f255ebbb54275185980d1fa37075f000d98e0ecac28db9e89fe3 *${NGINX_VERSION}-${PKG_RELEASE}.tar.gz\" \
  && if [ \"\$(openssl sha512 -r ${NGINX_VERSION}-${PKG_RELEASE}.tar.gz)\" = \"\$PKGOSSCHECKSUM\" ]; then \
  echo \"pkg-oss tarball checksum verification succeeded!\"; \
  else \
  echo \"pkg-oss tarball checksum verification failed!\"; \
  exit 1; \
  fi \
  && tar xzvf ${NGINX_VERSION}-${PKG_RELEASE}.tar.gz \
  && cd pkg-oss-${NGINX_VERSION}-${PKG_RELEASE} \
  && cd alpine \
  && make module-geoip module-image-filter module-njs module-xslt \
  && apk index -o ${tempDir}/packages/alpine/${apkArch}/APKINDEX.tar.gz ${tempDir}/packages/alpine/${apkArch}/*.apk \
  && abuild-sign -k ${tempDir}/.abuild/abuild-key.rsa ${tempDir}/packages/alpine/${apkArch}/APKINDEX.tar.gz \
  " \
  && cp ${tempDir}/.abuild/abuild-key.rsa.pub /etc/apk/keys/ \
  && apk del --no-network .build-deps \
  && apk add -X ${tempDir}/packages/alpine/ --no-cache $nginxPackages \
  ;; \
  esac \
  # remove checksum deps
  && apk del --no-network .checksum-deps \
  # if we have leftovers from building, let's purge them (including extra, unnecessary build deps)
  && if [ -n "$tempDir" ]; then rm -rf "$tempDir"; fi \
  && if [ -f "/etc/apk/keys/abuild-key.rsa.pub" ]; then rm -f /etc/apk/keys/abuild-key.rsa.pub; fi \
  && if [ -f "/etc/apk/keys/nginx_signing.rsa.pub" ]; then rm -f /etc/apk/keys/nginx_signing.rsa.pub; fi \
  # Bring in curl and ca-certificates to make registering on DNS SD easier
  && apk add --no-cache curl ca-certificates tzdata \
  # forward request and error logs to docker log collector
  && ln -sf /dev/stdout /var/log/nginx/access.log \
  && ln -sf /dev/stderr /var/log/nginx/error.log

# implement changes required to run NGINX as an unprivileged user
RUN sed -i 's,listen       80;,listen       3000;,' /etc/nginx/conf.d/default.conf \
  && sed -i '/user  nginx;/d' /etc/nginx/nginx.conf \
  && sed -i 's,/var/run/nginx.pid,/tmp/nginx.pid,' /etc/nginx/nginx.conf \
  && sed -i "/^http {/a \    proxy_temp_path /tmp/proxy_temp;\n    client_body_temp_path /tmp/client_temp;\n    fastcgi_temp_path /tmp/fastcgi_temp;\n    uwsgi_temp_path /tmp/uwsgi_temp;\n    scgi_temp_path /tmp/scgi_temp;\n" /etc/nginx/nginx.conf \
  # nginx user must own the cache and etc directory to write cache and tweak the nginx config
  && chown -R $UID:0 /var/cache/nginx \
  && chmod -R g+w /var/cache/nginx \
  && chown -R $UID:0 /etc/nginx \
  && chmod -R g+w /etc/nginx

COPY build-datetime.log /

COPY docker-entrypoint.sh /
COPY 10-listen-on-ipv6-by-default.sh /docker-entrypoint.d
COPY 20-envsubst-on-templates.sh /docker-entrypoint.d
COPY 30-tune-worker-processes.sh /docker-entrypoint.d
COPY 99-build-datetime.sh /docker-entrypoint.d

COPY --from=build-env /app/dist/sebastian_portfolio /usr/share/nginx/html
COPY --from=build-env /app/nginx.conf /etc/nginx/conf.d/default.conf
RUN chown -R 10000:10000 /usr/share/nginx/html
RUN chmod +x /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
RUN chmod +x /docker-entrypoint.d/20-envsubst-on-templates.sh
RUN chmod +x /docker-entrypoint.d/30-tune-worker-processes.sh
RUN chmod +x /docker-entrypoint.d/99-build-datetime.sh

ENTRYPOINT ["/docker-entrypoint.sh"]
STOPSIGNAL SIGQUIT

USER $UID

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 3000
