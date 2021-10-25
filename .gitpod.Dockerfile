FROM watheialabs/spectrum-env

# Setup bit

ENV PATH "${PATH}:${HOME}/bin"
RUN npm install --global @teambit/bvm && \
  bvm install