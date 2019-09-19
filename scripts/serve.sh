#!/bin/bash

set -e

if [ ! -f "public/index.html" ]; then
  ./scripts/build.sh
fi

serve public -l 8000
