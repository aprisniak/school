#!/bin/bash

ssh -o StrictHostKeyChecking=no ubuntu@$SERVER <<EOF
    cd backend2/school
    ls -la
    if [ -d "ui" ]; then
        rm -rf ui
    fi
    git clone https://github.com/aprisniak/school.git ui
    curl -o- -L https://yarnpkg.com/install.sh | bash
    export PATH="$HOME/.yarn/bin:$PATH"
    cd ui 
    yarn
    yarn build
    docker restart school
    docker restart proxy
EOF